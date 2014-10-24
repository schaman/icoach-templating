require.config({ baseUrl: 'http://schaman.github.io/icoach-templating/lib' });

require(['jquery', 'esprima', 'js-yaml.min', 'twig.min'],
  function(jquery, esprima, jsyaml, twig) {
    function getRemote(remote_url) {
      xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', remote_url + '?_=' + new Date.getTime(), false);
      xmlhttp.onreadystatechange = function (oEvent) {  
        if (xmlhttp.readyState === 4) {  
          if (xmlhttp.status === 200) {  
          } else {
            alert('Error: ' + remote_url + ' ' + xmlhttp.statusText);  
          }  
        }  
      }; 
      xmlhttp.send();
      return xmlhttp.responseText;
    }

    var doc = jsyaml.load(getRemote('data.yaml'));
    var template = twig.twig({ data: getRemote('layouts/layout.html') });
    var html = template.render(doc);

    $('body').html(html);
  }
);
