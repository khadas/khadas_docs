title: RSTP网页摄像头Demo
---

这篇主要介绍如何在Ubuntu20.04上通过RSTP流使用摄像头。


## 安装依赖

Demo主要使用了opencv以及flask框架。

1. 安装opencv

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo apt install libopencv-dev python3-opencv</pre>

2. 安装flask

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo apt install python3-pip</pre>
<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ pip3 instal flask</pre>

## 运行Demo

1. Clone代码

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ git clone git@github.com:yan-wyb/rtsp-web-appliation.git</pre>

2. 确认摄像头节点。

插入摄像头前，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ls /dev/video*
<span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video0</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video10</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video11</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video12</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video13</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/videosync</b></font></span></pre>

插入摄像头后，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ls /dev/video*
<span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video0</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video1</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video10</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video11</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video12</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video13</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/videosync</b></font></span></pre>

确认摄像头节点为`/dev/video1`。

3. 运行Demo

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cd rtsp-web-appliation/
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/rtsp-web-appliation</b></font>$ python3 rtsp.py --device 1
 * Serving Flask app &apos;rtsp&apos; (lazy loading)
 * Environment: production
<font color="#CC0000">   WARNING: This is a development server. Do not use it in a production deployment.</font>
<font color="#AAAAAA">   Use a production WSGI server instead.</font>
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 707-481-604
</pre>


打开链接就能看到Demo的效果

![rtsp-camera.png](/linux/images/vim1/rtsp-camera.png)

