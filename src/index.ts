import foo from "./foo";

JSE.registerPlugin({
    name: "myPlugin",
    version: "1.0.0",
    load: Enums.PluginLoadOrder.PostWorld,
    permissions: {
        "myPlugin.command": {
            description: "My plugin command",
            default: Enums.PermissionDefault.True,
        },
    },
    commands: {
        hello: {
            description: "Says hello",
            usages: ["/hello"],
            permissions: ["myPlugin.command"],
        },
    },

    onLoad: () => {
        console.log("Plugin loaded!");
    },
    onEnable: () => {
        console.log("Plugin enabled!");
        foo(); // Call the foo function
    },
    onDisable: () => {
        console.log("Plugin disabled!");
    },
    onCommand: (sender) => {
        sender.sendMessage("Hello!");
        return true;
    },
});
