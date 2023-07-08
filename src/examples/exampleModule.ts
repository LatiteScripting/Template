const mod = new Module(
  "Example",
  "Example Mod",
  "A showcase of Latite Scripting",
  KeyCode.K
);

client.getModuleManager().registerModule(mod);

mod.on("enable", () => {
  script.log("module enabled!");
});

mod.on("disable", () => {
  script.log("module disabled!");
});

mod.on("get-hold-to-toggle", () => {
  return false; // put true if you want the module to have the freelook behavior where you need to hold it
});

client.on("unload-script", (ev) => {
  if (ev.scriptName === script.name) {
    client.getModuleManager().deregisterModule(mod);
  }
});
