#!/bin/bash

case $ENVIRONMENT in
  "DEVELOPMENT")
    pnpm dev -p ${PORT:-8000}
  ;;

  *)
    pnpm start -p ${PORT:-8000}
  ;;
esac
