var EmailTemplate = require("email-templates");
var path = require("path");

var templateDir = path.resolve(__dirname, "templates");

exports.renderTemplate = function(params, template = 'error_report') {
  const emailTemplate = new EmailTemplate({
    views: {
      root: path.join(templateDir)
    },
    juice: true,
    juiceResources: {
      preserveImportant: true,
      webResources: {
        //
        // this is the relative directory to your CSS/image assets
        // and its default path is `build/`:
        //
        // e.g. if you have the following in the `<head`> of your template:
        // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
        // then this assumes that the file `build/style.css` exists
        //
        relativeTo: templateDir
        //
        // but you might want to change it to something like:
        // relativeTo: path.join(__dirname, '..', 'assets')
        // (so that you can re-use CSS/images that are used in your web-app)
        //
      }
    }
  });
  return emailTemplate.renderAll(template, params);
}