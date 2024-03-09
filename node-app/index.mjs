import fs from 'fs'

fs.appendFile('my-file.txt', 'file created Node.js', (err) => {
  if (err) throw err
  console.log('File created!')
})

