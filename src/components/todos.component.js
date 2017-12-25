import './todo.component';
import template from './todos.html';

class List extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template();
    this.list = this.querySelector('[ref="todos"]');
  }

  createAndAppend(task) {
    if (this.querySelector(`[ref=${task.id}]`)) {
      return;
    }

    const taskEl = document.createElement('todo-task');
    taskEl.setAttribute('ref', task.id);
    taskEl.setAttribute('id', task.id);
    this.list.appendChild(taskEl);
    taskEl.render(task);
  }
  render(tasks = {}) {
    Object.keys(tasks).forEach(key => {
      const task = tasks[key]
      this.createAndAppend(task);
    });
  }
}

customElements.define('todo-list', List);
