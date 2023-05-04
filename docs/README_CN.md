# Remind-Me-To-Stand-Program

这是一款基于 Node.js 的久坐提醒程序，可以在用户久坐 1 小时后发出桌面通知提醒用户起来活动，防止长时间久坐对健康造成的危害。

# 安装

克隆代码到本地：

```bash
git clone https://github.com/meowrain/Remind-Me-To-Stand-Program.git
```

进入项目目录并安装依赖：

```bash
cd Remind-Me-To-Stand-Program
npm install
```

# 使用

在终端中进入项目目录，输入以下命令启动程序：
node index.js
程序会在终端中输出倒计时信息，每隔 1 小时会发出桌面通知提醒用户起来活动，可以点击通知中的按钮关闭提醒。

# 配置

程序中的结束时间默认为当前时间加上 1 小时，可以根据需要进行修改。修改方式如下：

```js
const endtime = new Date().getTime() + 1 * 60 * 60 \* 1000;
```

> 其中，1 表示时间长度，60 表示时间单位（分钟或小时），1000 表示时间单位的毫秒数。比如，如果要将结束时间设置为 30 分钟后，可以将上述代码修改为：

```js
const endtime = new Date().getTime() + 30 * 60 * 1000;
```

程序中的桌面通知提醒内容默认为 "蕾姆久坐提醒" 和 "主人，您已经坐了 1 个小时,请起来活动活动吧!"，可以根据需要进行修改。修改方式如下：

```js
const reminder = () => {
  notifier.notify({
    title: "蕾姆久坐提醒",
    message: "主人，您已经坐了1个小时,请起来活动活动吧!",
    icon: path.resolve(
      __dirname,
      "./icons/28c5c4ce7757a7c26c4a43b1ecf4933804801976.jpg"
    ),
    sound: true,
    function(error, response, metadata) {
      console.log(response, metadata);
    },
  });
};
```

其中，title 表示通知的标题，message 表示通知的内容。可以将 title 修改为自己喜欢的标题，将 message 修改为自己需要的提醒内容。

# 注意事项

本程序基于 Node.js 开发，需要在电脑上安装 `Node.js` 环境才能运行。如果没有安装 Node.js，请先安装 Node.js 环境。

本程序使用了第三方模块 node-notifier 来实现桌面通知功能，需要在运行程序之前先安装该模块，安装方式如下：

```bash
npm install node-notifier
```

本程序默认使用了程序根目录下的图片文件作为桌面通知的图标，如果要使用其他图标，请将图片文件放到程序根目录下，并在代码中修改图片文件的路径。

本程序在终端中输出倒计时信息，如果希望在其他方式下输出倒计时信息（比如桌面小部件），可以根据需要进行修改。
