// pages/capistrano/capistrano.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    capistranoPreData: [
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n<span class=\"token comment\"># `--ingroup sudo`是说，新建的用户直接就有执行`sudo`命令的权限。</span>\nadduser deploy --ingroup <span class=\"token function\">sudo</span>\n<span class=\"token comment\"># 输入新密码。</span>\n<span class=\"token comment\"># 问其他的Full Name之类的，你可以填写，也可以不填，直接回车。</span>\n<span class=\"token comment\"># 切换到deploy用户</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">su</span> deploy\n\n<span class=\"token comment\"># 进入`home`目录</span>\n<span class=\"token builtin class-name\">cd</span> ~\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># Mac 本地</span>\nssh-keygen -t rsa\n<span class=\"token comment\"># 如果不需要加密，就直接全部回车。需要加密，就自己填写密码</span>\n\n<span class=\"token function\">cat</span> ~/.ssh/id_rsa.pub\n<span class=\"token function\">scp</span> -P 端口号 ~/.ssh/id_rsa.pub <span class=\"token operator\">&lt;</span>YOUR SERVER USERNAME<span class=\"token operator\">&gt;</span>@<span class=\"token operator\">&lt;</span>YOUR SERVER IP ADDRESS<span class=\"token operator\">&gt;</span>:~\n<span class=\"token comment\"># 会出现一段文字，复制下来</span>\n<span class=\"token comment\"># 服务器上</span>\nssh-keygen -t rsa\n<span class=\"token comment\"># 依然全部直接回车</span>\n\n<span class=\"token function\">cat</span> id_rsa.pub <span class=\"token operator\">&gt;&gt;</span> ~/.ssh/authorized_keys\n<span class=\"token comment\"># 将刚才Mac本地命令行中，复制的那一段文字，粘贴进去，然后按:wq保存离开</span>\n\n<span class=\"token function\">chmod</span> <span class=\"token number\">600</span> ~/.ssh/authorized_keys\n<span class=\"token function\">sudo</span> <span class=\"token function\">service</span> <span class=\"token function\">ssh</span> restart\n\n<span class=\"token function\">ssh</span> -P -i ~/.ssh/id_rsa <span class=\"token operator\">&lt;</span>YOUR SERVER NAME<span class=\"token operator\">&gt;</span>@<span class=\"token operator\">&lt;</span>YOUR SERVER IP ADDRESS<span class=\"token operator\">&gt;</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">vim</span> /etc/ssh/sshd_config\n\n<span class=\"token comment\"># 将`PasswordAuthentication yes` 修改成 `PasswordAuthentication no`</span>\n<span class=\"token comment\"># :wq退出后</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">service</span> <span class=\"token function\">ssh</span> restart\n\n<span class=\"token comment\"># 服务器上</span>\n<span class=\"token comment\"># 确认一下，当前用户依然是deploy。如果不是，先sudo su deploy</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 更新</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> update\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> upgrade -y\n<span class=\"token function\">sudo</span> dpkg-reconfigure tzdata\n<span class=\"token comment\"># 选择时区 Time zone=&gt;Asia=&gt;Shanghai</span>\n\n<span class=\"token comment\"># 安装Rails所必须的各种常见依赖</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> -y build-essential git-core bison openssl libreadline6-dev <span class=\"token function\">curl</span> zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-0 libsqlite3-dev sqlite3  autoconf libc6-dev libpcre3-dev <span class=\"token function\">curl</span> libcurl4-nss-dev libxml2-dev libxslt-dev imagemagick nodejs libffi-dev\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> mysql-common mysql-client libmysqlclient-dev mysql-server\n<span class=\"token comment\"># 安装过程中，会让你输入密码。自己记好了哦！</span>\n\n<span class=\"token comment\"># 新建一个数据库，其中deployment是你数据库的名字，可根据需求自行修改</span>\nmysql -u root -p\nCREATE DATABASE datebase CHARACTER SET utf8mb4<span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\"># 退出 mysql console</span>\n<span class=\"token builtin class-name\">exit</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n<span class=\"token function\">sudo</span> apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7\n\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> -y apt-transport-https ca-certificates\n\n<span class=\"token comment\"># 添加 APT 仓库地址</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">sh</span> -c <span class=\"token string\">'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main &gt; /etc/apt/sources.list.d/passenger.list'</span>\n\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> update\n\n<span class=\"token comment\"># 安装 Passenger + Nginx</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">apt-get</span> <span class=\"token function\">install</span> -y nginx-extras passenger\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># Mac 本地</span>\n<span class=\"token function\">cat</span> ~/.ssh/id_rsa.pub\n<span class=\"token comment\"># 会出现一段文字，复制下来，粘贴到下面`公钥内容`中，选择`永久有效`。</span>\n</code></pre>",
      "<pre class=\"language-rb\"><code>group <span class=\"token symbol\">:development</span> <span class=\"token keyword\">do</span>\n  <span class=\"token comment\"># ...</span>\n\n  <span class=\"token comment\"># 其中`capistrano-rails`包含了以下三个插件。</span>\n  <span class=\"token comment\"># gem 'capistrano/bundler'</span>\n  <span class=\"token comment\"># gem 'capistrano/rails/assets'</span>\n  <span class=\"token comment\"># gem 'capistrano/rails/migrations'</span>\n  <span class=\"token comment\"># 你也可以分别一个个加进去，但是何必呢？这些基本都是`rails`部署必须的。</span>\n  <span class=\"token comment\"># 直接用`gem 'capistrano-rails'`这一个就好了。</span>\n  gem <span class=\"token string\">'capistrano-rails'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'~&gt;1.4'</span>\n\n  <span class=\"token comment\"># 对`passenger`与`rvm`的支持</span>\n  gem <span class=\"token string\">'capistrano-passenger'</span><span class=\"token punctuation\">,</span><span class=\"token string\">'~&gt; 0.2.0'</span>\n  gem <span class=\"token string\">'capistrano-rvm'</span><span class=\"token punctuation\">,</span><span class=\"token string\">'~&gt; 0.1.2'</span>\n<span class=\"token keyword\">end</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\">#确认命令行当前的路径，在刚才新建的项目中</span>\n<span class=\"token function\">git</span> <span class=\"token function\">add</span> <span class=\"token builtin class-name\">.</span>\n<span class=\"token function\">git</span> commit -m <span class=\"token string\">\"初次提交\"</span>\n<span class=\"token comment\"># 将下面的地址换成自己刚复制的</span>\n<span class=\"token function\">git</span> remote <span class=\"token function\">add</span> origin git@github.com:yl1994/blog.git\n<span class=\"token function\">git</span> push -u origin master\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># Mac本地运行</span>\ncap <span class=\"token function\">install</span>\n</code></pre>",
      "<pre class=\"language-rb\"><code><span class=\"token comment\"># 加上这行</span>\n<span class=\"token keyword\">require</span> <span class=\"token string\">\"capistrano/rails\"</span>\n\n<span class=\"token comment\"># 去掉这两行前面的`#`号 </span>\n<span class=\"token keyword\">require</span> <span class=\"token string\">\"capistrano/rvm\"</span>\n<span class=\"token keyword\">require</span> <span class=\"token string\">\"capistrano/passenger\"</span>\n其他配置可保持默认。\n</code></pre>",
      "<pre class=\"language-rb\"><code><span class=\"token comment\"># 最顶上加这行，注意是「`」号而不是单引号「'」</span>\n<span class=\"token comment\"># 如果你对ssh-add有兴趣，你可以去读这一篇。https://ihower.tw/blog/archives/7837</span>\n`ssh<span class=\"token operator\">-</span>add`\n\n<span class=\"token comment\"># 项目名称</span>\nset <span class=\"token symbol\">:application</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"deployment\"</span>\n\n<span class=\"token comment\"># git仓库地址</span>\nset <span class=\"token symbol\">:repo_url</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"git@git.coding.net:aaronryuu/deployment.git\"</span>\n\n<span class=\"token comment\"># 需要部署到服务器的位置</span>\nset <span class=\"token symbol\">:deploy_to</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"/home/deploy/deployment\"</span>\n\n<span class=\"token comment\"># 去掉注释，并加上 \"config/master.key\"</span>\nappend <span class=\"token symbol\">:linked_files</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"config/database.yml\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"config/master.key\"</span>\n\n<span class=\"token comment\"># 去掉注释</span>\nappend <span class=\"token symbol\">:linked_dirs</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'log'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'tmp/pids'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'tmp/cache'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'tmp/sockets'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'public/system'</span>\n注意了：我这里是 <span class=\"token number\">5.2</span>的部署，这个版本开始，config<span class=\"token operator\">/</span>secrets<span class=\"token punctuation\">.</span>yml变成了config<span class=\"token operator\">/</span>master<span class=\"token punctuation\">.</span>key。所以，如果你的项目<span class=\"token constant\">Rails</span>版本低于<span class=\"token number\">5.2</span>，那这里应该是\nappend <span class=\"token symbol\">:linked_files</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'config/database.yml'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'config/master.key'</span>\n如果这里不正确处理，后面部署可能会碰到这个错误！\n<span class=\"token constant\">ArgumentError</span><span class=\"token punctuation\">:</span> <span class=\"token constant\">Missing</span> `secret_key_base` <span class=\"token keyword\">for</span> <span class=\"token string\">'production'</span> environment<span class=\"token punctuation\">,</span> set this string with ` credentials<span class=\"token symbol\">:edit</span>\n</code></pre>",
      "<pre class=\"language-rb\"><code><span class=\"token comment\"># 改成你自己的ip</span>\nserver <span class=\"token string\">\"114.67.72.94\"</span><span class=\"token punctuation\">,</span> user<span class=\"token punctuation\">:</span> <span class=\"token string\">\"deploy\"</span><span class=\"token punctuation\">,</span> roles<span class=\"token punctuation\">:</span> <span class=\"token string\">%w{app db web}</span><span class=\"token punctuation\">,</span> my_property<span class=\"token punctuation\">:</span> <span class=\"token symbol\">:my_value</span>\n\nset <span class=\"token symbol\">:ssh_options</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  keys<span class=\"token punctuation\">:</span> <span class=\"token string\">%w(~/.ssh/id_rsa)</span><span class=\"token punctuation\">,</span>\n  forward_agent<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span><span class=\"token punctuation\">,</span>\n  auth_methods<span class=\"token punctuation\">:</span> <span class=\"token string\">%w(publickey)</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># Mac 本地执行</span>\ncap production deploy:check\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n\n<span class=\"token builtin class-name\">cd</span> ~/blog/shared/config\n<span class=\"token function\">vim</span> database.yml\n</code></pre>",
      "<pre class=\"language-rb\"><code>production<span class=\"token punctuation\">:</span>\n  adapter<span class=\"token punctuation\">:</span> mysql2\n  pool<span class=\"token punctuation\">:</span> <span class=\"token number\">25</span>\n  encoding<span class=\"token punctuation\">:</span> utf8mb4\n  database<span class=\"token punctuation\">:</span> blog\n  host<span class=\"token punctuation\">:</span> localhost\n  username<span class=\"token punctuation\">:</span> root\n  password<span class=\"token punctuation\">:</span> 数据库密码\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">vim</span> master.key\n<span class=\"token comment\">#  5 srcrets.yml 换成了master,key</span>\n然后将自己本地项目config/master.key 或 congif/srcrets.yml中的内容，复制进去。\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># Mac 本地执行</span>\ncap production deploy:check\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># Mac 本地</span>\ncap production deploy\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 服务器上</span>\n<span class=\"token function\">sudo</span> <span class=\"token function\">vim</span> /etc/nginx/nginx.conf\n<span class=\"token comment\"># 在此文件最顶部加上</span>\n<span class=\"token function\">env</span> <span class=\"token environment constant\">PATH</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">#去掉这一行的注释</span>\ninclude /etc/nginx/passenger.conf<span class=\"token punctuation\">;</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> <span class=\"token function\">vim</span> /etc/nginx/sites-enabled/blog.conf\n</code></pre>",
      "<pre class=\"language-json\"><code>server <span class=\"token punctuation\">{</span>\n  listen <span class=\"token number\">4000</span>;\n\n  # 如果你有域名，并做好了域名解析，直接填域名。\n  server_name <span class=\"token number\">49.67</span>.<span class=\"token number\">188.126</span>; \n\n  root /home/deploy/blog/current/public;\n\n  passenger_enabled on;\n\n  passenger_min_instances <span class=\"token number\">1</span>;\n\n  location ~ ^/assets/ <span class=\"token punctuation\">{</span>\n    expires <span class=\"token number\">1</span>y;\n    add_header Cache-Control public;\n    add_header ETag <span class=\"token string\">\"\"</span>;\n    break;\n   <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token function\">sudo</span> <span class=\"token function\">service</span> nginx restart\n</code></pre>"
  ],
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