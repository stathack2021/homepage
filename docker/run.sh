#!/bin/sh
#
# Run the docker container.

. docker/env.sh
docker run \
  -dit \
  -v $PWD:/workspace \
  -p $APP_HOST_PORT:$APP_CONTAINER_PORT \
  --name $CONTAINER_NAME\
  --rm \
  $IMAGE_NAME sh -c "cd $APP_NAME; yarn install; yarn dev"