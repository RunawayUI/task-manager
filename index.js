const tasks = [
    {
        title: "Сделать практику",
        description: "контекст this",
        isCompleted: false,
        createdDate: new Date(),
        completedDate: null
    }
];
const task = {
    title: "Купить продукты",
    description: "Молоко, хлеб, яйца",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};
let completedTaskCount = 0;

const setTask = task => {
    return tasks.push(task);
}
setTask(task);

function showTasks() {
    tasks.forEach(task => {
        console.log(
            `Задача: ${task.title}, 
            Описание: ${task.description}, 
            Статус: ${task.isCompleted}, 
            Создано: ${task.createdDate}
            ${task.completedDate ? 'Выполнено: ' + task.completedDate : ''}
            \n`)
    });
}
showTasks();

// const setTaskDescription = taskDescription => {
//     if (task) {
//         console.log('Не могу добавить задачу, завершите или удалите предыдущую');
//     } else {
//         return task = taskDescription;
//     }
// }
// setTaskDescription('Посмотрет курс на Ютубе');
// console.log(task);


const completeTask = (index) => {
    if (!tasks[index]) {
        console.log('Задача отсутствует');
    } else {
        tasks[index].isCompleted = true;
        tasks[index].completedDate = new Date();
        completedTaskCount += 1;
    }
}
completeTask(1);
showTasks();


const deleteTask = (index) => {
    if (!tasks[index]) {
        console.log('Задача отсутствует');
    } else if (tasks[index].isCompleted === false) {
        const areYouSure = prompt('Еще не выполнено, удалить? (да/нет)').toLowerCase();
        if (areYouSure === 'да') {
            tasks.splice(index, 1);
            return tasks;
        } else {
            return tasks;
        }
    } else {
        tasks.splice(index, 1);
        return tasks;
    }
}
deleteTask(0);

const clearTasks = () => {
    tasks.length = 0;
}
clearTasks();
console.log(tasks);
