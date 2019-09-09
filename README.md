# Khadas documentation
<!-- Markdown snippet -->

[![Build Status](https://travis-ci.org/khadas/khadas_docs.svg?branch=master)](https://travis-ci.org/khadas/khadas_docs)

## Getting started

Install Git:
```
$ sudo apt-get install git-core
```

Install Node.js:
```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```
Once nvm is installed, restart the terminal and run the following command to install Node.js:
```
$ export NVM_DIR="$HOME/.nvm"
$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
$ [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
$ nvm install stable
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
