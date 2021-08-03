import {config} from 'dotenv';
config();
import {Client, Message, User} from 'discord.js'
import {  prefix  } from "./config.json";
const client: Client = new Client();

client.on('ready', ()=>{

});
//We created one  Databse
client.on('message',async (mess :Message)=>{ //we can set type data
    if(mess.content.startsWith(`${prefix}help`)){
        mess.reply('Welcome to Your Life,  Copyright © YourLife   ®San Pedro Fabian Ezequiel');
        mess.channel.send('You can use yourLife:message.\n,yourLife:kick user name To kick.\n Welcome to Your Life.');
    }
    //---------------------------
    if(mess.content.startsWith(`${prefix}message`)){
        mess.channel.send('🚀 Toto manco, desintala el lol');
    }
    if(mess.content.startsWith(`${prefix}clear`)){
        try{
            await mess.channel.lastMessage?.delete();
        }catch(error){
            console.error();
        }
       
    }
  //----------------------------- 
    if(mess.member?.hasPermission(['KICK_MEMBERS'])){//Check permiss
        if(mess.content.startsWith(`${prefix}:kick`)){  //Check if i want to kick a user
            mess.reply('Welcome to Your Life,  Copyright © YourLife   ®San Pedro Fabian Ezequiel');// prexis + @<idUser> 
            const member= mess.mentions.members?.first();
            if(member){ //!Null       
                const kickMember = await member.kick();   // member.kick().then.cath();
                console.log(kickMember.user.username);
                return mess.channel.send(`🚀 Toto manco, ${kickMember.user.username} has been kicked`);   
            }   
        }
    }else{
        if(mess.mentions.members?.first()?.user.username != null)
             return mess.reply(`🚀 Toto manco, ${mess.mentions.members?.first()?.user.username} has not been kicked, you need permissions to do this.`);    
    } 
}) //when we ear one message

client.login(process.env.DISCORD_TOKEN);