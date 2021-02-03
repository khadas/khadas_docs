<style>

.just-center{
    text-align: center;
}

.column-center{
    display:inline-block;
}

.clear{
    clear:both;
}
.series{
    position: relative;
    width: 400px;
    height: 50px;
    float: left;
    margin: 16px;
    margin-top:16px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}

.homepage{
    position: relative;
    width: 400px;
    height: 400px;
    float: left;
    margin: 16px;
    margin-top:16px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}
.homepage img{
    max-width:350px;
    height:auto;
}

.mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background: rgba(101, 101, 101, 0.6);
    color: #ffffff;
    opacity: 0;
    justify-content: center;
    align-items: center;
    display: flex;
   
}

.mask font {
    text-align: center;
}

.homepage a:hover .mask {
    opacity: 1;           
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

      <div class="ui two column just-center" id="intro-block">

        <div class="column column-center">
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/vim1.jpg" alt="VIM1">
            {% if page.lang == 'en'  %}
              <a href="/vim1">
            {% else %}
              <a href="/zh-cn/vim1">
            {% endif %}
              <div class="mask">
                <font size="10">VIM1</font>
              </div>
            </a>
          </div>
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/vim2.jpg" alt="VIM2">
            {% if page.lang == 'en'  %}
              <a href="/vim2">
            {% else %}
              <a href="/zh-cn/vim2">
            {% endif %}
              <div class="mask">
                <font size="10">VIM2</font>
              </div>
            </a>
          </div>
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/vim3.jpg" alt="VIM3">
            {% if page.lang == 'en'  %}
              <a href="/vim3#VIM3">
            {% else %}
              <a href="/zh-cn/vim3#VIM3">
            {% endif %}
              <div class="mask">
                <font size="10">VIM3</font>
              </div>
            </a>
          </div>
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/vim3l.jpg" alt="VIM3L">
            {% if page.lang == 'en'  %}
              <a href="/vim3#VIM3L">
            {% else %}
              <a href="/zh-cn/vim3#VIM3L">
            {% endif %}
              <div class="mask">
                <font size="10">VIM3L</font>
              </div>
            </a>
          </div>
        </div>
        
        <div class="clear"></div>

        <div class="column column-center">
          <div class="ui series" style="margin:16px;">
            {% if page.lang == 'en'  %}
              <font size="10">VIM Series</font>
            {% else %}
              <font size="10">VIM 系列</font>
            {% endif %}
          </div>
        </div>

        <div class="clear"></div>

        <div class="column column-center">
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/edge.jpg" alt="Edge">
            {% if page.lang == 'en'  %}
              <a href="/edge#Edge">
            {% else %}
              <a href="/zh-cn/edge#Edge">
            {% endif %}
              <div class="mask">
                <font size="10">Edge</font>
              </div>
            </a>
          </div>
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/edge-v.jpg" alt="Edge-V">
            {% if page.lang == 'en'  %}
              <a href="/edge#Edge-V">
            {% else %}
              <a href="/zh-cn/edge#Edge-V">
            {% endif %}
              <div class="mask">
                <font size="10">Edge-V</font>
              </div>
            </a>
          </div>
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/captain.jpg" alt="Captain">
            {% if page.lang == 'en'  %}
              <a href="/edge#Captain">
            {% else %}
              <a href="/zh-cn/edge#Captain">
            {% endif %}
              <div class="mask">
                <font size="10">Captain</font>
              </div>
            </a>
          </div>
        </div>

        <div class="clear"></div>

        <div class="column column-center">
          <div class="ui series" style="margin:16px;">
            {% if page.lang == 'en'  %}
              <font size="10">Edge Series</font>
            {% else %}
              <font size="10">Edge 系列</font>
            {% endif %}
          </div>
        </div>

        <div class="clear"></div>

        <div class="column column-center">
          <div class="ui raised segment homepage" style="margin:16px;">
            <img src="/images/home/tone1.jpg" alt="TONE1">
            {% if page.lang == 'en'  %}
              <a href="/tone1">
            {% else %}
              <a href="/zh-cn/tone1">
            {% endif %}
              <div class="mask">
                <font size="10">Tone 1</font>
              </div>
            </a>
          </div>
        </div>

        <div class="clear"></div>

        <div class="column column-center">
          <div class="ui series" style="margin:16px;">
            {% if page.lang == 'en'  %}
              <font size="10">Tone Series</font>
            {% else %}
              <font size="10">Tone 系列</font>
            {% endif %}
          </div>
        </div>

        <div class="clear"></div>

    </div>
  </div>
</div>
