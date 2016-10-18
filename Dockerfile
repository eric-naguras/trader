FROM million12/centos-supervisor

MAINTAINER Eric Dela Cruz <eric@naguras.com>, Przemyslaw Ozgo <przemek@m12.io>

ENV \
  NVM_DIR=/usr/local/nvm \
  NODE_VERSION=6.3.0 \
  PROFILE=/etc/profile.d/nvm.sh

RUN \
  rpm --rebuilddb && yum clean all && \
  # yum install -y epel-release && \
  yum install -y x11vnc gtk2 libXScrnSaver GConf2 alsa-lib xorg-x11-server-utils gnu-free-sans-fonts && \
  yum clean all

# Add container files
COPY container-files /

# Install node
RUN \
  curl -sSL https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash && \
  source $NVM_DIR/nvm.sh && \
  nvm install $NODE_VERSION && \
  nvm alias default $NODE_VERSION && \
  nvm use default && \
  cd /usr/src/app && npm install

CMD ["/bootstrap.sh"]
