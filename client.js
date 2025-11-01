const net = require('net');
const { program } = require('commander');

program
    .option('-h, --host [address]', 'адреса сервера', 'localhost') 
    .option('-p, --port [port]', 'порт сервера', '8000')
    .option('--sn, --servername [name]', 'ім`я', 'undefined_Client'); 

program.parse();
const options = program.opts();


PORT = options.port;
HOST = options.host;
servname = options.servername;

const client = net.createConnection({port: PORT, host: HOST}, () =>{

    console.log('Я підключився до сервера!');

    data_imput = process.stdin.on('data', (data) => {

            filterdata=data.toString().trim()
            messageToSend = `${servname}: ${filterdata}`
                client.write(messageToSend)       
    });

});

client.on('data', (data) => {

    filterdata = data.toString()
    console.log(filterdata)
});

client.on('end', () => {
    console.log('\nВідключено від сервера.');
    process.exit();
});