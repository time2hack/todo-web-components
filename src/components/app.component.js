import './form.component';
import './todos.component';
import template from './app.html';
import css from './app.css';
const actions = [ 'Done', 'Not Done',
  { label: 'Remove', classNames: ['float-right'] }
];
const tasks = {
  'comp-1': { done: true, id: 'comp-1', actions,
    text: 'Intro to WebComponents',
    description: `<a href="https://time2hack.com/2017/12/introduction-to-webcomponents-and-shadowdom/"
      target="_blank">https://time2hack.com/2017/12/introduction-to-webcomponents-and-shadowdom/</a>`,
  },
  'copm-2': { done: false, id: 'comp-2', actions,
    text: 'ToDo App with WebComponents',
    description: `<a href="https://time2hack.com/2018/01/todo-app-with-webcomponents-shadowdom/"
      target="_blank">https://time2hack.com/2018/01/todo-app-with-webcomponents-shadowdom/</a>`,
    },
};

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
    this.refs.list.render();
  }

  addTask(task) {
    console.log(tasks);
    const createdOn = new Date();
    const id = `task-${+createdOn}`;
    tasks[id] = Object.assign({}, task, { id, createdOn, done: false, actions});
    this.refs.list.render(tasks);
  }
}

customElements.define('todo-application', Counter);
