<style>
.homepage{
    text-align: center;
}
.homepage img{
    width:23%;
    height:auto;
    vertical-align: middle;
}
</style>
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

      <div class="ui two column" id="intro-block">

        <div class="column">
	      <div class="ui raised segment homepage">
            {% if page.lang == 'en'  %}
            <a href="/vim1"><img src="/images/home/vim1.jpg" alt="VIM1"></a>
            <a href="/vim2"><img src="/images/home/vim2.png" alt="VIM2"></a>
            <a href="/vim3/#VIM3"><img src="/images/home/vim3.png" alt="VIM3"></a>
            <a href="/vim3/#VIM3L"><img src="/images/home/vim3l.jpg" alt="VIM3L"></a>
            {% else %}
            <a href="/zh-cn/vim1"><img src="/images/home/vim1.jpg" alt="VIM1"></a>
            <a href="/zh-cn/vim2"><img src="/images/home/vim2.png" alt="VIM2"></a>
            <a href="/zh-cn/vim3/#VIM3"><img src="/images/home/vim3.png" alt="VIM3"></a>
            <a href="/zh-cn/vim3/#VIM3L"><img src="/images/home/vim3l.jpg" alt="VIM3L"></a>
            {% endif %}
	      </div>
          <div class="ui homepage">
            {% if page.lang == 'en'  %}
            <a><font size="10">VIMs Series (</font></a>
            <a href="/vim1"><font size="10">VIM1</font></a>
            <a><font size="10">/</font></a>
            <a href="/vim2"><font size="10">VIM2</font></a>
            <a><font size="10">/</font></a>
            <a href="/vim3/#VIM3"><font size="10">VIM3</font></a>
            <a><font size="10">/</font></a>
            <a href="/vim3/#VIM3L"><font size="10">VIM3L</font></a>
            <a><font size="10">)</font></a>
            {% else %}
            <a><font size="10">VIMs 系列 (</font></a>
            <a href="/zh-cn/vim1"><font size="10">VIM1</font></a>
            <a><font size="10">/</font></a>
            <a href="/zh-cn/vim2"><font size="10">VIM2</font></a>
            <a><font size="10">/</font></a>
            <a href="/zh-cn/vim3/#VIM3"><font size="10">VIM3</font></a>
            <a><font size="10">/</font></a>
            <a href="/zh-cn/vim3/#VIM3L"><font size="10">VIM3L</font></a>
            <a><font size="10">)</font></a>
            {% endif %}
	      </div>
        </div>

        <div class="column">
	      <div class="ui raised segment homepage">
            {% if page.lang == 'en'  %}
            <a href="/edge/#Edge"><img src="/images/home/edge.jpg" alt="Edge"></a>
            <a href="/edge/#Edge-V"><img src="/images/home/edge-v.jpg" alt="Edge-V"></a>
            <a href="/edge/#Caption"><img src="/images/home/captain.jpg" alt="Caption"></a>
            {% else %}
            <a href="/zh-cn/edge/#Edge"><img src="/images/home/edge.jpg" alt="Edge"></a>
            <a href="/zh-cn/edge/#Edge-V"><img src="/images/home/edge-v.jpg" alt="Edge-V"></a>
            <a href="/zh-cn/edge/#Caption"><img src="/images/home/caption.jpg" alt="Caption"></a>
            {% endif %}
	      </div>
          <div class="ui homepage">
            {% if page.lang == 'en'  %}
            <a><font size="10">Edge Series (</font></a>
            <a href="/edge#Edge"><font size="10">Edge</font></a>
            <a><font size="10">/</font></a>
            <a href="/edge#Edge-V"><font size="10">Edge-V</font></a>
            <a><font size="10">/</font></a>
            <a href="/edge#Caption"><font size="10">Caption</font></a>
            <a><font size="10">)</font></a>
            {% else %}
            <a><font size="10">Edge 系列 (</font></a>
            <a href="/zh-cn/edge/#Edge"><font size="10">Edge</font></a>
            <a><font size="10">/</font></a>
            <a href="/zh-cn/edge/#Edge-V"><font size="10">Edge-V</font></a>
            <a><font size="10">/</font></a>
            <a href="/zh-cn/edge/#Caption"><font size="10">Caption</font></a>
            <a><font size="10">)</font></a>
            {% endif %}
	      </div>
        </div>

        <div class="column">
	      <div class="ui raised segment homepage">
            {% if page.lang == 'en'  %}
            <a href="/edge"><img src="/images/home/tone1.jpg" alt="Tone1"></a>
            {% else %}
            <a href="/zh-cn/edge"><img src="/images/home/tone1.jpg" alt="Tone1"></a>
            {% endif %}
	      </div>
          <div class="ui homepage">
            {% if page.lang == 'en'  %}
            <a href="/toneboard"><font size="10">ToneBoard</font></a>
            {% else %}
            <a href="/zh-cn/toneboard"><font size="10">ToneBoard</font></a>
            {% endif %}
	      </div>
        </div>

    </div>
  </div>
</div>
