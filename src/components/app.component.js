import './form.component';
import './todos.component';
import template from './app.html';
import css from './app.css';
const tasks = {};
const actions = [ 'Done', 'Not Done',
  { label: 'Remove', classNames: ['float-right'] }
];

class Counter extends HTMLElement {
  connectedCallback() {
    this.dom = this.attachShadow({ mode: 'open' });
    this.dom.innerHTML = template({ title: 'ToDo App', css });
    this.refs = {
      form: this.dom.querySelector('todo-form'),
      list: this.dom.querySelector('todo-list'),
    }
    this.refs.form.props = {
      onSubmit: this.addTask.bind(this),
    }
    this.refs.list.props = {
      tasks,
      actions: {
        remove: (id) => {
          delete tasks[id];
        },
        done: (id) => {
          tasks[id].done = !tasks[id].done;
        }
      }
    }
    this.refs.form.render();
  }

  addTask(task) {
    const createdOn = new Date();
    const id = `task-${+createdOn}`;
    tasks[id] = Object.assign({}, task, { id, createdOn, done: false, actions});
    this.refs.list.render(tasks);
  }
}

customElements.define('todo-application', Counter);
