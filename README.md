# trader
test for headless electron trading app


The objective is to have this Electron app running in a docker container
with the least amount of memory possible. To archieve this make a headless environment
in the docker container.

See: http://electron.atom.io/docs/tutorial/testing-on-headless-ci/

the Electron app is started by npm start

To run this on a dev machine
install node.js
git clone this repo
cd into the app folder
$ npm install
$ npm start

The included Dockerfile is an example, IT DOES NOT WORK

