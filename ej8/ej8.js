const frame = document.getElementById('frame');
const btnCreate = document.getElementById('btnCreate');

btnCreate.addEventListener('click', function() {
    const box = document.createElement('div');
    box.className = 'box';
    frame.appendChild(box);
});