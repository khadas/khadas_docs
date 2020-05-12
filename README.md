# Khadas documentation
<!-- Markdown snippet -->

[![Build Status](https://travis-ci.org/khadas/khadas_docs.svg?branch=master)](https://travis-ci.org/khadas/khadas_docs)

## Getting started

Install Git:
```
$ sudo apt-get install git-core
```

Install nvm:
```
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Reload environment profile:
```
$ source ~/.bashrc
```

install node.js:
```
$ nvm install v10.20
```

Install dependencies:

``` bash
$ git clone https://github.com/khadas/khadas_docs.git
$ cd khadas_docs
$ npm install
```

Generate:

``` bash
$ hexo generate
```

Run server:

``` bash
$ hexo server
```
