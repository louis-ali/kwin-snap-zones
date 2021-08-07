"use strict";

var zones = [
  {x: 0, y: 0, width: 1080, height: 609},
  {x: 0, y: 609, width: 1080, height: 767},
  {x: 0, y: 1375, width: 1080, height: 501},
];

// function loadZone(confNumber) {
//   var prefix = "z"+confNumber+"_";
//   var zone = {
//     x: readConfig(prefix+"x"),
//     y: readConfig(prefix+"y"),
//     width: readConfig(prefix+"w"),
//     height: readConfig(prefix+"h")
//   };
//   print("loaded zone " + JSON.stringify(zone));
//   return zone;
// }

// function loadZones() {
//   print("loading zones");
//   zones.push(loadZone(0));
//   zones.push(loadZone(1));
//   zones.push(loadZone(2));
//   print("zones loaded");
// }

function getZoneTheClientIsIn(client) {
  var clientCenter = {
    x: (client.geometry.width / 2) + client.geometry.x,
    y: (client.geometry.height / 2) + client.geometry.y,
  }

  for (var i = 0; i < zones.length; i++) {
    if (clientCenter.x > zones[i].x && clientCenter.x < (zones[i].x + zones[i].width)
      && clientCenter.y > zones[i].y && clientCenter.y < (zones[i].y + zones[i].height))
      return zones[i];
  }
  return false;
}

function onClientFinishedMoveResize(client) {
  print("client " + client.caption + " called onClientFinishedMoveResize");
  if(zones.length == 0) {
    return;
  }
  var zone = getZoneTheClientIsIn(client);
  if (zone) {
    print("client in zone " + JSON.stringify(zone));
    client.geometry = zone;
  } else {
    print("client not in a zone");
  }
}

function connectClient(client) {
  if(!client.moveable) return;
  print("connect client " + client.caption);
  client.clientFinishUserMovedResized.connect(onClientFinishedMoveResize);
}


function init() {
  print("init");
  var clients = workspace.clientList();
  for (var i = 0; i < clients.length; i++) {
    connectClient(clients[i]);
  }
  // loadZones();
  // options.configChanged.connect(loadZones);
  workspace.clientAdded.connect(connectClient);
  print("init done");
}

init();