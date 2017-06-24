"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var renderFullPage = function renderFullPage(html, initialState) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <!-- Required meta tags always come first -->\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n        <title>React Router Redux Express</title>\n\n        <!-- Bootstrap CSS -->\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css\">\n        <link rel=\"stylesheet\" href=\"/static/stylesheets/main.css\">\n      </head>\n      <body>\n        <div id=\"reactbody\">\n          " + html + "\n        </div>\n        <script>\n          window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + "\n        </script>\n        <script src=\"/static/app.bundle.js\"></script>\n      </body>\n    </html>\n    ";
};

exports.default = renderFullPage;