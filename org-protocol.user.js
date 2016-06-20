// ==UserScript==
// @name         org-protocol
// @namespace    https://github.com/xuchunyang/setup-org-protocol-on-mac
// @version      0.0
// @description  Use Alt + l for Org: store-link and use Alt + o for Org: capture
// @author       Chunyang Xu
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(e) {
        // Alt + l
        if (e.keyCode == 76 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
            window.location = 'org-protocol://store-link://'+encodeURIComponent(document.location.toString())+'/'+encodeURIComponent(document.title.toString());
        }
        // Alt + o
        if (e.keyCode == 79 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
	    var url = document.location.toString();
	    var title = document.title.toString();
            var selection = window.getSelection();
            var org_capture_url = 'org-protocol://capture://t/'+encodeURIComponent(url)+'/'+encodeURIComponent(title)+'/'+encodeURIComponent(selection);
            window.location = org_capture_url;
        }
    }, false);

})();
