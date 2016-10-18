#!/usr/bin/env bash
export TERM=xterm
source $NVM_DIR/nvm.sh
cd /usr/src/app
Xvfb -ac -screen scrn 1280x2000x24 :9.0 & export DISPLAY=:9.0 && npm start
