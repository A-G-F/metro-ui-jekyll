---
layout: post
category: blog
title: Maintain a Jekyll site with WebStorm
---

{{ page.title }}
================

<p class="meta">Original post 04 Jan 2014 - © 2014 by <a href="http://hadihariri.com/2014/01/04/using-webstorm-to-maintain-a-jekyll-site/" title="Permalink to Using WebStorm to maintain a Jekyll site – Hadi Hariri">Hadi Hariri</a>.</p>

## Install the Markdown plugin

WebStorm does not ship with Markdown support out of the box, but you can easily install the Markdown plugin. While Jekyll supports various flavors of markdown (I'm using Kramdown), they all share some common syntax, so you're good to go with the general Markdown plugin.

1. Open up Preferences (<code>cmd</code>+<code>,</code> on OSX)
2. Type 'plugin' to go directly to the Plugin tab ![Plugin Preferences][12]
3. Click on 'Browse Repositories'
4. Search for 'Markdown'
5. Right-click to install ![Markdown install][13]

Alternatively, you could also create a file with extension _.md_ and WebStorm will automatically detect there is a plugin available and prompt you to download and install it. ![Markdown auto install][14]

## Find posts and other files efficiently

WebStorm allows you to navigate to files very quickly. If you're using the latest version (7.0.3), just double-click the _Shift_ key to go to _Search Everywhere_. Alternatively choose the shortcut associated with _Go To File_ (Cmd+Shift+O on OSX)

Remember, you can even use wildcards.

![Search Everywhere][15]

## Move files around properly

Often you might want to move files around on your site. For instance you might have a folder called _drafts_ where you keep draft posts. When it's time to move them, you can of course drag and drop from one folder to another, but it's often cumbersome. Instead use the Move refactoring (F6 on OSX)

![Move File][16]

## Create new post and other types of files fast

WebStorm provides a very smart file template system that allows for creation of files. In fact, when you invoke the New command in WebStorm (Cmd+N) you're using templates to create new files.

![Cmd New][17]

The last entry is to edit file templates, allowing to create new ones, ideal for Jekyll templates. Most Jekyll files consist of a header containing some metadata. For instance this post has:


    ---
    layout: post
    title: Using WebStorm to maintain a Jekyll site
    status: draft
    type: post
    published: true
    comments: true
    ---


I've created a file template so that I don't have to copy/paste this each time:

![File Template][18]

Now when creating a file, I'm prompted with a dialog to fill out the information:

![Prompt dialog][19]

For more information on variables and possibilities see [File Variables][20]

## Save on keystrokes

Much like file templates, you can also save on keystrokes when working with common constructs with Jekyll. Liquid, the templating engine requires certain syntax for variable substitutions and other functionality.

I've created a set of live templates with WebStorm to help me with this:

![Live Templates][21]

making things a little quicker. Now I can simply type for instance _iu_ and get the template expanded for internal links, filling in the gaps. You can do the same for emphasis, bold, keywords, etc.

## Configure _jekyll serve_ as an external tool

WebStorm comes with built-in support for a terminal, so you don't need to switch applications to run shell commands. This means that you could just open up the terminal and run


    jekyll serve --watch


from there. But you can also configure Jekyll as an external tool and have it available from the menu option

![Jekyll Tool][22]

You can configure it via **Preferences**, **External Tools**

![Jekyll Tool Configuration][23]

## Publish from inside WebStorm

If you enable VCS support inside WebStorm, it will automatically detect new files being added and will prompt you to add it to your Git Repository. Much the same way it detects modified and deleted files. Once you're ready to publish you can do so easily using **VCS | Commit File**, which allows you to either commit or commit and push

![Commit][24]

## Spell Checker

Not much to configure there. It's built in and works. Just hit Alt+Enter when you make a spelling mistake

![Spelling mistakes][25]

You can also provide custom dictionaries for any language via **Preferences**.


[1]: http://hadihariri.com/
[2]: http://hadihariri.com/about/
[3]: http://hadihariri.com/posts/
[4]: http://hadihariri.com/talks/
[5]: http://hadihariri.com/projects/
[6]: https://www.youtube.com/channel/UCmglzRyUElGoMA7s03lWk8Q
[11]: http://hadihariri.com/2014/01/04/using-webstorm-to-maintain-a-jekyll-site/ "Using WebStorm to maintain a Jekyll site"
[12]: http://hadihariri.com/images/webstorm-guide-1.png
[13]: http://hadihariri.com/images/webstorm-guide-3.png
[14]: http://hadihariri.com/images/webstorm-guide-2.png
[15]: http://hadihariri.com/images/webstorm-guide-4.png
[16]: http://hadihariri.com/images/webstorm-guide-5.png
[17]: http://hadihariri.com/images/webstorm-guide-6.png
[18]: http://hadihariri.com/images/webstorm-guide-7.png
[19]: http://hadihariri.com/images/webstorm-guide-8.png
[20]: http://www.jetbrains.com/idea/webhelp/file-template-variables.html#predefined_template_variables
[21]: http://hadihariri.com/images/webstorm-guide-9.png
[22]: http://hadihariri.com/images/webstorm-guide-10.png
[23]: http://hadihariri.com/images/webstorm-guide-11.png
[24]: http://hadihariri.com/images/webstorm-guide-13.png
[25]: http://hadihariri.com/images/webstorm-guide-12.png
