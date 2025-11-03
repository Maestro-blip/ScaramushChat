const net = require('net');
const { program } = require('commander');
const readline = require('readline');

program
    .option('-h, --host [address]', 'адреса сервера', 'localhost') 
    .option('-p, --port [port]', 'порт сервера', '8000')
    .option('--sn, --servername [name]', 'ім`я', 'undefined_Server'); 

program.parse();
const options = program.opts();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

PORT = options.port;
HOST = options.host;
servname = options.servername;
rl.setPrompt(`${servname} > `);

const server = net.createServer( (socket) => {

    console.log("---Хтось під\'єднався---\n")
    rl.prompt();
    socket.on('data',(data) => {
        filterdata=data.toString().trim();
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
        console.log(filterdata);
        rl.prompt();
    });

    socket.on('close',(closeconect) => {
        console.log("\n---З\'єднання втрачено---\n")
    })
    
   dataImput = rl.on('line', (line) => {
       
        filterdata=line.toString().trim()
        const messageToSend = `${servname}: ${filterdata}`;
            socket.write(messageToSend)
            rl.prompt();
    });
   
});


server.listen(PORT, HOST, () =>{
    console.log(`\n---Сервер успішно запущено на ${PORT}:${HOST}---\n`)
});
