const renderFullPage = (html, initialState) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags always come first -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>React Router Redux Express</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="/stylesheets/bootstrap.min.css">
        <link rel="stylesheet" href="/stylesheets/main.css">
      </head>
      <body>
        <div id="reactbody">
          ${html}
        </div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/js/app.bundle.js"></script>
      </body>
    </html>
    `
};

export default renderFullPage;