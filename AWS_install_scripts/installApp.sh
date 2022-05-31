#!/bin/bash

#----------------------------------
# install the node server
#----------------------------------
cp /home/ubuntu/env/env /home/ubuntu/BASE/server/.env

cd /home/ubuntu/BASE/server
npm install

if [ ! -d "$public" ]; then
  # Control will enter here if $public doesn't exist.
  mkdir public
fi


#----------------------------------
# build the client app
#----------------------------------
cd /home/ubuntu/BASE/client
npm install
echo "Quasar build step"
quasar build
echo "start Node server..."
#start Node server for social media apis
systemctl start nodejs
