const text = document.getElementById('text');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener('click', function() {
    if (text.style.display === 'block') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }
});