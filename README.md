# Metro UI 4 Jekyll

Metro UI 4 Jekyll is a port of [Metro UI CSS](http://metroui.org.ua) to create a Jekyll site with an interface similar to Windows 8 Metro UI easily. This set of styles and scripts was developed as a self-contained solution.

## Current Version

### 2.0.32 <!--will follow Metro UI CSS releases we build on-->

See details of definition on [metroui.org.ua](http://metroui.org.ua)

## Documentation

Metro UI 4 Jekyll documentation, included in this repo in the root directory, is built and served with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://a-g-f.github.io/metro-ui-jekyll>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v1.x).
2. From the root `/metro-ui-jekyll` directory, run `jekyll serve` in the command line.
  - **Windows users:** run `chcp 65001` first to change the command prompt's character encoding ([code page](http://en.wikipedia.org/wiki/Windows_code_page)) to UTF-8 so Jekyll runs without errors.
3. Open <http://localhost:4000> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).
  
  
  
  

## Compiling CSS and JavaScript

Metro UI 4 Jekyll uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run desired Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/bootstrap` directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.
  
    
  
  
  
### Available Grunt commands:

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Tests - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.
  
  
  

### Credits

- Metro UI 4 Jekyll is built on [Metro UI CSS](http://metroui.org.ua).
- Normalize.css is a project by Nicolas Gallagher and Jonathan Neal.
- Styles created using the [less](http://lesscss.org) preprocessor

### Browser Compatibility

IE9+, Chrome, Firefox, Opera, Safari

## License

Metro UI 4 Jekyll has MIT License
