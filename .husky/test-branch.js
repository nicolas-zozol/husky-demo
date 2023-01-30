const gitBranchIs = require('git-branch-is')
const { exec } = require('child_process')
gitBranchIs(function (branchName) {
  console.log('we are on branch', branchName)
  return /^wip/.test(branchName)
}).then(
  function (result) {
    console.log(result ? 'On wip' : 'Not on wip')
    if (result) {
      executeWip()
    } else {
      executeNotWip()
    }
  },
  function (err) {
    console.error(err)
  }
)

function executeWip() {
  exec('ls -la', processing)
}

function executeNotWip() {
  exec('npm run test', processing)
}

function processing(error, stdout, stderr) {
  if (error) {
    console.log(`error: ${error.message}`)
    process.exit(1)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    process.exit(1)
    return
  }
  console.log(`stdout: ${stdout}`)
}
