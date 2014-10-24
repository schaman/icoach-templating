# Creating iCoach offer template with GitHub pages

## Create a template repository

* Using GitHub, create a new repository for your template
* Create branch named `gh-pages` in that repository and switch to this branch
* Go to repository settings and make branch `gh-pages` default
* Create files:

### index.html
This file is not a part of your template, but a templating system itself. It is used to test filling your template with data. You can download it here https://github.com/schaman/icoach-templating-project/blob/gh-pages/index.html and shoudn't change it while developing template.
```
<!DOCTYPE HTML>
<html>
  <head>
    <script data-main="http://schaman.github.io/icoach-templating/templating" src="http://schaman.github.io/icoach-templating/lib/require.js"></script>
  </head>
  <body>
  </body>
</html>
```

### layouts/layout.html
Contains your template
```
<!DOCTYPE HTML>
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ title }}</h1>
  </body>
</html>
```

### data.yaml
Contains some demo data to fill your template while developing
```
title: "Hello World!"
```

## Test

Navigate to http://_yourname_.github.io/_repositoryname_/

If you see "Hello World!" message, that means everything is working fine – your template `layouts/layout.html` is filled with your data from `data.yaml`.

You can change the title in your data to something else, and new title should appear on the resulting page.
