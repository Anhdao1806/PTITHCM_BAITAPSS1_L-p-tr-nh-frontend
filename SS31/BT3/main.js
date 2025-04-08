const greenBox = document.getElementById('green');
const redBox = document.getElementById('red');
const purpleBox = document.getElementById('purple');
const body = document.body;
greenBox.addEventListener('click', function() {
    body.style.backgroundColor = 'green';
});
redBox.addEventListener('click', function() {
    body.style.backgroundColor = 'red';
});
purpleBox.addEventListener('click', function() {
    body.style.backgroundColor = 'purple';
});