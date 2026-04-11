function convertDate(date) {
    return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(',', '')
}

const tasks = [
    {
        title: "Сделать практику",
        description: "контекст this",
        isCompleted: false,
        createdDate: convertDate(new Date()),
        completedDate: null
    }
];
const task = {
    title: "Купить продукты",
    description: "Молоко, хлеб, яйца",
    isCompleted: false,
    createdDate: convertDate(new Date()),
    completedDate: null
};
let completedTaskCount = 0;

const setTask = () => {
    const taskTitle = prompt('Название задачи?');
    const taskDescription = prompt('Описание задачи?');
    const task = {
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
        createdDate: convertDate(new Date()),
        completedDate: null
    }
    return tasks.push(task);
}
setTask(task);

function showTasks() {
    tasks.forEach(task => {
        const { title, description, isCompleted, createdDate, completedDate } = task;
        console.log(
            `Задача: ${title},
            Описание: ${description},
            Статус: ${isCompleted},
            Создано: ${createdDate}
            ${completedDate ? `Выполнено: ${completedDate}` : ''}
            \n`)
    });
}
showTasks();

const completeTask = (index) => {
    if (!tasks[index]) {
        return console.log('Задача отсутствует');
    }
    const task = tasks[index];

    task.isCompleted = true;
    task.completedDate = convertDate(new Date());
    completedTaskCount += 1;

    console.log(`Задача ${task.title} успешно завершена`);

}
completeTask(1);
showTasks();


const deleteTask = (index) => {
    const task = tasks[index];

    if (!task) {
        return console.log('Задача отсутствует');
    }

    if (!task.isCompleted) {
        const areYouSure = prompt('Еще не выполнено, удалить? (да/нет)');

        if (areYouSure?.toLowerCase() !== 'да') return console.log('удаление отменено');

        tasks.splice(index, 1);
        console.log('удалено успешно');
        return tasks;
    }
}
deleteTask(0);

const clearTasks = () => {
    tasks.length = 0;
}
clearTasks();
console.log(tasks);
