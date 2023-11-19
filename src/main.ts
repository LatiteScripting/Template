// After pressing Ctrl+Shift+B in Visual Studio Code (or running npm run build in terminal) to build
// Move the out folder to the Plugins folder and rename it to your plugin's name!

export { } // Leave this here to fix name conflicts

// Using Latite Client with webpack/node bundling, require() can get a bit confusing. There are now 2 requires,
// the original require() in Latite Scripting which you use for including libraries like filesystem/http, and
// there's another require() function that works with node modules. Because of this, this template has a helper function:

// use latiteRequire for libraires like filesystem, and require() as actual require.

export const latiteRequire = eval("require") as typeof require;


// Uncomment this for an example of using latiteRequire
// const fs = latiteRequire("filesystem");
// Use require() for node modules that you want to bundle!

clientMessage("Hello World from Latite Webpack Template!");