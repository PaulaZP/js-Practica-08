const tareas = ['Práctica de Javascript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los trastos'];

const posicion = ['tarea1','tarea2','tarea3','tarea4'];

const lista = document.getElementById('lista-tareas');
const lista_d = document.createElement('ul');
lista.appendChild(lista_d);

for(let i = 0; i < tareas.length; i++){
    const lista_li = document.createElement('li');
    lista_d.appendChild(lista_li);

    const input = document.createElement('input');
    lista_li.appendChild(input);

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', posicion[i]);

    const label = document.createElement('label');
    lista_li.appendChild(label);

    label.setAttribute('for', posicion[i]);
    label.innerHTML = tareas[i];
}
