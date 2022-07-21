let mix = require('laravel-mix')

require('laravel-mix-tailwind')

mix
    .js('src/index.js', 'dist/js/app.js')
    .less('src/css/app.less', 'dist/css')
    .tailwind()

mix.copyDirectory('src/images', 'dist/images')

mix.options({
    processCssUrls: true,
    terser: {},
    postCss: [require('autoprefixer')],
    clearConsole: true,
    cssNano: {
        discardComments: {
            removeAll: true,
        }
    }
})

mix.disableNotifications()