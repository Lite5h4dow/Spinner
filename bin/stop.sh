#!/bin/bash
DIRECTORY=`dirname $0`
cd ${DIRECTORY}/../..
docker compose -f .docker/docker-compose.yml down
