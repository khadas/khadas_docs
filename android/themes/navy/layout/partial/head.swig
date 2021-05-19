<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <title>{% if page.title %}{{ page.title }} | {% endif %}{{ config.title }}</title>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Canonical links -->
  <link rel="canonical" href="{{ url }}">
  <!-- Alternative links -->
  {% if page.layout == 'page' or page.layout == 'index' %}
    {% for lang in site.data.languages %}
      <link rel="alternative" hreflang="{{ loop.key }}" href="{{ canonical_url(loop.key) }}">
    {% endfor %}
  {% endif %}
  <script src="//cdn.bootcss.com/pace/1.0.2/pace.min.js"></script>
  <link href="//cdn.bootcss.com/pace/1.0.2/themes/pink/pace-theme-flash.css" rel="stylesheet">
  <style>
    .pace .pace-progress {
       background: #1E92FB;
       height: 2px;
     }
    .pace .pace-progress-inner {
       box-shadow: 0 0 10px #1E92FB, 0 0 5px     #1E92FB;
     }
    .pace .pace-activity {
       border-top-color: #1E92FB;
       border-left-color: #1E92FB;
    }
  </style>
  <!-- Icon -->
  <link rel="Shortcut Icon" href="{{ url_for('/images/favicon.ico') }}">
  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="/vendor/semantic/dist/semantic.min.css">
  <link rel="stylesheet" type="text/css" href="/vendor/bootstrap-4.0.0/dist/css/bootstrap.min.css">
  <script
    src="https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js"
    crossorigin="anonymous"></script>
  <script src="/vendor/semantic/dist/semantic.min.js"></script>
  <script src="/vendor/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js"></script>
 <!-- Hotjar Tracking Code for https://docs.khadas.com -->
  <script>
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1081538,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>

  <!-- build:css build/css/navy.css -->
  {{ css('css/navy') }}
  <!-- endbuild -->
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="/css/font/fontawesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css">
  <!-- RSS -->
  {{ feed_tag('atom.xml') }}
  <!-- Open Graph -->
  {{ open_graph({
    fb_admins: config.fb_admins,
    twitter_site: config.twitter
  }) }}
  <!-- Google Analytics -->
  {{ partial('google_analytics') }}
</head>
