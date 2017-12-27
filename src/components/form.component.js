import template from './form.html';
import css from './form.css';

class Form extends HTMLElement {
  connectedCallback() {

  }
  render() {
    this.innerHTML = template({css});
    
    this.refs = {
      text: this.querySelector('[ref="text"]'),
      form: this.querySelector('[ref="form"]'),
      description: this.querySelector('[ref="description"]'),
    }
    this.refs.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.props.onSubmit({
        text: this.refs.text.value,
        description: this.refs.description.value
      });
      this.refs.form.reset();
    });
  }
}

customElements.define('todo-form', Form);
