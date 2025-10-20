const frame = document.getElementById('frame');
const btnCreate = document.getElementById('btnCreate');
const counter = document.getElementById('counter');
let boxesCreated = 0;
const maxBoxes = 5;

btnCreate.addEventListener('click', () => {
    if (boxesCreated < maxBoxes) {
        const box = document.createElement('div');
        box.className = 'box';
        frame.appendChild(box);
        boxesCreated++;
        counter.textContent = `Cajas creadas: ${boxesCreated}/${maxBoxes}`;

        if (boxesCreated === maxBoxes) {
            btnCreate.disabled = true;
        }
    }
});