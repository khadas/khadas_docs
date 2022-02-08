title: RSTP Web Camera Demo
---

This page introduces how to use the camera through RSTP stream on Ubuntu 20.04.

## Installation dependencies

Demo mainly uses opencv and flask frameworks.

1. Install opencv

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo apt install libopencv-dev python3-opencv</pre>

2. Install flask

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo apt install python3-pip</pre>
<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ pip3 instal flask</pre>

## Run Demo

1. Clone source code

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ git clone git@github.com:yan-wyb/rtsp-web-appliation.git</pre>

2. Check camera node

Before plugin camera,

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ls /dev/video*
<span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video0</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video10</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video11</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video12</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video13</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/videosync</b></font></span></pre>

After plugin camera,

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ls /dev/video*
<span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video0</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video1</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video10</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video11</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video12</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/video13</b></font></span>  <span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/videosync</b></font></span></pre>


Camera node is `/dev/video1`.

3. Run Demo

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


Open the link to see the effect of the Demo

![rtsp-camera.png](/linux/images/vim1/rstp-camera.png)

