#!/bin/bash

# exit if any command fails
set -e

# build
npm run build

touch build/Staticfile

# deploy to cf
pushd build/
cf push -b staticfile_buildpack workonyourmoves --random-route
popd
