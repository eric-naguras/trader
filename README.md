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

I have also a packaged app for Linux.
that runs on Ubuntu 14.04 Desktop
You can download the packaged app here:
https://www.dropbox.com/s/7dhe1r5grypn8cu/trader-linux-x64.zip?dl=0

and a screenshot seeing the app running here:
https://www.dropbox.com/s/j40au7biouisfti/Screenshot_17_10_2016__8_25_PM.jpg?dl=0

### Build
Build the image manually:

    docker build -t mycompany/myimage .


### Run container

Foregroud:

    docker run \
      -ti \
      --name myname \
      mycompany/myimage

Background:

    docker run \
      -d \
      --name myname \
      mycompany/myimage

Attach to logs:

    docker logs -f myname
