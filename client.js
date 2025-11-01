const net = require('net')

const PORT = 8000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, (dataClient) =>{

console.log('Я підключився до сервера!');

data_imput = process.stdin.on('data', (data) => {

        filterdata=data.toString().trim()
            client.write(filterdata)       
});


client.on('data', (data) => {

    filterdata = data.toString()
    console.log(filterdata)
});

 
});

