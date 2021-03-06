var mailUrl = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=";
var openInTab = false;


(function() {
	chrome.extension.sendRequest({reqtype: 'o'}, function(response) {
		if (response.o.mailto) {
			  rewriteMailtosOnPage();
		}
	});
})();



function rewriteMailtoToGMailUrl(inUrl) {
    var retUrl = inUrl;    
    var subject = retUrl.match(/subject=([^&]*)/i);
    if(subject != null) {
        subject = encodeURIComponent(unescape(subject[1]));
        retUrl = retUrl.replace(/subject=([^&]*)/i, "su=" + subject);    
    }    
    retUrl = retUrl.replace("?", "&");
    retUrl = retUrl.replace(/CC=/i, "cc=");
    retUrl = retUrl.replace(/BCC=/i, "bcc=");
    retUrl = retUrl.replace(/Body=/i, "body=");
    retUrl = retUrl.replace("mailto:", mailUrl);
    return retUrl;
}

// Content Scripts
function rewriteMailtosOnPage() {
  // Find all the mailto links.
  var result = document.evaluate(
      '//a[contains(@href, "mailto:")]',
      document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);

  var item;
  var nodes = [];
  // cannot change the NODE_ITERATOR nodes' attributes in this loop itself
  // since iterateNext will invalidate the state; Need to store temporarily.
  while (item = result.iterateNext()) {
    nodes.push(item);
  }
  
  for (var i = 0; i < nodes.length; i++) {
    var mailto_str = nodes[i].getAttribute('href');
    mailto_str = rewriteMailtoToGMailUrl(mailto_str);
    if(openInTab) {
        nodes[i].setAttribute('href', mailto_str);
        nodes[i].setAttribute('target', '_blank');
    } else {
        //nodes[i].setAttribute('href', "javascript:window.open('" + mailto_str + "','Compose new message','width=640,height=480')");
        nodes[i].setAttribute('href', "javascript:void(0)");
        nodes[i].setAttribute('onclick', "window.open('" + mailto_str + "','Compose new message','width=640,height=480')");
    }
    nodes[i].setAttribute('rel', 'noreferrer');
  }
}

if (window == top) {
  //window.addEventListener("focus", rewriteMailtosOnPage);
}