const fs = require('fs')
const path = require('path')
const execa = require('execa')

async function genNewRelease (nextVersion) {
  const { stdout } = await execa(require.resolve('lerna-changelog/bin/cli'), [
    '--next-version',
    nextVersion,
  ]);
  return stdout;
}

const gen = (module.exports = async (nextVersion) => {
  const newRelease = await genNewRelease(nextVersion)
  const changelogPath = path.resolve(__dirname, '../CHANGELOG.md')

  const newChangelog =
    newRelease + '\n\n\n' + fs.readFileSync(changelogPath, { encoding: 'utf8' })
  fs.writeFileSync(changelogPath, newChangelog)

  await execa('git', ['add', 'CHANGELOG.md'], { stdio: 'inherit' });
})

if (require.main === module) {
  gen().catch(err => {
    console.error(err)
    process.exit(1)
  })
}
