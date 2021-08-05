#!/bin/bash

set -Cux

kpackagetool5 --remove package

rm       --force --recursive --verbose ~/.local/share/kwin/scripts/kwin-snap-zones/
rm       --force             --verbose ~/.local/share/kservices5/kwin-script-kwin-snap-zones.desktop
rm --dir --force             --verbose ~/.local/share/kservices5/
