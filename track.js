fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
	ip=data.ip;
	agent= navigator.userAgent;
	msg="IP "+ip+"\nUser agent "+agent+"\nDate "+new Date().toLocaleString();
	console.log(msg);
	url='https://api.telegram.org/bot7116418976:AAHHMdxfAshkZPzu5wwTLf7xerSl64BXiXg/sendMessage?chat_id=634841328&text='+encodeURI(msg);
	fetch(url).then(console.log("Done"));

    })
    .catch(error => {
        console.log('Error:', error);
    });

