var ipc           = require("electron").ipcRenderer;
var SocketCluster = require('socketcluster-client');

var options = {
    port: 8000,
    hostname: 'ec2-52-87-192-177.compute-1.amazonaws.com'
};

var socket = SocketCluster.connect(options);

socket.on('connect', function () {
    console.log('SOCKET CONNECTED');
});

var wv = document.getElementsByClassName('webview');
var webview = wv[0];
var id  = webview.getAttribute('id');

webview.addEventListener('ipc-message', function(event) {
        console.log('Received event message. Balance:',event.args[0].balance);
        var balance = ipc.sendSync('sync-messages',{type:'balance',balance:event.args[0].balance});
        socket.emit('result',{type:'balance',balance:balance});
    });

webview.addEventListener("did-finish-load", function() {
    console.log('Finish load for', id);

    webview.openDevTools();

    webview.send('message', {type: 'balance'});
    
});