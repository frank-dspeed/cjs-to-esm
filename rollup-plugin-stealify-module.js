/**
 * Enforce 
 * - createRequire helper injection - Usage on external modules in rollup when true default true
 * produces Valid Stealify Modules (es2022) using a externals.js default to create require or a preexisting.
 * does not inject createRequire if it is already used. and its name is already createRequire
 * teach the people that they can only require nativ modules Sync and that they need to start with
 * cjs if they are in a environment that depends on nativ module sideEffects as every Stealify Module is a Async Module.
 * it can not get used to bootstrap or shim enviornments. So Everything ESM is not possible in all Environments. Examples
 * NodeJS, Electron, NWJS, Chromium, VSCODE and so on as soon as you need access to nativ code with sideEffects you are forced
 * to start your application from cjs code that uses dynamic import 
 *
 * for module authoring you can depend on the static import '' syntax to combine modules before you deploy them or to static link them
 * on runtime. while loading will always happen via dynamic import on runtime even if you use a script type module tag to load that
 * the result is always the same as with import()
 *
 * so There are 2 worlds which are existing both in co existence CommonJS and ESModules while both are relativ interchange able for static linking
 * via transpilers. In general you only need CJS Code when you use it to bootstrap a Environment that depends on sync sideEffects of nativ code on load.
 * most time that is only Electron and the Browser in the browser you need the first <script></script> tag to hook sync into the sideEffects of the pageLoad
 * in electron you need to listen for a electron.on('ready') event and you need to set flags as early as possible on load.
 * as NodeJS has no such sideEffects that it depends directly on you can init a NodeJS Only app even via ESM and then use createRequire for native code interaction
 * Android, Ios is the same Concept it depends on native code sideEffects so none JS Code that throws signals and events into the JS Environment.
 * so you loose events when you start async that can be ok for your application or not it depends on your needs... 
 */
