const mix = require('laravel-mix');

// Compile JavaScript
mix.js('public/assets/js/main.js', 'public/build/js');

// Since you're using regular CSS and not SCSS, you'll use postCss to process your CSS file.
// Assuming `main.css` is your entry point for CSS and includes/import all other CSS files
mix.postCss('public/assets/css/main.css', 'public/build/css', [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
]);

// If you have other CSS files that are not imported into main.css, you would need to compile them separately like this:
mix.postCss('public/assets/css/variables-blue.css', 'public/build/css');
// Repeat for other color variable files...

// Copy images from a resource path to a public path
mix.copyDirectory('public/assets/img', 'public/build/img');

// Versioning / Cache Busting
if (mix.inProduction()) {
  mix.version();
}
