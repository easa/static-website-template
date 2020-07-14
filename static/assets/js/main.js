document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  })
})

var sc_project = 12358369;
var sc_invisible = 0;
var sc_security = "082aebef";
var sc_https = 1;
var scJsHost = "https://";
document.write("<sc" + "ript type='text/javascript' src='" + scJsHost +
  "statcounter.com/counter/counter.js'></" + "script>");