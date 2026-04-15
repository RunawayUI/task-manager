function convertDate(date) {
    return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(',', '')
}

let tasks = [
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

const setTask = () => {
    const taskTitle = prompt('Название задачи?');
    const taskDescription = prompt('Описание задачи?');
    const task = {
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
        createdDate: new Date(),
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
            Создано: ${convertDate(createdDate)}
            ${completedDate ? `Выполнено: ${convertDate(completedDate)}` : ''}
            \n`)
    });
}
showTasks();

const completeTask = (index) => {
    if (!tasks[index]) {
        return console.log('Задача отсутствует');
    }
    // const task = tasks[index];

    // task.isCompleted = true;
    // task.completedDate = convertDate(new Date());
    // completedTaskCount += 1;

    // console.log(`Задача ${task.title} успешно завершена`);

    tasks = tasks.map((task, i) => {
        if (i === index) {
            return {
                ...task,
                isCompleted: true,
                completedDate: convertDate(new Date()),
            }
        }
        return task;
    });
    completedTaskCount += 1;
    console.log(`Задача ${tasks[index].title} успешно завершена`);
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


function getTaskDescriptions() {
    return tasks.map(task => task.description);
}
console.log('task descriptions: ', getTaskDescriptions());


const startDate = new Date('2026-04-14');
const endDate = new Date('2026-04-16');

function getTasksByDateRange(startDate, endDate, isCompleted = false) {
    let dateRangeArray = [];
    if (isCompleted === true) {
        console.log('isCompleted = true');
        dateRangeArray = tasks.filter(task => task.isCompleted === true).filter(task => (task.createdDate > startDate && task.createdDate < endDate) || (task.completedDate > startDate && task.completedDate < endDate))
    } else {
        dateRangeArray = tasks.filter(task => task.createdDate > startDate && task.createdDate < endDate)
    }

    if (dateRangeArray.length > 0) { return dateRangeArray } else { return 'Нет подходящих задач' }
}
console.log('tasks by date range: ', getTasksByDateRange(startDate, endDate, true));

function getLongTasks() {
    return tasks.filter(task => (task.title.length > 10 || task.description.length > 10));
}
console.log('long tasks: ', getLongTasks());

function clearShortTasks() {
    return tasks = tasks.filter(task => task.title.length >= 5);
}
console.log(clearShortTasks());

function rename(index, newTitle) {
    tasks[index].title = newTitle;
    return tasks;
}
console.log(rename(1, 'сделать тренировку на бицепс'));
