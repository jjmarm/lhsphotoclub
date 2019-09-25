#!/bin/sh
# Set up a localhost server on directory

python3 -m http.server & open http://localhost:8000
