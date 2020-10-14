# jobcityChallenge1
This is the automation framework for challenge1 of jobcity

## pre-requisites
install node and NPM on mac,
`https://treehouse.github.io/installation-guides/mac/node-mac.html` 

## clone the project
`git clone git@github.com:a-arias/jobcityChallenge1.git`

## Install libraries
`npm install`

## Run the tests
set up the percy token to perfom visual regression testing.
`export PERCY_TOKEN=784b3eec92992be539d8aacca794064ae811fe228859f0631adfd951f132b206`

This command is going to execute all of the tests.
`percy exec -- ./node_modules/.bin/wdio wdio.conf.js`

