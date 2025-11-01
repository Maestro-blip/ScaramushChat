const net = require('net')

PORT = 8000;
HOST = 'localhost';


const server = net.createServer( (socket) => {

    console.log("Хтось під\'єднався")
    
    socket.on('data',(data) => {
        filterdata=data.toString().trim()
            console.log(filterdata)
    });

    dataImput = process.stdin.on('data', (data) => {
        filterdata=data.toString().trim()
            socket.write(filterdata)
    });
});


server.listen(PORT, HOST, () =>{
    console.log(`Сервер успішно запущено на ${PORT}:${HOST}`)
});
