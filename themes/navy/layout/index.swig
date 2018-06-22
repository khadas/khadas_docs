<header id="banner" class="wrapper">
  <div class="inner">
    <h2 id="banner-title">{{ page.subtitle }}</h2>
	</p>
  </div>
</header>
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}
	  <div class="btns" id="intro-get-started-wrap">
       <a href="vim1/" class="ui inverted blue button" id="intro-get-started-link">
         <i class="play icon"></i>
         {{ __('index.read_docs') }}
       </a>
       <a href="faq/" class="ui inverted green button" id="intro-get-started-link">
         <i class="question circle icon"></i>
         {{ __('index.read_faqs') }}
       </a>
	  </div>
    </div>
  </div>
</div>
