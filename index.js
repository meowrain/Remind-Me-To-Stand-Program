const notifier = require('node-notifier');
const path = require('path');

function countdown(endtime) {
    let prevHours;
    let prevMinutes;
    let prevSeconds;

    const timer = setInterval(function () {
        let now = new Date().getTime();
        let diff = endtime - now;
        let hours = Math.floor(diff / (1000 * 60 * 60));
        let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(diff % (1000 * 60) / 1000);

        // 只有时间变化时才输出
        if (prevHours != hours || prevMinutes != minutes || prevSeconds != seconds) {
            console.clear();
            console.log("蕾姆久坐提醒程序正在运行.....")
            console.log("距离下次久坐提醒还有： ")
            console.log(`${hours} 小时 : ${minutes} 分钟 : ${seconds} 秒`);
        }

        prevHours = hours;
        prevMinutes = minutes;
        prevSeconds = seconds;

        if (diff <= 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            clearInterval(timer);
            console.log('提醒程序启动');
            setTimeout(() => {
                sayHello();
            }, 1000);
        }
    }, 1000);
}
const sayHello = () => {
    const endtime = new Date().getTime() + 1 * 60 * 60 * 1000;
    countdown(endtime);
}
const reminder = () => {
    notifier.notify({
        title: '蕾姆久坐提醒',
        message: '主人，您已经坐了1个小时,请起来活动活动吧!',
        icon: path.resolve(__dirname, "./icons/28c5c4ce7757a7c26c4a43b1ecf4933804801976.jpg"),
        sound: true,
        function(error, response, metadata) {
            console.log(response, metadata);
        }
    })
};
sayHello();
setInterval(reminder, 1 * 60 * 60 * 1000);
