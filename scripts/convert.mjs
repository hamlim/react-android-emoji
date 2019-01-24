import svgrModule from '@svgr/core'
import emojiMap from 'emoji-unicode-to-name'
import fs from 'fs'
import prettier from 'prettier'
import babel from '@babel/core'
import svgoUniqueId from 'svgo-unique-id'

const { transformSync } = babel

const svgr = svgrModule.default

function svgTemplate({ template }, opts, { imports, componentName, props, jsx, exports }) {
  return template.ast`${imports}
function ${componentName}(${props}) {
  return ${jsx}
}
${exports}
`
}

const svgrConfig = {
  template: svgTemplate,
  plugins: ['@svgr/plugin-prettier', '@svgr/plugin-jsx'],
  prettierConfig: { parser: 'babel' },
  svgoConfig: {
    plugins: [{ uniqueID: svgoUniqueId }],
  },
  dimensions: false,
  svgo: true,
}

function readFiles() {
  const svgFiles = new Map()
  const files = fs.readdirSync('./svg')
  for (const file of files) {
    const unicode = file
      .split('emoji_')[1]
      .split('_')[0]
      .split('.')[0]
    const hex = unicode.replace('u', '0x')
    try {
      let emoji = String.fromCodePoint(hex)
      const attemptedName = emojiMap.get(emoji) || hex
      svgFiles.set(attemptedName, {
        raw: fs.readFileSync(`./svg/${file}`).toString(),
        name: attemptedName,
        unicode: hex,
      })
    } catch (error) {
      console.log(error)
      console.log(hex)
    }
  }
  return svgFiles
}

const allFiles = readFiles()

function convertToReactComponent(string) {
  let name
  if (string.startsWith('0x')) {
    name = `UnidentifiedEmoji${string.split('0x')[1]}`
  }
  name = string
    .split('_')
    .map(chunk => `${chunk[0].toUpperCase()}${chunk.slice(1)}`)
    .join('')

  if (name[0] == Number(name[0])) {
    name = `Emoji${name}`
  }
  name = name.replace('+', 'Plus')
  name = name.replace('-', 'Minus')
  return name
}

async function parseSVG(files) {
  for (const [emoji, { raw, unicode }] of files) {
    try {
      const componentName = convertToReactComponent(emoji)
      let resultJSX = await svgr(raw, svgrConfig, { componentName })
      let { code } = transformSync(resultJSX, {
        plugins: [
          '@babel/plugin-transform-react-jsx',
          'babel-plugin-transform-es2015-modules-commonjs',
        ],
      })
      fs.writeFileSync(`./src/${componentName}.js`, prettier.format(code, { parser: 'babel' }))
    } catch (error) {
      console.log(error)
      return
    }
  }
}

parseSVG(allFiles)
