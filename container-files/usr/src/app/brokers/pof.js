//hack to make web page loadable, see https://github.com/electron/electron/issues/7081
window.Buffer = null;

var ipcRenderer = require("electron").ipcRenderer;

ipcRenderer.on('message', function(event, arg){
    console.log('Message received',arg.type);
});


setInterval(function(){
    var rate = jQuery('#asset_EURUSD').find('.marketPrice').text();
    ipcRenderer.sendToHost('message',{type:'balance',balance:rate});
},20000);


console.log('Script Porter loaded');