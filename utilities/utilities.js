const https = require('https');

function cronJob (){
    setInterval(() => {
        https.get('https://divine-touch-service-server.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

module.exports = {
    cronJob
}
