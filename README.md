### Audition Simulation

Runs a simulation of a point on a 2-D table according to the following protocol:

Provide the following:

- Width of the simulation table
- Height of the simulation table
- Initial x and y coordinates of the point
- An arbitrarily long list of commands:
  - 0 : End and exit simulation
  - 1 : Step forwards
  - 2 : Step backwards
  - 3 : Rotate clockwise
  - 4 : Rotate counter-clockwise

Note: Origo (0, 0) is defined to be the top-left and the point always faces north to start with.

Can be run by first compiling the Typescript file to Javscript using `tsc` and then using `./` followed by the path of the javascript file. Information on how to pass simulator parameters can be found using the `--help` flag.
For example: `npx tsc && ./dist/src/app.js --help`.

Above assumes you have `Node.JS` installed.

Run `npm run test` to run test suite.
