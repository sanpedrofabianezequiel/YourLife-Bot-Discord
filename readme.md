## Your Life 
## Created for San Pedro Fabian Ezequiel

#Instructions
1 - npm init -y  =>created pack.json
2 - Created file "BotYourLife.ts"
3 - Created file "config.json"  => Prefijos para los comandos
4 - Install Discords JS "npm install discord.js" => Crea el package-lock.json
5 - Inside "botYourLife.ts" write "import { Clients } from 'discord.js'"
6 - Create server inside discord
7 - Created user in "https://discord.com/developers/applications" and new application
8 - Go to option "Bot" and click "add bot"
9 - Created Token 
10 - variable.login('token');
11 - Create "enviroment"   npm i dotenv   => or npm i dotenv -D  (that is developer)  => that created  
##Inside package.json
"dependencies": {
    "discord.js": "^12.5.3",
    "dotenv": "^10.0.0"
  }
12 - Created file ".env"
13 - Created variable = token
14 - UP File => i write Import  and define variables enviroment =>  import {config} 'dotenv';
15 - config();
16 - Install transpilator Typscript => npm i typescript =>  we can see
"dependencies": {
    "discord.js": "^12.5.3",
    "dotenv": "^10.0.0",
    "typescript": "^4.3.4"
  }
17 - Execute Typescript and Output Files (.js) => npx tsc --init (execute or created "tsconfig.json")
18 - Change "target"  "es6
19 - Change "rootDir" = "./src"
20 - Change "outDir"  = "./deploy"
22 - We need install " npm i @types/node"
21 - execute "npx tsc"
22 - Go to page developer click "bot" and selected options and save changes.
23 - Click Oauth2 click "bot"  and selected options and save and copy URL
24 - Go to URL and Set bot with servidor, where we would want use.
25 - Execute "npx tsc " when we need recompiled codigo
26 - Execute application "node deploy/botYourLife.js

--------------------
27 - Update performance for execute npx tsc . We need install
  "npm i nodemon"
28 - Configure package.json
"scripts": {
    "build":"tsc",
    "start":"node deploy/botYourLife.js",  
    "yourLife":"nodemon -e ts --exec  \"npm run build && npm start\""  => -e is extension
  },
29- Set  "resolveJsonModule": true in tsconfig.json pra utilizarlo en el bot.ts => poder importarlo
30- emoticones https://emojipedia.org/rocket/