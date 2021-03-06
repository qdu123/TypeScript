/a/lib/tsc.js -w -p /A/B/tsconfig.json
//// [/a/b/app.ts]
let x = 1

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/b/tsconfig.json]
{"include":["app.ts"]}

//// [/A/B/app.js]
var x = 1;



Output::
>> Screen clear
12:00:15 AM - Starting compilation in watch mode...



12:00:18 AM - Found 0 errors. Watching for file changes.


Program root files: ["/A/B/app.ts"]
Program options: {"watch":true,"project":"/A/B/tsconfig.json","configFilePath":"/A/B/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/A/B/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/A/B/app.ts

WatchedFiles::
/a/b/tsconfig.json:
  {"pollingInterval":250}
/a/b/app.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
