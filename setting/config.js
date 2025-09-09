/*

  -! Credits By Kevintech 
  Thanks to  great lonelysaam 
  https://wa.me/256742932677

*/

// setting/config.js
const fs = require('fs')

// ========= Setting Owner ========= //
global.owner = ["256742932677", "256755585369"];
global.ownername = "Kevin tech";
global.botname = "Vinic-Xmd";

// ========= Setting Channel ========= //
global.namasaluran = "KEVIN";
global.idsaluran = "120363398454335106@newsletter";
global.linksaluran = "";
global.SESSION_ID = ""; 

// ========= Setting Status ========= //
global.autostatus = true;
global.antispam = true;
global.autoread = false;
// setting/config.js - Add this to your config
global.anticall = "off", "decline", "block" 
global.antilink = true;
global.autoreact = false
global.antibug = true;
global.autobio = false;
global.chatbot = false;
global.autoTyping = false;
global.autorecording = false;
global.prefa = ['', '!', '.', ',', '🖕', '🦦'];

// ========= Anti-Delete Feature ========= //
global.antidelete = true; // Set to false to disable anti-delete feature

// ========= Other Global Settings ========= //
global.welcome = true; // welcome setting
global.adminevent = true; // admin event setting

// ========= Add modeStatus and versions ========= //
global.modeStatus = "Private"; // Added for connection notice
global.versions = "1.2.5"; // Added for connection notice

// ========= Setting WM ========= //
global.packname = 'Vinic';
global.author = 'Xmd';

global.gcount = {
    prem: 500,
    user: 15
};

global.limitCount = 10;

global.mess = {
    group: "*This is not a group*",
    admin: "*To use this feature first make Vinic-Xmd admin*",
    owner: "*Sorry bro😛, your not my owner*",
    premium: "*First become a premium user*",
    botadmin: "*Vinic-Xmd needs to be admin*",
    limited: "/Limit reached*"
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
