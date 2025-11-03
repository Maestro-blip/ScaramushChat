const net = require('net');
const { program } = require('commander');
const readline = require('readline');

program
    .option('-h, --host [address]', 'адреса сервера', 'localhost') 
    .option('-p, --port [port]', 'порт сервера', '8000')
    .option('--cn, --clientname [name]', 'ім`я', 'undefined_Client'); 

program.parse();
const options = program.opts();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

PORT = options.port;
HOST = options.host;
cliename = options.clientname;
rl.setPrompt(`${cliename} > `);

const client = net.createConnection({port: PORT, host: HOST}, () =>{

    console.log('---Я підключився до сервера!---\n');
    rl.prompt();
    data_imput = rl.on('line', (line) => {

            
            messageToSend = `${cliename}: ${line}`
                client.write(messageToSend)      
                rl.prompt(); 
    });

});

client.on('data', (data) => {

    const message = data.toString().trim();
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    console.log(message)
    rl.prompt();
});

client.on('end', () => {
    console.log('\nВідключено від сервера.');
    process.exit();
});