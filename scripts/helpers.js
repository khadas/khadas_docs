/* global hexo */

'use strict';

var pathFn = require('path');
var _ = require('lodash');
var cheerio = require('cheerio');
var lunr = require('lunr');

var localizedPath = ['vim1', 'vim2', 'vim3', 'edge', 'tone1', "hardware", 'firmware', 'faq'];

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('page_nav', function() {
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var list = {};
  var prefix = 'sidebar.' + type + '.';

  for (var i in sidebar) {
    for (var j in sidebar[i]) {
      list[sidebar[i][j]] = j;
    }
  }

  var keys = Object.keys(list);
  var index = keys.indexOf(path);
  var result = '';

  if (index > 0) {
    result += '<a href="' + keys[index - 1] + '" class="article-footer-prev" title="' + this.__(prefix + list[keys[index - 1]]) + '">'
      + '<i class="fa fa-chevron-left"></i><span>' + this.__('page.prev') + '</span></a>';
  }

  if (index < keys.length - 1) {
    result += '<a href="' + keys[index + 1] + '" class="article-footer-next" title="' + this.__(prefix + list[keys[index + 1]]) + '">'
      + '<span>' + this.__('page.next') + '</span><i class="fa fa-chevron-right"></i></a>';
  }

  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className) {
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var result = '';
  var link_temp ='';
  var open = '';
  var self = this;
  var first_link = '';

  var prefix = 'sidebar.' + type + '.';

  _.each(sidebar, function(menu, title) {
    first_link = 'yes';
	link_temp = '';
    open = '';
    _.each(menu, function(link, text) {
      var itemClass = className + '-link';
      if (link === path) {
        open = 'yes';
	    itemClass += ' current';
	  }

      if (first_link === 'yes') {
	    itemClass += ' first';
		first_link = 'no';
	  }

      link_temp += '<a href="' + link + '" class="' + itemClass + '">' + self.__(prefix + text) + '</a>';
    });
	if (open === 'yes')
		result += '<strong class="' + className + '-title">' + '<details open>' + '<summary>' + self.__(prefix + title) + '</summary>' + link_temp + '</details>' + '</strong>';
	else
		result += '<strong class="' + className + '-title">' + '<details>' + '<summary>' + self.__(prefix + title) + '</summary>' + link_temp + '</details>' + '</strong>';
  });

  return result;
});

hexo.extend.helper.register('header_menu', function(className) {
  var menu = this.site.data.menu;
  var result = '';
  var self = this;
  var lang = this.page.lang;
  var isEnglish = lang === 'en';

  _.each(menu, function(path, title) {
    var currentPath = pathFn.dirname(self.path);
    if (!isEnglish && ~localizedPath.indexOf(title)) {
      path = lang + path;
      currentPath = currentPath + '/';
    } else {
      currentPath = '/' + currentPath + '/';
    }

    if (path === currentPath) {
		result += '<a href="' + self.url_for(path) + '" class="' + className + '-link current">' + self.__('menu.' + title) + '</a>';
	} else {
		result += '<a href="' + self.url_for(path) + '" class="' + className + '-link">' + self.__('menu.' + title) + '</a>';
    }
  });

  return result;
});

hexo.extend.helper.register('canonical_url', function(lang) {
  var path = this.page.canonical_path;
  if (lang && lang !== 'en') path = lang + '/' + path;

  return this.config.url + '/' + path;
});

hexo.extend.helper.register('url_for_lang', function(path) {
  var lang = this.page.lang;
  var url = this.url_for(path);

  if (lang !== 'en' && url[0] === '/') url = '/' + lang + url;

  return url;
});

hexo.extend.helper.register('raw_link', function(path) {
  return 'https://github.com/khadas/khadas_docs/edit/master/source/' + path;
});

hexo.extend.helper.register('page_anchor', function(str) {
  var $ = cheerio.load(str, {decodeEntities: false});
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function() {
    var id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append('<a class="article-anchor" href="#' + id + '" aria-hidden="true"></a>');
  });

  return $.html();
});

hexo.extend.helper.register('lunr_index', function(data) {
  var index = lunr(function() {
    this.field('name', {boost: 10});
    this.field('tags', {boost: 50});
    this.field('description');
    this.ref('id');

    _.sortBy(data, 'name').forEach((item, i) => {
      this.add(_.assign({ id: i }, item));
    });
  });

  return JSON.stringify(index);
});

hexo.extend.helper.register('canonical_path_for_nav', function() {
  var path = this.page.canonical_path;

  if (startsWith(path, 'vim1/') || startsWith(path, 'vim2/') || startsWith(path, 'vim3/') || startsWith(path, 'edge/') || startsWith(path, 'hardware/') || startsWith(path, 'firmware/') || startsWith(path, 'tone1/') || startsWith(path, 'faq/')) {
    return path;
  }
  return '';

});

hexo.extend.helper.register('lang_name', function(lang) {
  var data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('disqus_lang', function() {
  var lang = this.page.lang;
  var data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});

hexo.extend.helper.register('hexo_version', function() {
  return this.env.version;
});

