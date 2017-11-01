const isValid = require('validate-commit-msg')

async function handlePullRequestHook ({github, payload}) {
  const repo = payload.repository.name
  const owner = payload.repository.owner.login

  const commitParams = {
    repo,
    owner,
    number: payload.pull_request.number
  }

  github.paginate(github.pullRequests.getCommits(commitParams), commits => {
    const messages = commits.data.map(datum => datum.commit.message)
    const allValid = messages.every(message => isValid(message))

    const statusParams = {
      sha: payload.pull_request.head.sha,
      repo,
      owner,
      state: allValid ? 'success' : 'error',
      context: 'validate-commit-msg',
      target_url: 'https://conventionalcommits.org/',
      description: `${allValid ? '' : 'not '}all commit messages are valid`
    }

    github.repos.createStatus(statusParams)
  })
}

const events = [
  'pull_request.opened',
  'pull_request.edited',
  'pull_request.synchronize'
]

module.exports = robot => robot.on(events, handlePullRequestHook)
