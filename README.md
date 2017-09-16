# Mocha
Please follow the following steps to run the test

***

1.Install the node

2.Install the npm packages
* mocha
* chai _(for assert,expect,should based assertations)_
* Typescript _(If Typescript needed)_
    * ts-node  _(Typescript support for node)_
    * @types/mocha _(Typescript definitions for mocha)_
    * @types/chai _(Typescript definitions for mocha)_

3.Add the test script in [package.json](https://github.com/pksivanantham/Mocha/blob/master/package.json) 
  `  "scripts": {
    "test": "mocha"   
  }
`

For Typescript `"scripts": {
    "test": "mocha -r ts-node/register typescript_filename.ts"   
  }`
 [example](https://github.com/pksivanantham/Mocha/blob/4b2dee224c30ddf4beabfdc104d0a303d5f1462d/package.json#L14)


4.open the command line run the following command to run the test
`npm test`

_Tips:_ For Compiling the Typescript files `tsc typescript_filename.ts`
