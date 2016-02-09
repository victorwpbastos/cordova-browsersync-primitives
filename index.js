'use strict';

var addCSP = require('./addCSP');
var createIndexHtml = require('./createIndexHtml');
var fixATS = require('./fixATS');
var startBrowserSync = require('./startBrowserSync');
var getWWWFolder = require('./getWWWFolder');
var updateConfigXml = require('./updateConfigXml');

module.exports = {
	addCSP: addCSP,
	createIndexHtml: createIndexHtml,
	fixATS: fixATS,
	startBrowserSync: startBrowserSync,
	getWWWFolder: getWWWFolder,
	updateConfigXml: updateConfigXml
};