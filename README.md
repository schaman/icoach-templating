# Creating iCoach offer template with GitHub pages

## Create a GitHub repository for your template

### Using GitHub, create a your own repository for your template

Press a plus button next to your name in github page header, or go right here: https://github.com/new

Name your repository after your template.

Init your repository with readme.

If you see "Quick Setup" that means you forgot to check "Init repository with readme", so now create a README file clicking a link in "We recommend to init with README...".

### Create branch named `gh-pages` in that repository and switch to this branch

Navigate to your repository page at http://github.com/yourname/repositoryname

Press a button **branch: master** and enter `gh-pages` there.

### Go to repository settings and make branch `gh-pages` default

Settings page link is in the right sidebar.

### Create files in your repository:

To create a file press plus button next to your repository name.

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
Contains your template. For the first testing run you better use this simple one:
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
Later you'll replace it with your real template.

### data.yaml
Contains some demo data to fill your template while developing
```
title: "Hello World!"
```

## Test

Navigate to http://_yourname_.github.io/_repositoryname_/

If you see "Hello World!" message, that means everything is working fine – your template `layouts/layout.html` is filled with your data from `data.yaml`.

If you have a 404 error this may mean your page is not published yet. It may take up to ten minutes until your page is available.

The full information on using GitHub pages can be found here: https://pages.github.com/

You can change the title in your data to something else, and new title should appear on the resulting page.
