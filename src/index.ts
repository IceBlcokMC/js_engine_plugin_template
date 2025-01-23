JSE.registerPlugin({
  name: "my_plugin",
  version: "1.0.0",
  onLoad: () => {
    console.log("Plugin loaded!");
  },
  onEnable: () => {
    console.log("Plugin enabled!");
  },
  onDisable: () => {
    console.log("Plugin disabled!");
  },
});
