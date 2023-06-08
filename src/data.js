export const setData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getData = () => (JSON.parse(localStorage.getItem('tasks')) || []);

export const deleteArrOfIndex = (arrOfIndex) => {
  const tasks = getData().filter((e) => !arrOfIndex.includes(e.index.toString()))
    .map((e, i) => ({ ...e, index: i + 1 }));
  setData(tasks);
};

export const editTask = (e) => {
  const tasks = getData();
  const editedTask = tasks.filter((item) => item.index === Number(e.target.name))[0];

  if (e.target.type === 'checkbox') {
    editedTask.completed = e.target.checked;
  }

  if (e.target.type === 'text') {
    editedTask.description = e.target.value;
  }

  tasks[editedTask.index - 1] = editedTask;
  setData(tasks);
};