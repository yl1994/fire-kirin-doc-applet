// pages/passenger/passenger.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passengerPreData: [
      "<pre class=\"language-sh\"><code> <span class=\"token function\">ssh</span> root@49.67.189.227\n</code></pre>",
      "<pre class=\"language-sh\"><code> ssh-keygen -R <span class=\"token string\">\"49.67.189.227\"</span>  \n</code></pre>",
      "<pre class=\"language-sh\"><code>adduser  deploy <span class=\"token function\">sudo</span> <span class=\"token comment\">#添加用户并赋予管理员权限</span>\n<span class=\"token function\">passwd</span>  deploy  <span class=\"token comment\">#为用户设置密码</span>\n\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> update <span class=\"token comment\">#更新 apt</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> <span class=\"token function\">curl</span> <span class=\"token comment\">#安装 curl</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code> <span class=\"token punctuation\">\\</span>curl -sSL https://get.rvm.io <span class=\"token operator\">|</span> <span class=\"token function\">bash</span> -s stable\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token builtin class-name\">source</span> /home/ deploy/.rvm/scripts/rvm <span class=\"token comment\">#让rvm配置生效</span>\nrvm use --install --default <span class=\"token number\">2.3</span>.0 <span class=\"token comment\">#安装并默认ruby版本</span>\nruby -v <span class=\"token comment\">#安装完毕后，确认目前的 Ruby 版本：</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code>gem sources --add https://gems.ruby-china.com/--remove https://rubygems.org/\ngem sources -l\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7\n\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> -y apt-transport-https ca-certificates\n\n<span class=\"token comment\"># Add our APT repository</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">sh</span> -c <span class=\"token string\">'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main &gt; /etc/apt/sources.list.d/passenger.list'</span>\n\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> update\n\n<span class=\"token comment\"># Install Passenger + Nginx</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> -y nginx-extras passenger\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> libcurl4-gnutls-dev\n\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">chown</span> -R  deploy: deploy Document/ <span class=\"token comment\">#更改文件所属权限</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code> <span class=\"token function\">sudo</span> <span class=\"token function\">dd</span> <span class=\"token assign-left variable\">if</span><span class=\"token operator\">=</span>/dev/zero <span class=\"token assign-left variable\">of</span><span class=\"token operator\">=</span>/swap <span class=\"token assign-left variable\">bs</span><span class=\"token operator\">=</span>1M <span class=\"token assign-left variable\">count</span><span class=\"token operator\">=</span><span class=\"token number\">1024</span>\n <span class=\"token function\">sudo</span> <span class=\"token function\">mkswap</span> /swap\n <span class=\"token function\">sudo</span> <span class=\"token function\">swapon</span> /swap\n</code></pre>",
      "<pre class=\"language-sh\"><code>    <span class=\"token function\">git</span> clone 你的项目地址\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> mysql-server\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> mysql-client\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> libmysqlclient-dev <span class=\"token comment\">#安装mysql环境依赖</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code>gem <span class=\"token function\">install</span> bundler <span class=\"token comment\">#安装包管理工具</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> nodejs <span class=\"token comment\">#安装nodejs</span>\n<span class=\"token builtin class-name\">cd</span> blog <span class=\"token comment\">#进入项目</span>\nbundle <span class=\"token function\">install</span><span class=\"token comment\">#运行bundle命令</span>\n\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token assign-left variable\">RAILS_ENV</span><span class=\"token operator\">=</span>production bundle <span class=\"token builtin class-name\">exec</span> rake db:create\n<span class=\"token assign-left variable\">RAILS_ENV</span><span class=\"token operator\">=</span>production bundle <span class=\"token builtin class-name\">exec</span> rake db:migrate\n<span class=\"token assign-left variable\">RAILS_ENV</span><span class=\"token operator\">=</span>production bundle <span class=\"token builtin class-name\">exec</span> rake assets:precompile\n\n</code></pre>",
      "<pre class=\"language-sh\"><code>rake secret <span class=\"token assign-left variable\">RAILS_ENV</span><span class=\"token operator\">=</span>production <span class=\"token comment\">#生成key</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">vim</span> /etc/nginx/nginx.conf\n<span class=\"token comment\">#去掉这一行的注释</span>\ninclude /etc/nginx/passenger.conf<span class=\"token punctuation\">;</span>\n<span class=\"token comment\"># 在此文件最顶部加上</span>\n<span class=\"token function\">env</span> <span class=\"token environment constant\">PATH</span><span class=\"token punctuation\">;</span>\n</code></pre>",
      "<pre class=\"language-json\"><code>server <span class=\"token punctuation\">{</span>\n  listen <span class=\"token number\">80</span>;\n  server_name your_domain.com; # 還沒 domain 的話，先填 IP 位置\n\n  root /home/deploy/your_project_name/public;\n  # 如果是自動化部署，位置在 root /home/deploy/your_project_name/current/public;\n\n  passenger_enabled on;\n\n  passenger_min_instances <span class=\"token number\">1</span>;\n\n  location ~ ^/assets/ <span class=\"token punctuation\">{</span>\n    expires <span class=\"token number\">1</span>y;\n    add_header Cache-Control public;\n    add_header ETag <span class=\"token string\">\"\"</span>;\n    break;\n   <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> <span class=\"token function\">service</span> nginx start <span class=\"token comment\">#启动</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">service</span> nginx stop <span class=\"token comment\">#停止</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">service</span> nginx restart <span class=\"token comment\">#重启</span>\n\n</code></pre>",
      "<pre class=\"language-ruby\"><code><span class=\"token comment\">#  config/environments/production.rb</span>\nconfig<span class=\"token punctuation\">.</span>assets<span class=\"token punctuation\">.</span>compile <span class=\"token operator\">=</span> <span class=\"token keyword\">true</span>\n</code></pre>"
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})