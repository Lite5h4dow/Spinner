#!/bin/bash

if [ $ENVIRONMENT == "PRODUCTION" ]; then
  ~/.bun/bin/bun start
else
  ~/.bun/bin/bun dev
fi
