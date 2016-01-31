import IConfig from '../src/lib/IConfig';

export var mockConfig = <IConfig>{
	"environments": {
		"live": {
			"variables": {
				"base": "{protocol}//clients.vellance.net/"
			},
			"urls": {
				"api_url": {"url": "{base}api/flapi.php"},
				"api_url_plain": "{base}api/flapi.php"
			},
			"properties": {
				"facebook_appid": "123456789",
				"linkedin_apikey": ""
			}
		},
		"staging": {
			"extends": "live",
			"variables": {
				"base": "{protocol}//staging.vellance.net/"
			}
		},
		"development": {
			"extends": "staging",
			"variables": {
				"base": "{protocol}//devmonks.vellance.net/"
			}
		},
		"local": {
			"extends": "development",
			"variables": {
				"base": ""
			}
		}
	},
	"variables": {
		protocol: document.location.protocol,
		string: 'string',
		number: 12345,
		boolean_true: true,
		boolean_false: false,
		replace: '{string}{number}{boolean_true}{boolean_false}{custom_1}{custom_2}{custom_unknown}'
	},
	"urls": {
		"api_url": {"url": "{base}api/flapi.php"},
		"facebook_channelurl": {"url": "{base}channel.html"},
		"replace": '{string}{number}{boolean_true}{boolean_false}{custom_1}{custom_2}{custom_unknown}'
	},
	"properties": {
		"defaultLocale": "en_GB",
		number: 12345,
		boolean_true: true,
		boolean_false: false
	}
};
