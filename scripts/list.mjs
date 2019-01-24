import fs from 'fs'

function getAllEmojiFiles() {
  const allIcons = new Map()
  const files = fs.readdirSync('./src')
  for (const file of files) {
    const name = file.split('.js')[0]
    allIcons.set(name, `import ${name} from '@matthamlin/react-android-emoji/src/${name}.js'`)
  }
  return allIcons
}

const allIcons = getAllEmojiFiles()

fs.writeFileSync(
  './examples/src/Icons.js',
  `import React from 'react';
${[...allIcons.values()].join('\n')}

export default function Icons() {
  return (
    <React.Fragment>
      ${[...allIcons.keys()].map(key => `<div><h3>${key}</h3><${key} /></div>`).join('\n')}
    </React.Fragment>
  )
}`,
)
