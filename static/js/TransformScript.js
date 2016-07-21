
function makeRequest(url, loadedData, property, elementToAddResult, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  // to allow us doing XSLT in IE
  try { req.responseType = "msxml-document" } catch (ex) {}
  req.onload = function() {
    loadedData[property] = req.responseXML;
    if (checkLoaded(loadedData)) {
      displayResult(loadedData.xmlInput, loadedData.xsltSheet, elementToAddResult, callback);
      if (callback) {
        callback();
      }
    };
  };
  req.send();
}

function checkLoaded(loadedData) {
  return loadedData.xmlInput != null && loadedData.xsltSheet != null;
}

function loadAndTransform(xml, xsl, elementToAddResult, callback) {
  var loadedData = { xmlInput: null, xsltSheet: null };

  makeRequest(xml, loadedData, 'xmlInput', elementToAddResult, callback);
  makeRequest(xsl, loadedData, 'xsltSheet', elementToAddResult, callback);
}

function displayResult(xmlInput, xsltSheet, elementToAddResult, callback) {
  if (typeof XSLTProcessor !== 'undefined') {
    var proc = new XSLTProcessor();
    proc.importStylesheet(xsltSheet);
    elementToAddResult.appendChild(proc.transformToFragment(xmlInput, document));
  }
  else if (typeof xmlInput.transformNode !== 'undefined') {
    elementToAddResult.innerHTML = xmlInput.transformNode(xsltSheet);
  }
}
loadAndTransform(
  'http://tagcloudservice.azurewebsites.net/resources/tagcloud?label=Karlsruhe&limit=100',
  './static/xsl/XMLTransform.xsl',
  document.getElementById('cloudElements'),
  function () {
    tagcloud();
  }
);
// so funktioniert der Spaß  <body onload="loadAndTransform('http://tagcloudservice.azurewebsites.net/resources/tagcloud?label=Karlsruhe&limit=50', 'Fuckthisshit.xsl', document.getElementById('example'));">
//  <div id="example"></div>
