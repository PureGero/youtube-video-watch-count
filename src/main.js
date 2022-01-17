// Load youtube.js as an ES6 module
(async () => {
  const src = chrome.extension.getURL('src/youtube.js');
  const contentScript = await import(src);
  contentScript.main();
})();