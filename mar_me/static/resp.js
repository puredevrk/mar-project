document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');
    const rightNav = document.querySelector('.rightNav');

    burger.addEventListener('click', () => {
        rightNav.classList.toggle('v-class');
        navList.classList.toggle('v-class');
    });

    const facultyBox = document.querySelector('#faculty-box');
    facultyBox.addEventListener('submit', (e) => {
        e.preventDefault();
        const students = document.querySelector('#students').value;
        const message = document.querySelector('#message').value;
        fetch('/notify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ students, message })
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            alert(message);
        })
        .catch(error => {
            console.error(error);
            alert('Error sending notification');
        });
    });
});
