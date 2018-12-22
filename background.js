chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return { cancel: true };
  },
  {
    urls: [
      "*://*.hledejslevu.com/*"
    ]
  },
  ["blocking"]
);
