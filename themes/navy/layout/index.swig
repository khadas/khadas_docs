<header id="banner" class="wrapper">
  <div class="inner">
    <div id="banner-special-content">{{ page.special_content }}</div>
    <h2 id="banner-title">{{ page.subtitle }}</h2>
	</p>
  </div>
</header>
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}

      <div class="ui two column grid" id="intro-block">
        <div class="column">
	      <div class="ui raised segment">
	        <a class="ui green ribbon label" id="intro-label">{{ __('home_page.intro_title1') }}</a>
	        <p id="intro-description">{{ __('home_page.intro_desc1') }}</p>
	      </div>
        </div>

        <div class="column">
	      <div class="ui raised segment">
	        <a class="ui green right ribbon label" id="intro-label">{{ __('home_page.intro_title2') }}</a>
	        <p id="intro-description">{{ __('home_page.intro_desc2') }}</p>
	      </div>
        </div>

        <div class="column">
	      <div class="ui raised segment">
	        <a class="ui blue ribbon label" id="intro-label">{{ __('home_page.intro_title3') }}</a>
	        <p id="intro-description">{{ __('home_page.intro_desc3') }}</p>
	      </div>
        </div>

        <div class="column">
	      <div class="ui raised segment">
	        <a class="ui orange right ribbon label" id="intro-label">{{ __('home_page.intro_title4') }}</a>
	        <p id="intro-description">{{ __('home_page.intro_desc4') }}</p>
	      </div>
        </div>
      </div>

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
