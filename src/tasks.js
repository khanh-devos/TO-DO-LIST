import createNewElement from './newElement.js';

class Task {
  constructor() {
    this.tasks = [
      {
        index: 0,
        description: 'wash the dishes',
        completed: false,
      },
      {
        index: 1,
        description: 'complete To Do list project',
        completed: false,
      },
    ];
  }

  buildForm1 = () => {
    const form = createNewElement({
      type: 'form',
      id: 'form1',
      className: 'mt-4 mb-4 bg-info d-flex flex-direction-row',
      content: `
        <input id="form1-input1" name="newTask" type="text"   placeholder="Add to your list..."
        />

        <span id="form1-span" class="material-symbols-outlined">
        subdirectory_arrow_left
        </span>
        
      `,
      events: {
        submit: this.addNew,
      },
    });

    document.querySelector('main').appendChild(form);
  }

  buildForm2 = () => {
    const form = createNewElement({
      type: 'form',
      id: 'form2',
      className: 'bor-check',
      content: `
        <input id="form2-btn" type="button" value="Clear all completed"
        />
      `,
      events: {
        submit: this.addNew,
      },
    });

    document.querySelector('main').appendChild(form);
  }

  showTasks = () => {
    const todosList = this.tasks.map((e) => `
      <li class="form2-ul-li">
        <input class="form2-input" 
        type="checkbox" name="check-${e.index}"/>

        <input class="form2-input" type="text" placeholder="${e.description}" disabled/>
        
        <span class="material-symbols-outlined">more_vert</span>
        
      </li>
      <hr>
    `);

    const ul = createNewElement({
      type: 'ul',
      id: 'ul-tasks',
      className: 'form2-ul',
      content: todosList.join(' '),
      events: {},
    });

    document.querySelector('#form2').insertAdjacentElement('afterbegin', ul);
  }

  addNew = (e) => {
    e.preventDefault();
    const newTask = {
      index: this.tasks[this.tasks.length - 1].index + 1,
      description: e.target.elements[0].value,
      completed: false,
    };
    this.tasks.push(newTask);
    this.insertNew(newTask);
  }

  insertNew = (newTask) => {
    const newLi = createNewElement({
      type: 'li',
      id: '',
      className: 'form2-ul-li',
      content: `
        <input class="form2-input" 
        type="checkbox" name="check-${newTask.index}"/>

        <input class="form2-input" type="text" placeholder="${newTask.description}" disabled/>
        
        
        <span class="material-symbols-outlined">more_vert</span>
        
      `,
    });

    const hr = document.createElement('hr');
    document.querySelector('#ul-tasks').appendChild(newLi);
    document.querySelector('#ul-tasks').appendChild(hr);
  }
}

export default Task;
