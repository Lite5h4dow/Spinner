#!/bin/bash

case $ENVIRONMENT in
  PRODUCTION)
    ~/.bun/bin/bun start
  ;;
  *)
    ~/.bun/bin/bun dev -p ${APP_PORT:-8000}
  ;;
esac
