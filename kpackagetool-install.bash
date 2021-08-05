#!/bin/bash

set -Ceux

kpackagetool5 --install package

mkdir --parents --verbose ~/.local/share/kservices5/
ln --relative --symbolic --verbose  \
	~/.local/share/kwin/scripts/kwin-snap-zones/metadata.desktop  \
	~/.local/share/kservices5/kwin-script-kwin-snap-zones.desktop
