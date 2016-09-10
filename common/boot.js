
// Single-language bootloader.
(function() {
  // Application path.
  var appName = location.pathname.match(/\/([-\w]+)(\.html)?$/);

  appName = appName ? appName[1].replace('-', '/') : 'index';

  appName = appName.replace('index','maze');

  // Only one language.
  var lang = 'pt-br';
  window['BlocklyGamesLanguages'] = [lang];
  window['BlocklyGamesLang'] = lang;

  // Load the language pack.
  var script = document.createElement('script');
  script.src = '/TFG/tfg/' + appName + '/generated/' + lang + '/compressed.js';

  script.type = 'text/javascript';
  document.head.appendChild(script);

})();
