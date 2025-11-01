const net = require('net');
const { program } = require('commander');

program
    .option('-h, --host [address]', 'адреса сервера', 'localhost') 
    .option('-p, --port [port]', 'порт сервера', '8000')
    .option('--sn, --servername [name]', 'ім`я', 'undefined_Server'); 

program.parse();
const options = program.opts();


PORT = options.port;
HOST = options.host;
servname = options.servername;

const server = net.createServer( (socket) => {

    console.log("Хтось під\'єднався")
    
    socket.on('data',(data) => {
        filterdata=data.toString().trim()
            console.log(filterdata)
    });
    
    socket.on('close',(closeconect) => {
        console.log("З\'єднання втрачено")
    })
    
   dataImput = process.stdin.on('data', (data) => {
        filterdata=data.toString().trim()
        const messageToSend = `${servname}: ${filterdata}`;
            socket.write(messageToSend)
    });
   
});


server.listen(PORT, HOST, () =>{
    console.log(`Сервер успішно запущено на ${PORT}:${HOST}`)
});
