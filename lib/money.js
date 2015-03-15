/*
 * Money
 * Copyright (c) 2014 Fatih Cetinkaya (http://github.com/cmfatih/money)
 * For the full copyright and license information, please view the LICENSE.txt file.
 */

/* jslint node: true */
'use strict';

var request = require('request'),
    qs      = require('querystring'),
    xml2JS  = require('xml2js');

// Init the module
exports = module.exports = function() {

  var xmlParser  = new xml2JS.Parser({charkey: 'C$', attrkey: 'A$', explicitArray: true}),
      defTimeout = 10000,
      quoteUrl   = 'http://money.service.msn.com/StockQuotes.aspx?v=1',
      quote;     // gets information - function

  quote = function quote(options, callback) {

    if(typeof callback !== 'function')
      callback = function callback(err, result) { return err || result; };

    if(!options || typeof options !== 'object')
      return callback('Invalid options!');

    if(!options.symbols)
      return callback('Missing symbols input!');

    if(typeof options.symbols === 'string')
      options.symbols = [options.symbols];

    if(!(options.symbols instanceof Array))
      return callback('Invalid symbols input!');

    var result,
        reqUrl  = quoteUrl + '&symbols=' + qs.escape(options.symbols.join(','));

    request.get({url: reqUrl, timeout: defTimeout}, function(err, res, body) {

      if(err) return callback(err);
      if(res.statusCode !== 200) return callback('Request failed (' + res.statusCode + ')');

      xmlParser.parseString(body, function(err, resultJSON) {
        if(err) return callback(err);

        if(!resultJSON.quotesdata || !resultJSON.quotesdata.ticker)
          return callback('Unexpected error! Invalid content.');

        if(resultJSON.quotesdata.ticker['A$'] && resultJSON.quotesdata.ticker['A$'].errormessage)
          return callback(resultJSON.quotesdata.weather['A$'].errormessage);

        if(!(resultJSON.quotesdata.ticker instanceof Array)) {
          return callback('Unexpected error! Missing info.');
        }

        for(var i = 0, tickerLen = resultJSON.quotesdata.ticker.length; i < tickerLen; i++) {

          if(typeof resultJSON.quotesdata.ticker[i]['A$'] !== 'object')
            continue;

          if(!result) result = [];
          result.push(resultJSON.quotesdata.ticker[i]['A$']);
        }

        return callback(undefined, result);
      });
    });
  };

  // Return
  return {
    quote: quote
  };
}();