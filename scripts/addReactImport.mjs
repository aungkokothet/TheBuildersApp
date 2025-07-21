import fs from 'fs'
import path from 'path'
import fg from 'fast-glob'

const files = await fg('src/**/*.tsx', { dot: false })

for (const file of files) {
  const fullPath = path.resolve(file)
  const content = fs.readFileSync(fullPath, 'utf8')

  if (!content.includes('import React')) {
    const updated = `import React from "react"\n` + content
    fs.writeFileSync(fullPath, updated, 'utf8')
    console.log(`✅ Added React import to: ${file}`)
  } else {
    console.log(`🟡 Skipped (already has React): ${file}`)
  }
}
