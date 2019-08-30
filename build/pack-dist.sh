#!/bin/bash
set -x
set -e

DIST=dist;
ROOT_DIR=$(cd `dirname $0` && pwd)/..;
cd "$ROOT_DIR"

(
    cd "$DIST/tns-platform-declarations"
    TGZ="$(npm pack)"
    mv "$TGZ" "../$TGZ"
)

(
    cd "$DIST/nativescript-core"
    TGZ="$(npm pack)"
    mv "$TGZ" "../$TGZ"
)