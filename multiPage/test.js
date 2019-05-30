const glob = require('glob');

glob('./src/view/!(common)/*.html', function(err, files) {
  console.log(files);
})