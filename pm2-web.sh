#!/bin/bash

echo "Starting to setup the webserver.."
echo "Installing the webserver."
npm install
echo "Building the production build."
npx next build
echo "Starting the production build."
npx next start -p 4000