# validate-commit-msg-bot

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

<p align="center">
  <img src="docs/robot.png" alt="robot" />
</p>

[travis-url]: https://travis-ci.org/tlvince/validate-commit-msg-bot
[travis-image]: https://img.shields.io/travis/tlvince/validate-commit-msg-bot.svg
[npm-url]: https://www.npmjs.com/package/validate-commit-msg-bot
[npm-image]: https://img.shields.io/npm/v/validate-commit-msg-bot.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/validate-commit-msg-bot.svg

> validate-commit-msg aaS

Runs [validate-commit-msg][] over all commits of new or edited pull requests and sets an appropriate a [status check][].

Send a PR to [tlvince-sandbox-validate-commit-msg-bot][] to see it in action.

[status check]: https://developer.github.com/v3/repos/statuses/
[validate-commit-msg]: https://github.com/conventional-changelog/validate-commit-msg
[tlvince-sandbox-validate-commit-msg-bot]: https://github.com/tlvince/tlvince-sandbox-validate-commit-msg-bot

## Usage

1. Browse to [GitHub Apps - validate commit msg][apps]
2. Accept the permissions
3. Allow access to repositories

On the next pull request, a status check from `validate-commit-msg-bot` will appear:

![status-check-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `validate-commit-msg` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/validate-commit-msg-bot
[status-check-screenshot]: docs/status-check-screenshot.png
[branch-protection-screenshot]: docs/branch-protection-screenshot.png

## Development

1. Setup the repo:

    ```shell
    git clone https://github.com/tlvince/validate-commit-msg-bot.git
    cd validate-commit-msg-bot
    npm install
    ```

2. Create your own [GitHub app][]
3. Store the private key as `private-key.pem` in the repo
4. Start the app with `APP_ID=1234 npm start` where `1234` is your GitHub app's ID
5. Update your GitHub app's Webhook URL to your localtunnel.me URL

[GitHub app]: https://probot.github.io/docs/development/#configure-a-github-app

## Author

© 2017 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).

Robot emoji courtesy of [EmojiOne](https://www.emojione.com/emoji/1f916).
