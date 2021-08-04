# Khadas documentation
<!-- Markdown snippet -->

[![Build Status](https://github.com/khadas/khadas_docs/actions/workflows/main.yaml/badge.svg?branch=master)](https://github.com/khadas/khadas_docs/actions/workflows/main.yaml)

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
$ nvm install v12.9.0
$ nvm alias default v12.9.0
$ nvm use v12.9.0
```

Install dependencies:

``` bash
$ git clone https://github.com/khadas/khadas_docs.git
$ cd khadas_docs
$ npm install
$ npm install hexo-cli -g
```

Generate:

``` bash
$ hexo generate
```

Run server:

``` bash
$ hexo server
```
