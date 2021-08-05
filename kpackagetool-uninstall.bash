#!/bin/bash

set -Cux

kpackagetool5 --remove package

rm       --force --recursive --verbose ~/.local/share/kwin/scripts/snap-zones/
rm       --force             --verbose ~/.local/share/kservices5/kwin-script-snap-zones.desktop
rm --dir --force             --verbose ~/.local/share/kservices5/
