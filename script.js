function addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('priorityInput');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Por favor escribe una tarea.");
        return;
    }

    // Crear el elemento de la tarea
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${priority.value}`;
    
    taskCard.innerHTML = `
        <p>${taskText}</p>
        <small>Prioridad: ${priority.value.toUpperCase()}</small>
        <div class="task-actions">
            <button class="btn-sm" onclick="moveTask(this, 'inprogress-list')">➔ Proceso</button>
            <button class="btn-sm" onclick="moveTask(this, 'done-list')">✓ Hecho</button>
            <button class="btn-sm" style="background:red" onclick="this.parentElement.parentElement.remove()">X</button>
        </div>
    `;

    // Agregar a la columna "Pendientes"
    document.getElementById('todo-list').appendChild(taskCard);

    // Limpiar input
    input.value = "";
}

function moveTask(button, targetId) {
    const card = button.parentElement.parentElement;
    const targetList = document.getElementById(targetId);
    
    // Si ya está en la columna destino, no hace nada o lo regresa
    targetList.appendChild(card);
}