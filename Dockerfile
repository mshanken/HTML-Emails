FROM node:4.7.2
MAINTAINER M. Shanken Communications <dev@mshanken.com>

# set up node user
RUN npm install -g harp grunt-cli node-sass bower
ENV HOME /home/node

COPY package.json $HOME
RUN chown -R node:node $HOME

USER node
# WORKDIR $HOME
# VOLUME [ "$HOME" ]
ADD . $HOME
WORKDIR $HOME
RUN mkdir $HOME/www

RUN npm install && bower install

EXPOSE 9000

CMD [ "npm", "run", "start" ]