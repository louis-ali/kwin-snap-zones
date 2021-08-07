#!/bin/bash

set -Ceux

cd package

zip ../snap-zones.kwinscript  \
	contents/code/main.js  \
	contents/config/main.xml  \
	contents/ui/config.ui  \
	LICENSE  \
	metadata.desktop
