## Money

[money](http://github.com/cmfatih/money) is a Node.js module for 
obtaining currency rate and stock market information.  

[![Build Status][travis-image]][travis-url] | [![NPM][npm-image]][npm-url]
---------- | ----------

### Installation

For latest release
```
npm install money-js
```

For HEAD
```
git clone https://github.com/cmfatih/money.git
```

### Usage

#### Test
```
npm test
```

#### Examples

```javascript
var money = require('money-js');

money.quote({symbols: [
  'USDCAD',
  'USDEUR',
  'JPYUSD',
  'TWTR',
  'NASDAQ'
]}, function(err, result) {
  if(err) console.log(err);

  console.log(result);
});
/*
[ { symbol: 'USDCAD',
    type: 'Currency',
    name: 'United States Dollar - Canadian Dollar',
    high: '1.0869',
    low: '1.0859',
    last: '1.0863',
    volume: '0',
    change: '-0.0004',
    percentchange: '-0.0368%',
    timeoflastsale: '',
    currency: '',
    ask: '1.0865',
    bid: '1.0861',
    yearhigh: '0',
    yearlow: '0',
    marketcap: '0',
    pe: '0',
    close: '1.0867',
    open: '1.0867',
    eps: '0',
    exchange: 'FOREX cross rates',
    sizeoflastsale: '0' },
  { symbol: 'USDEUR',
    type: 'Currency',
    name: 'United States Dollar - Euro',
    high: '0.7389',
    low: '0.7382',
    last: '0.7383',
    volume: '0',
    change: '-0.0005',
    percentchange: '-0.0616%',
    timeoflastsale: '',
    currency: '',
    ask: '0.7383',
    bid: '0.7382',
    yearhigh: '0',
    yearlow: '0',
    marketcap: '0',
    pe: '0',
    close: '0.7387',
    open: '0.7387',
    eps: '0',
    exchange: 'FOREX cross rates',
    sizeoflastsale: '0' },
  { symbol: 'JPYUSD',
    type: 'Currency',
    name: 'Japan Yen - United States Dollar',
    high: '0.0098',
    low: '0.0098',
    last: '0.0098',
    volume: '0',
    change: '0',
    percentchange: '-0.0837%',
    timeoflastsale: '',
    currency: '',
    ask: '0.0098',
    bid: '0.0098',
    yearhigh: '0',
    yearlow: '0',
    marketcap: '0',
    pe: '0',
    close: '0.0098',
    open: '0.0098',
    eps: '0',
    exchange: 'FOREX cross rates',
    sizeoflastsale: '0' },
  { symbol: 'TWTR',
    type: 'Equity',
    name: 'TWITTER Inc',
    high: '35.97',
    low: '34.93',
    last: '35.54',
    volume: '30,021,271',
    change: '+0.17',
    percentchange: '+0.4806%',
    timeoflastsale: '6/11/2014 7:58:48 PM',
    currency: 'USD',
    ask: '52',
    bid: '0',
    yearhigh: '74.73',
    yearlow: '29.51',
    marketcap: '20,966,425,876',
    pe: '-14.2129',
    close: '35.37',
    open: '35.07',
    eps: '-2.5006',
    exchange: 'New York Stock Exchange',
    sizeoflastsale: '0' },
  { symbol: 'NASDAQ',
    type: 'Index',
    name: 'NASDAQ Composite',
    high: '4,338.2108',
    low: '4,315.487',
    last: '4331.932',
    volume: '0',
    change: '-6.0653',
    percentchange: '-0.1398%',
    timeoflastsale: '6/11/2014 5:15:59 PM',
    currency: 'USD',
    ask: '0',
    bid: '0',
    yearhigh: '4,371.706',
    yearlow: '3,294.9495',
    marketcap: '0',
    pe: '0',
    close: '4,337.9973',
    open: '4,322.9221',
    eps: '0',
    exchange: 'NASDAQ Indices',
    sizeoflastsale: '0' } ]
*/
```

### Notes

* It uses `money.service.msn.com`

### Changelog

For all notable changes see [CHANGELOG.md](https://github.com/cmfatih/money/blob/master/CHANGELOG.md)

### License

Copyright (c) 2014 Fatih Cetinkaya (http://github.com/cmfatih/money)  
Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/money-js
[npm-image]: https://badge.fury.io/js/money-js.png

[travis-url]: https://travis-ci.org/cmfatih/money
[travis-image]: https://travis-ci.org/cmfatih/money.svg?branch=master