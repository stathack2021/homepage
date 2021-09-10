#!/bin/sh
#
# Make Next application

. docker/env.sh
docker run \
  -it \
  -v $PWD:/workspace \
  -p $APP_HOST_PORT:$APP_CONTAINER_PORT \
  --name $CONTAINER_NAME\
  --rm \
  $IMAGE_NAME sh -c "npx create-next-app --example with-typescript-eslint-jest $APP_NAME"