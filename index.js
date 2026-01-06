let task = '';
let completedTaskCount = 0;

const showTask = task => task ? console.log(task) : console.log('Задача отсутствует');
showTask(task);

const setTaskDescription = taskDescription => {
    if (task) {
        console.log('Не могу добавить задачу, завершите или удалите предыдущую');
    } else {
        return task = taskDescription;
    }
}
setTaskDescription('Посмотрет курс на Ютубе');
console.log(task);


const completeTask = (someTask) => {
    if (!someTask) {
        console.log('Задача отсутствует');
    } else {
        task = '';
        completedTaskCount += 1;
        console.log(task, completedTaskCount);
    }
}
completeTask(task);
console.log(task);


const deleteTask = () => {
    if (!task) {
        console.log('Задача отсутствует');
    } else {
        task = '';
    }
}
deleteTask();
console.log(task);
