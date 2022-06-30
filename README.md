# merge-yaml-ts

[![Known Vulnerabilities](https://snyk.io/test/github/Moon1706/merge-yaml-ts/badge.svg)](https://snyk.io/test/github/Moon1706/merge-yaml-ts)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

[![NPM](https://nodei.co/npm/merge-yaml-ts.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/merge-yaml-ts/)

This is Typescript wrapper utility over js-yaml which will merge the multiple yaml fles
and safeload them and return the parsed yml.

#### Example

```js
import { mergeFiles } from 'merge-yaml-ts';
const input = [
  __dirname + '/config1.yml',
  __dirname + '/config2.yml',
];
const test = mergeFiles(input);
````

#### Tests

The repo contains linter, formatter, and the one simple unit test. All of this can be run with `npm run default`.
