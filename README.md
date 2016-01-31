[![Build Status](https://travis-ci.org/MediaMonks/seng-config.svg?branch=master)](https://travis-ci.org/MediaMonks/seng-config)
[![npm version](https://badge.fury.io/js/seng-config.svg)](https://www.npmjs.com/package/seng-config)
[![Downloads](https://img.shields.io/npm/dm/seng-config.svg)](https://www.npmjs.com/package/seng-config)

# Config

Config Description


## Installation

```
npm i -S seng-config
```


## Usage

```
import ConfigManager from 'seng-config';
import {IConfig, IURLData} from 'seng-config';
import IConfig from 'seng-config/dist/lib/IConfig';

var configManager = new ConfigManager();

// init the manager with provided config
configManager.init(config, 'production');

// get a url
configManager.getURL('api');

// get a property
configManager.getProperty('defaultLocale');
```


## Documentation

Add custom documentation stuff


## Building

In order to build seng-config, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```
git clone https://github.com/MediaMonks/seng-config.git
```

Change to the TypeScript directory:
```
cd seng-config
```

Install dev dependencies:
```
npm install
```

Use one of the following scripts:
```
npm run build   	# build this project
npm test    		# run the tests
npm run typings		# install .d.ts dependencies
npm run lint		# run tslint on this project
npm run doc			# generate typedoc documentation
```

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks
