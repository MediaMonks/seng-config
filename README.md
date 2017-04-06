[![Build Status](https://travis-ci.org/MediaMonks/seng-config.svg?branch=master)](https://travis-ci.org/MediaMonks/seng-config)
[![Code Climate](https://codeclimate.com/github/MediaMonks/seng-config/badges/gpa.svg)](https://codeclimate.com/github/MediaMonks/seng-config)
[![Coverage Status](https://coveralls.io/repos/github/MediaMonks/seng-config/badge.svg?branch=master)](https://coveralls.io/github/MediaMonks/seng-config?branch=master)
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

View the [generated documentation](https://rawgit.com/MediaMonks/seng-config/master/doc/typedoc/index.html).


## Building

In order to build seng-config, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```
git clone https://github.com/MediaMonks/seng-config.git
```

Change to the seng-config directory:
```
cd seng-config
```

Install dev dependencies:
```
npm install
```

Use one of the following scripts:
```
npm run build   	# build this project (done on install)
npm test    		# run the tests
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
