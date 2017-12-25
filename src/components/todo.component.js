import template from './todo.html';

class Task extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = template();
  }
  render(task) {
    this.innerHTML = template(task);
  }
}

customElements.define('todo-task', Task);
