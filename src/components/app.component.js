import './form.component';
import './todos.component';
import template from './app.html';
import './app.css';
const tasks = {};
class Counter extends HTMLElement {
  connectedCallback() {
    this.dom = this.attachShadow({ mode: 'open' });
    // console.log(css);
    this.dom.innerHTML = template({ title: 'ToDo App', css: '' });
    console.log(this.dom)
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

        },
        done: (id) => {

        }
      }
    }
    this.refs.form.render();
  }

  addTask(task) {
    const createdOn = new Date();
    const id = `task-${+createdOn}`;
    tasks[id] = Object.assign({}, task, { id, createdOn });
    this.refs.list.render(tasks);
  }
}

customElements.define('todo-application', Counter);
