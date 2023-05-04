# Remind-Me-To-Stand-Program
**Docs Language Version**: [中文版](/docs/README_CN.md)|[英文版](/docs/README_EN.md)
> This is a Node.js-based sitting reminder program that sends desktop notifications to remind users to stand up and move around after sitting for 1 hour, preventing health hazards caused by prolonged sitting.

# Installation
Clone the code to your local machine:
```bash
git clone https://github.com/your-username/Remind-Me-To-Stand-Program.git
```
Navigate to the project directory and install dependencies:
```bash
cd Remind-Me-To-Stand-Program
npm install
```

# Usage
Navigate to the project directory in the terminal and enter the following command to start the program:
```bash
node index.js
```
The program will output the countdown information in the terminal and send desktop notifications to remind users to stand up and move around every 1 hour. You can click the button in the notification to turn off the reminder.
# Configuration
The end time in the program is set by default to the current time plus 1 hour and can be modified as needed. To modify the end time, follow these steps:
```js
const endtime = new Date().getTime() + 1 * 60 * 60 * 1000;
```
In the above code, 1 represents the time length, 60 represents the time unit (minutes or hours), and 1000 represents the number of milliseconds in the time unit. For example, if you want to set the end time to 30 minutes from now, you can modify the above code to:
```js
const endtime = new Date().getTime() + 30 * 60 * 1000;
```
The desktop notification reminder in the program is set by default to "Remind Me To Stand" and "You have been sitting for 1 hour, please stand up and move around!" and can be modified as needed. To modify the notification content, follow these steps:
```js
const reminder = () => {
    notifier.notify({
        title: 'Remind Me To Stand',
        message: 'You have been sitting for 1 hour, please stand up and move around!',
        icon: path.resolve(__dirname, "./icons/28c5c4ce7757a7c26c4a43b1ecf4933804801976.jpg"),
        sound: true,
        function(error, response, metadata) {
            console.log(response, metadata);
        }
    })
};
```
In the above code, title indicates the title of the notification, and message indicates the content of the notification. You can modify title to your preferred title and message to your desired reminder content.

# Notes
This program is based on Node.js and requires Node.js environment to run. If you do not have Node.js installed, please install Node.js environment first.

This program uses the third-party module node-notifier to implement desktop notification function. You need to install the module before running the program. To install, enter the following command:
```bash
npm install node-notifier
```
This program uses the image file in the program root directory as the icon of the desktop notification by default. If you want to use other icons, please put the image file in the program root directory and modify the path of the image file in the code.

This program outputs countdown information in the terminal. If you want to output countdown information in other ways (such as desktop widgets), you can modify the code as needed.