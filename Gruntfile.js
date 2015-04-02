/* jshint node: true */

module.exports = function(grunt) {
    "use strict";

    var btoa = require('btoa');
    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*!\n' +
            ' * Metro UI 4 Jekyll v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * <%= pkg.description %> maintained by Alfred G. Fischer\n' +
            ' * Metro UI CSS Copyright 2012-<%= grunt.template.today("yyyy") %> Sergey Pimenov\n' +
            ' * Metro UI 4 Jekyll Copyright 2014-<%= grunt.template.today("yyyy") %> Alfred G. Fischer\n' +
            ' * Both licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
            ' */\n\n',

        jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Metro UI 4 Jekyll requires jQuery") }\n\n',

        // Task configuration.
        clean: {
            dist: ['dist']
        },

        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['js/*.js']
            },
            test: {
                src: ['js/tests/unit/*.js']
            }
        },

        concat: {
            options: {
                banner: '<%= banner %><%= jqueryCheck %>',
                stripBanners: false
            },
            bootstrap: { // comment out elements you don't need
                src: [
                    'js/metro/metro-global.js',
                    'js/metro/metro-core.js',
                    'js/metro/metro-locale.js',
                    'js/metro/metro-touch-handler.js',
                    'js/metro/metro-accordion.js',
                    'js/metro/metro-button-set.js',
                    'js/metro/metro-date-format.js',
                    'js/metro/metro-calendar.js',
                    'js/metro/metro-datepicker.js',
                    'js/metro/metro-carousel.js',
                    'js/metro/metro-countdown.js',
                    'js/metro/metro-dropdown.js',
                    'js/metro/metro-input-control.js',
                    'js/metro/metro-live-tile.js',
                    'js/metro/metro-drag-tile.js',
                    'js/metro/metro-progressbar.js',
                    'js/metro/metro-rating.js',
                    'js/metro/metro-slider.js',
                    'js/metro/metro-tab-control.js',
                    'js/metro/metro-table.js',
                    'js/metro/metro-times.js',
                    'js/metro/metro-dialog.js',
                    'js/metro/metro-notify.js',
                    'js/metro/metro-listview.js',
                    'js/metro/metro-treeview.js',
                    'js/metro/metro-fluentmenu.js',
                    'js/metro/metro-hint.js',
                    'js/metro/metro-streamer.js',
                    'js/metro/metro-scroll.js',
                    'js/metro/metro-stepper.js',
                    'js/metro/metro-pull.js',
                    'js/metro/metro-wizard.js',
                    'js/metro/metro-panel.js',
                    'js/metro/metro-tile-transform.js',
                    'js/metro/metro-popover.js',
                    'js/metro/metro-initiator.js'
                ],
                dest: 'dist/js/metro.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'min'
            },
            bootstrap: {
                src: ['<%= concat.bootstrap.dest %>'],
                dest: 'js/metro.min.js'
            }
        },

        recess: {
            options: {
                compile: true,
                banner: '<%= banner %>'
            },
            responsive: {
                src: ['less/metro-bootstrap-responsive.less'],
                dest: 'dist/css/metro-bootstrap-responsive.css'
            },
            responsive_min: {
                options: {
                    compress: true
                },
                src: ['less/metro-bootstrap-responsive.less'],
                dest: 'css/metro-bootstrap-responsive.min.css'
            },
            fonts: {
                src: ['less/iconFont.less'],
                dest: 'dist/css/iconFont.css'
            },
            fonts_min: {
                options: {
                    compress: true
                },
                src: ['less/iconFont.less'],
                dest: 'css/iconFont.min.css'
            },/*
            docs: {
                src: ['less/docs.less'],
                dest: 'css/docs.css'
            },*/
            docs_min: {
                options: {
                    compress: true
                },
                src: ['less/docs.less'],
                dest: 'css/docs.min.css'
            },
            metro: {
                src: ['less/metro-bootstrap.less'],
                dest: 'dist/css/metro-bootstrap.css'
            },
            metro_min: {
                options: {
                    compress: true
                },
                src: ['less/metro-bootstrap.less'],
                dest: 'css/metro-bootstrap.min.css'
            }
        },

        copy: {
            fonts: {
                expand: true,
                src: ["fonts/*"],
                dest: 'dist/'
            }
        },

        qunit: {
            options: {
                inject: 'js/tests/unit/phantom.js'
            },
            files: ['js/tests/*.html']
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },

        jekyll: {
            docs: {}
        },

        validation: {
            options: {
                reset: true,
                relaxerror: [
                    "Bad value X-UA-Compatible for attribute http-equiv on element meta.",
                    "Element img is missing required attribute src."
                ]
            },
            files: {
                src: ["_gh_pages/**/*.html"],
                filter: function(file) { return !file.match(/^_gh_pages\/2\.3\.1\//) }
            }
        },

        watch: {
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'qunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'qunit']
            },
            recess: {
                files: 'less/*.less',
                tasks: ['recess']
            }
        }
    });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('browserstack-runner');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-recess');

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);
/*
  // Test task.
  var testSubtasks = ['dist-css', 'jshint', 'qunit', 'validate-html'];
  // Only run BrowserStack tests under Travis
  if (process.env.TRAVIS) {
    // Only run BrowserStack tests if this is a mainline commit in twbs/bootstrap, or you have your own BrowserStack key
    if ((process.env.TRAVIS_REPO_SLUG === 'a-g-f/metro-ui-jekyll' && process.env.TRAVIS_PULL_REQUEST === 'false') || process.env.TWBS_HAVE_OWN_BROWSERSTACK_KEY) {
      testSubtasks.push('browserstack_runner');
    }
  }
  grunt.registerTask('test', testSubtasks);
*/
  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', [/*'clean', */'dist-css', 'dist-fonts', 'dist-js']);

  // Default task.
  grunt.registerTask('default', [/*'test', */'dist', 'build-customizer']);

  // task for building customizer
  grunt.registerTask('build-customizer', 'Add scripts/less files to customizer.', function () {
    var fs = require('fs');

    function getFiles(type) {
      var files = {};
      fs.readdirSync(type)
        .filter(function (path) {
          return type == 'fonts' ? true : new RegExp('\\.' + type + '$').test(path)
        })
        .forEach(function (path) {
          var fullPath = type + '/' + path
          return files[path] = (type == 'fonts' ? btoa(fs.readFileSync(fullPath)) : fs.readFileSync(fullPath, 'utf8'))
        });
      return 'var __' + type + ' = ' + JSON.stringify(files) + '\n'
    }

    var files = getFiles('js') + getFiles('less') + getFiles('fonts');
    fs.writeFileSync('js/raw-files.js', files)
  });
};
