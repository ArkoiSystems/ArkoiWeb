#!/bin/bash

echo "Starting to setup the webserver.."
echo "Installing the webserver."
npm install
echo "Building the production build."
npm build
echo "Starting the production build."
npm start