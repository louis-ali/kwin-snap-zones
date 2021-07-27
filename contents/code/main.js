// TODO: have a dynamic configuration
var configs = [
  { x: 0, y: 0, height: 697, width: 1080 },
  { x: 0, y: 697, height: 678, width: 1080 },
  { x: 0, y: 1375, height: 501, width: 1080 }
];

// resizes and moves the given client according to the given configuration
function move(client, conf) {
  if(!client.moveable) {
      print(client.caption + " not moveable");
      return;
  }
  client.geometry = conf;
  print("moved " + client.caption + " to " + JSON.stringify(conf));
}

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
