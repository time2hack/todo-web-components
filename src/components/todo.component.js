import template from './todo.html';

class Task extends HTMLElement {
  connectedCallback() {
    this.refs = {};
  }
  render(task) {
    this.task = task;
    this.innerHTML = template(task);
    this.refs.element = this.querySelector('.card');
  }
  markDone() {
    this.refs.element.classList.add('done');
  }
  markNotDone() {
    this.refs.element.classList.remove('done');
  }
}

customElements.define('todo-task', Task);
