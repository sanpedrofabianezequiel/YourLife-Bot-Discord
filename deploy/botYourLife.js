"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
const client = new discord_js_1.Client();
client.on('ready', () => {
});
client.on('message', (mess) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    if (mess.content.startsWith(`${config_json_1.prefix}help`)) {
        mess.reply('Welcome to Your Life,  Copyright © YourLife   ®San Pedro Fabian Ezequiel');
        mess.channel.send('You can use yourLife:message.\n,yourLife:kick user name To kick.\n Welcome to Your Life.');
    }
    //---------------------------
    if (mess.content.startsWith(`${config_json_1.prefix}message`)) {
        mess.channel.send('🚀 Toto manco, desintala el lol');
    }
    if (mess.content.startsWith(`${config_json_1.prefix}clear`)) {
        try {
            yield ((_a = mess.channel.lastMessage) === null || _a === void 0 ? void 0 : _a.delete());
        }
        catch (error) {
            console.error();
        }
    }
    //----------------------------- 
    if ((_b = mess.member) === null || _b === void 0 ? void 0 : _b.hasPermission(['KICK_MEMBERS'])) { //Check permiss
        if (mess.content.startsWith(`${config_json_1.prefix}:kick`)) { //Check if i want to kick a user
            mess.reply('Welcome to Your Life,  Copyright © YourLife   ®San Pedro Fabian Ezequiel'); // prexis + @<idUser> 
            const member = (_c = mess.mentions.members) === null || _c === void 0 ? void 0 : _c.first();
            if (member) { //!Null       
                const kickMember = yield member.kick(); // member.kick().then.cath();
                console.log(kickMember.user.username);
                return mess.channel.send(`🚀 Toto manco, ${kickMember.user.username} has been kicked`);
            }
        }
    }
    else {
        if (((_e = (_d = mess.mentions.members) === null || _d === void 0 ? void 0 : _d.first()) === null || _e === void 0 ? void 0 : _e.user.username) != null)
            return mess.reply(`🚀 Toto manco, ${(_g = (_f = mess.mentions.members) === null || _f === void 0 ? void 0 : _f.first()) === null || _g === void 0 ? void 0 : _g.user.username} has not been kicked, you need permissions to do this.`);
    }
})); //when we ear one message
client.login(process.env.DISCORD_TOKEN);
