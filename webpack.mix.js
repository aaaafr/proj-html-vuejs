let mix = require('laravel-mix')

mix
  .js('src/app.js', 'js').vue({
    extractStyles: true,
    globalStyles: false
})
  .sass('src/app.scss', 'css').options({
    processCssUrls: false
})
  .copyDirectory('src/img', 'dist/img')
  .setPublicPath('dist')