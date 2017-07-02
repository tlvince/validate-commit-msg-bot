#!/bin/sh
npm run now --public
repo_name="${TRAVIS_REPO_SLUG##*/}"
npm run now rm --safe --yes "$repo_name"
