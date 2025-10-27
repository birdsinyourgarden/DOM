const form = document.getElementById('form');
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const tbody = document.getElementById('tbody');
let currentId = 1;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = currentId;
    
    const td1 = document.createElement('td');
    td1.textContent = field1.value;

    const td2 = document.createElement('td');
    td2.textContent = field2.value;

    tr.append(tdId, td1, td2);
    tbody.appendChild(tr);

    currentId++;
    form.reset();
})