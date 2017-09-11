function sendForm() {
    var form = document.getElementById('contact-form');

    var instance = axios.create({
        baseURL: 'http://erichie.com/firesauce/api/',
        timeout: 1000,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    
    instance.get('/mail.php', {
        params: {
            to: form.elements.to.value,
            name: form.elements.name.value,
            from: form.elements.from.value,
            body: form.elements.body.value
        }
    })
    .then(function(response) {
        console.log('response', response);
        document.getElementById('success-message').style.visibility = 'visible';
    })
    .catch(function(error) {
        console.log('error', error);
    });
}