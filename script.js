
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = 'Terima kasih, ' + name + '! Pesan Anda telah dikirim.';
        formMessage.style.color = '#2c5364';
        formMessage.style.opacity = 0;
        formMessage.style.transition = 'opacity 0.6s';
        setTimeout(() => {
            formMessage.style.opacity = 1;
        }, 100);
        this.reset();
    } else {
        formMessage.textContent = 'Mohon lengkapi semua data.';
        formMessage.style.color = 'red';
        formMessage.style.opacity = 0;
        formMessage.style.transition = 'opacity 0.6s';
        setTimeout(() => {
            formMessage.style.opacity = 1;
        }, 100);
    }
});