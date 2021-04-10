/* global hexo */
/* eslint-disable */

'use strict';

var pathFn = require('path');
var _ = require('lodash');
var cheerio = require('cheerio');
var lunr = require('lunr');
const MOBILE_NAV = 'mobile-nav';

var localizedPath = ['vim1', 'vim2', 'vim3', 'edge', 'tone1', "hardware", 'firmware', 'faq'];

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

function wideTraversal(selectNode, type) {
  if (selectNode != null) {
    var queue = [];
    queue.unshift(Object.entries(selectNode));
    while (queue.length !== 0) {
      var item = queue.shift();
      var title = '';
      var menuList = '';
      if(Object.prototype.toString.call(item[0][1]) === '[object Object]'){
        title = item[0][0];
        menuList = item[0][1];
      }else{
        title = item[0];
        menuList = item[1];
      }
      if (title === type) {
        return menuList;
      }
      if (Object.prototype.toString.call(menuList) === '[object Object]') {
        for (var i = 0; i < Object.entries(menuList).length; i++) {
          queue.push(Object.entries(menuList)[i]);
        }
      }
    }
  }
}

function deepFirstSearch(node) {
  if (node != null) {
    var stack = [];
    stack.push(Object.entries(node));
    while (stack.length != 0) {
      var item = stack.pop();
      var title = '';
      var menuList = '';
      if(stack.length === 0){
        title = item[0][0];
        menuList = item[0][1];
      }else{
        title = item[0];
        menuList = item[1];
      }
      if(Object.prototype.toString.call(menuList) === '[object Object]'){
        stack.push(Object.entries(menuList)[0]);
      }else{
        return menuList;
      }
    }
  }
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

hexo.extend.helper.register('doc_sidebar', function (className) {
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var result = '';
  var link_temp = '';
  var open = '';
  var self = this;
  var first_link = '';
  var is_first_link = true;

  var prefix = 'sidebar.' + type + '.';

  _.each(sidebar, function (menu, title) {
    first_link = 'yes';
    link_temp = '';
    open = '';
    _.each(menu, function (secondMenu, text) {
      var itemClass = className + '-link';
      if (Object.prototype.toString.call(secondMenu) === '[object Object]') {
        var secondary_link_temp = '';
        var secondary_open = '';
        var secondary_first_link = 'yes';
        _.each(secondMenu, function (link, thirdMenuText) {
          var secondary_item_class = className + '-link';
          if(link === 'index.html'){
            is_first_link = false;
          }
          if (link === path) {
            open = 'yes';
            secondary_open = 'yes';
            secondary_item_class += ' current';
          }else if(is_first_link && path === 'index.html'){
            open = 'yes';
            secondary_open = 'yes';
            secondary_item_class += ' current';
            is_first_link = false;
          }

          if (secondary_first_link === 'yes') {
            secondary_item_class += ' secondary-first';
            secondary_first_link = 'no';
          }
          secondary_link_temp +=
            '<a href="' +
            link +
            '" class="' +
            secondary_item_class +
            '">' +
            self.__(prefix + thirdMenuText) +
            '</a>';
        });

        if (secondary_open === 'yes') {
          link_temp +=
            '<strong class="' +
            className +
            '-link"><details open><summary>' +
            self.__(prefix + text) +
            '</summary>' +
            secondary_link_temp +
            '</details></strong>';
        } else {
          link_temp +=
            '<strong class="' +
            className +
            '-link"><details><summary>' +
            self.__(prefix + text) +
            '</summary>' +
            secondary_link_temp +
            '</details></strong>';
        }
      } else {
        var link = secondMenu;
        if(link === 'index.html'){
          is_first_link = false;
        }
        if (link === path) {
          open = 'yes';
          itemClass += ' current';
          is_first_link = false;
        }else if(is_first_link && path === 'index.html'){
          open = 'yes';
          itemClass += ' current';
          is_first_link = false;
        }

        if (first_link === 'yes') {
          itemClass += ' first';
          first_link = 'no';
        }

        link_temp +=
          '<a href="' +
          link +
          '" class="' +
          itemClass +
          '">' +
          self.__(prefix + text) +
          '</a>';
      }
    });

    if (open === 'yes') {
      result +=
        '<strong class="' +
        className +
        '-title">' +
        '<details open>' +
        '<summary>' +
        self.__(prefix + title) +
        '</summary>' +
        link_temp +
        '</details>' +
        '</strong>';
    } else {
      result +=
        '<strong class="' +
        className +
        '-title">' +
        '<details>' +
        '<summary>' +
        self.__(prefix + title) +
        '</summary>' +
        link_temp +
        '</details>' +
        '</strong>';
    }
  });
  return result;
});

hexo.extend.helper.register('header_menu', function (className) {
  var menu = this.site.data.menu;
  var result = '';
  var self = this;
  var lang = this.page.lang;
  var isEnglish = lang === 'en';
  var current = '';
  if (className !== MOBILE_NAV){
    result += '<div style="display:inline-block"><div class="btn-group">';
  }
  for (const [title, submenu] of Object.entries(menu)) {
    var currentPath = pathFn.dirname(self.path);
    if (Object.prototype.toString.call(submenu) === '[object Object]') {
      var secondary_result = '';
      var is_current = '';
      var open = '';

      _.each(submenu, function (path, subtitle) {
        var currentPath = pathFn.dirname(self.path);
        if (!isEnglish && ~localizedPath.indexOf(subtitle)) {
          path = lang + path;
          currentPath = currentPath + '/';
        } else {
          currentPath = '/' + currentPath + '/';
        }

        if (path === currentPath) {
          open = 'open';
          current = 'current';
          is_current = true;
        }

        if (className === MOBILE_NAV){
          secondary_result +=
            '<a href="' + self.url_for(path) + '" class="' + className + '-link secondary ' + current + '">' +
            self.__('menu.' + subtitle) +
            '</a>';
        }else{
          secondary_result +=
            '<li class="submenu">' +
            '<a href="' + self.url_for(path) + '" class="' + className + '-link secondary ' + current + '">' +
            self.__('menu.' + subtitle) +
            '</a>' +
            '</li>';
        }
        current = '';
      });

      if (is_current){
        current = 'current';
      }

      if (className === MOBILE_NAV){
        result +=
          '<strong class="' + className + '-link ' + current + ' header">' +
          '<details ' + open + '>' +
          '<summary>' +
          self.__('menu.' + title) +
          '</summary>' +
          secondary_result +
          '</details>' +
          '</strong>';
      }else{
        result +=
          '<div class="' + className + '-link dropdown-toggle ' + current + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
          self.__('menu.' + title) +
          '</div>' +
          '<ul class="dropdown-menu submenu-list" aria-labelledby="dropdownMenuLink">' +
          secondary_result +
          '</ul>' +
          '</div>';
      }
      current = '';
    } else {
      var path = submenu;
      if (!isEnglish && ~localizedPath.indexOf(title)) {
        path = lang + path;
        currentPath = currentPath + '/';
      } else {
        currentPath = '/' + currentPath + '/';
      }

      if (path === currentPath) {
        current = 'current';
      }

      var firmware_redirect_link = self.redirect_link(title, "firmware", path);
      var hardware_redirect_link = self.redirect_link(title, "hardware", path);
      if (title === "firmware"){
        path = firmware_redirect_link;
      }else if (title === "hardware"){
        path = hardware_redirect_link;
      }

      result +=
        '<a href="' + self.url_for(path) +'" class="' + className + '-link ' + current + ' header">' +
        self.__('menu.' + title) +
        '</a>';
      current = '';
    }
  }
  if (className !== MOBILE_NAV){
    result += '</div>';
  }
  return result;
});

hexo.extend.helper.register('redirect_link',function(title, header_text, path){
  if (title === header_text){
    var canonicalPath = this.page.canonical_path;
    if (
      startsWith(canonicalPath, 'vim1/') ||
      startsWith(canonicalPath, 'vim2/') ||
      startsWith(canonicalPath, 'vim3/') ||
      startsWith(canonicalPath, 'edge/') ||
      (startsWith(canonicalPath, 'tone1/') && header_text === 'hardware')
      ) {
      var type = this.page.canonical_path.split("/")[0];
      var redirectLink = '';
      var menuList = wideTraversal(this.site.data.sidebar[header_text],type);
      if (Object.prototype.toString.call(menuList) === '[object Object]'){
        redirectLink = deepFirstSearch(menuList);
      }else{
        redirectLink = menuList;
      }
      path = path + redirectLink;
    }
    return path;
  }
  return null;
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

hexo.extend.helper.register('toc', require('./toc'));

