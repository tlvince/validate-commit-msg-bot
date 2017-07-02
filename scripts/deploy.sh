#!/bin/sh
now="npm run -s now -- --token=$NOW_TOKEN"
repo_name="${TRAVIS_REPO_SLUG##*/}"
$now --public && $now rm --safe --yes "$repo_name"
