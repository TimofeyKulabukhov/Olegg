var socket = io();
var userName = faker.internet.userName();

socket.on('preload', function(messages){
    messages.forEach(function(message){
        var node = document.createElement("LI");
        var textnode = document.createTextNode(message.author + ': ' + message.content);
        node.appendChild(textnode);
        document.getElementById("messages").appendChild(node);
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
        node.classList.add('animated-message');
    });
});

socket.on('message', function(msg){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(userName + ': ' + msg);
    node.appendChild(textnode);
    document.getElementById("messages").appendChild(node);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    node.classList.add('animated-message');
});

socket.on('connect', function(){
    socket.send('Пользователь ' + userName + ' подключился к чату!');
});

socket.on('disconnect', function(){
    socket.send('Пользователь ' + userName + ' отключился от чата!');
});

function sendMessage(){
    var msg = document.getElementById('message_input').value;
    socket.send(msg);
    document.getElementById('message_input').value = '';
}
