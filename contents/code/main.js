(function() {
  "use strict";

  var zones = [];

  function loadZone(confNumber) {
    var prefix = "z"+confNumber+"_";
    return {
      x: readConfig(prefix+"x"),
      y: readConfig(prefix+"y"),
      width: readConfig(prefix+"w"),
      height: readConfig(prefix+"h")
    };
  }

  function loadZones() {
    zones.push(loadZone(0));
    zones.push(loadZone(1));
    zones.push(loadZone(2));
  }

  function getZoneTheClientIsIn(client) {
    var clientCenter = {
      x: (client.geometry.width / 2) + client.geometry.x,
      y: (client.geometry.height / 2) + client.geometry.y,
    }

    for (zone in zones) {
      if (clientCenter.x > zone.x && clientCenter.x < (zone.x + zone.width)
        && clientCenter.y > zone.y && clientCenter.y < (zone.y + zone.height))
        return zone;
    }
    return false;
  }

  function clientFinishUserMovedResized(client) {
    if(zones.length == 0 || !client.moveable) {
      return;
    }
    var zone = getZoneTheClientIsIn(client);
    if (zone) {
      client.geometry = zone;
    }
  }

  loadZones();
  options.configChanged.connect(loadZones);
})

/*
// find a client by its partial name
// TODO: remove, should only be used during first steps of dev
function findClient(clients, partialName) {
  var i = 0;
  while(clients[i] != undefined) {
      if(clients[i].caption.indexOf(partialName) > -1) {
          print(clients[i].caption + " matched " + partialName);
          return clients[i];
      }
      i+=1;
  }
  return undefined;
}

var clients = workspace.clientList();
print("found " + clients.length + " clients");

var bot = findClient(clients, "Telegram");
var mid = findClient(clients, "Konsole");
var top = findClient(clients, "Twitch");

print("let's goooo");
move(top, configs[0]);
move(mid, configs[1]);
move(bot, configs[2]);

*/