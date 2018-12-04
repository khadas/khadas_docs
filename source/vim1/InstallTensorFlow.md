title: Install TensorFlow
---

This guide will teach you how to install Google [TensorFlow](https://github.com/tensorflow/tensorflow) on Khadas VIMs/Edge. Take `Ubuntu 16.04.4 arm64` for example.

*Note: This version only supports CPU (there is no GPU support).*

### Install Python3
```
$ sudo apt-get update
$ sudo apt-get install python3-pip python3-dev
```

### Get TensorFlow Wheel for aarch64
Download TensorFlow wheel for aarch64 to someplace like:`~/tensorflow`, we will download version `1.8.0`:
```
$ mkdir ~/tensorflow
$ cd ~/tensorflow
$ wget https://github.com/lhelontra/tensorflow-on-arm/releases/download/v1.8.0/tensorflow-1.8.0-cp35-none-linux_aarch64.whl
```

### Install TensorFlow
```
$ cd ~/tensorflow
$ pip3 install tensorflow-1.8.0-cp35-none-linux_aarch64.whl
```
*Tip: Installation will take a few minutes, please wait patiently.*

### Test TensorFlow
```
$ python3
Python 3.5.2 (default, Nov 23 2017, 16:37:01) 
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tensorflow as tf
>>> hello = tf.constant('Hello world!')
>>> sess = tf.Session()
>>> print(sess.run(hello))
b'Hello world!'
>>> 
```

If you can see the `Hello world!` message print-out in your terminal, it means that Tensorflow has installed successfully.


### Troubleshooting
If you get the following errors when you import TensorFlow, you should update `libstdc++6`.
```
>>> import tensorflow as tf
Traceback (most recent call last):
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow.py", line 58, in <module>
    from tensorflow.python.pywrap_tensorflow_internal import *
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow_internal.py", line 28, in <module>
    _pywrap_tensorflow_internal = swig_import_helper()
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow_internal.py", line 24, in swig_import_helper
    _mod = imp.load_module('_pywrap_tensorflow_internal', fp, pathname, description)
  File "/usr/lib/python3.5/imp.py", line 242, in load_module
    return load_dynamic(name, filename, file)
  File "/usr/lib/python3.5/imp.py", line 342, in load_dynamic
    return _load(spec)
ImportError: /usr/lib/aarch64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.22' not found (required by /home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/_pywrap_tensorflow_internal.so)

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/__init__.py", line 24, in <module>
    from tensorflow.python import pywrap_tensorflow  # pylint: disable=unused-import
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/__init__.py", line 49, in <module>
    from tensorflow.python import pywrap_tensorflow
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow.py", line 74, in <module>
    raise ImportError(msg)
ImportError: Traceback (most recent call last):
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow.py", line 58, in <module>
    from tensorflow.python.pywrap_tensorflow_internal import *
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow_internal.py", line 28, in <module>
    _pywrap_tensorflow_internal = swig_import_helper()
  File "/home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/pywrap_tensorflow_internal.py", line 24, in swig_import_helper
    _mod = imp.load_module('_pywrap_tensorflow_internal', fp, pathname, description)
  File "/usr/lib/python3.5/imp.py", line 242, in load_module
    return load_dynamic(name, filename, file)
  File "/usr/lib/python3.5/imp.py", line 342, in load_dynamic
    return _load(spec)
ImportError: /usr/lib/aarch64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.22' not found (required by /home/khadas/.local/lib/python3.5/site-packages/tensorflow/python/_pywrap_tensorflow_internal.so)


Failed to load the native TensorFlow runtime.

See https://www.tensorflow.org/install/install_sources#common_installation_problems

for some common reasons and solutions.  Include the entire stack trace
above this error message when asking for help.
```

Try the following commands to update `libstdc++6`.
```
$ sudo add-apt-repository ppa:ubuntu-toolchain-r/test 
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade
```
### See Also
[TensorFlow Docs](https://www.tensorflow.org/install)
