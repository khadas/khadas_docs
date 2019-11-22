title: 如何下载安卓源码
---

由于Android SDK的部分仓库需要从Google服务器下载，中国大陆地区用户，可以通过如下4种方式下载完整Android源码：
* 使用VPN直接下载源码
  * 优点：直接下载，无需额外修改XML文件
  * 缺点：需要使用VPN，根据不同VPN提供商网速可能较慢
* 使用内地镜像服务器下载
  * 优点：国内镜像服务器访问速度更快
  * 缺点：需要额外修改XML文件
* 百度网盘下载基版本代码（链接: https://pan.baidu.com/s/1_XbFongE6i7JNueJ-b-oXA 提取码: ivh5）（里面有个说明）
  * 优点：下载速度快
  * 缺点：需要下载与解压。
* 使用内地镜像服务器下载 + 百度网盘下载基版本代码
  * 优点：下载速度最快
  * 缺点：需要额外修改XML文件 + 需要下载与解压。
  
VPN方式不再介绍，如下方法基于清华大学镜像服务器：
* 步骤参考[Download the Android Source Code](/vim1/DownloadAndroidSourceCode.html)
* 在`repo sync`之前修改default.xml文件，把Google的URL地址改为清华大学的，如下：
```
gouwa@Server:~/project/khadas/aosp/.repo/manifests$ git diff
diff --git a/default.xml b/default.xml
index f48a988..b8cb9da 100644
--- a/default.xml
+++ b/default.xml
@@ -1,6 +1,6 @@
 <?xml version="1.0" encoding="UTF-8"?>
 <manifest>
-  <remote fetch="https://android.googlesource.com/" name="aosp" review="https:/
+  <remote fetch="https://aosp.tuna.tsinghua.edu.cn/" name="aosp" review="https:
   <remote fetch="https://github.com/khadas/" name="github"/>
   
   <default remote="github" revision="refs/heads/Nougat" sync-j="4"/>
gouwa@Server:~/project/khadas/aosp/.repo/manifests$ 
```

### 常见问题：
* repo在运行过程中会尝试访问Google官方的git源更新自己，因此在运行过程中有可能出现”无法连接gerrit.googlesource.com“的问题，解决方案参考[这里](https://mirrors.tuna.tsinghua.edu.cn/help/git-repo/)。

* 下载过程中如果报如下错误，检查上述VPN或者修改XML方法是否正确配置*
```
...
Fetching project platform/prebuilts/sdk
Fetching projects:  66% (4/6)  fatal: unable to access 'https://android.googlesource.com/platform/prebuilts/tools/': Failed to connect to android.googlesource.com port 443: Connection timed out
fatal: unable to access 'https://android.googlesource.com/platform/prebuilts/sdk/': Failed to connect to android.googlesource.com port 443: Connection timed out
fatal: unable to access 'https://android.googlesource.com/platform/prebuilts/tools/': Failed to connect to android.googlesource.com port 443: Connection timed out
fatal: unable to access 'https://android.googlesource.com/platform/prebuilts/sdk/': Failed to connect to android.googlesource.com port 443: Connection timed out
error: Cannot fetch platform/prebuilts/tools
error: Cannot fetch platform/prebuilts/sdk

error: Exited sync due to fetch errors
gouwa@Server:~/project/khadas/aosp$ 
```

### 更多参考：
* [清华大学官方文档：如何下载Android AOSP源码](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)


