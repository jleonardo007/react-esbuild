# This project has been created with [ESbuild](https://esbuild.github.io/).

The app in this project is [Voice Recorder](https://github.com/jleonardo007/voice-recorder-example) you can find a hole explanation at [dev.to](https://dev.to/jleonardo007/create-a-voice-recorder-with-react-32j6)

## Project's scripts

In the project's root directory you can run:

### `yarn install`

Installs the project's dependencies specifies in package.json.

### `yarn start`

This script runs as follow:

1. Creates a server through `esbuild.serve()`. This serves the bundled files at **http://localhost:5050/serve/**.

2. Creates a development server that serves files at **public folder** then `index.html` consumes the files serve by **http://localhost:5050/serve/**. Development server runs at **http://localhost:3000**

### `yarn test`

Runs your tests files through **Jest**, you could specify a path or a regex that **Jest** runs your test against them eg: `yarn test src/components/any-component/index.test.js` in this case **Jest** runs at this path only.

### `yarn build`

Creates an optimized bundle ready to be deployed.
