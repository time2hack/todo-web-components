/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"@webcomponents/webcomponentsjs/custom-elements-es5-adapter\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app_component__ = __webpack_require__(1);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_css__);




const tasks = {};
class Counter extends HTMLElement {
  connectedCallback() {
    this.dom = this.attachShadow({ mode: 'open' });
    // console.log(css);
    this.dom.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_2__app_html__["a" /* default */])({ title: 'ToDo App', css: '' });
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_html__ = __webpack_require__(3);


class Form extends HTMLElement {
  connectedCallback() {

  }
  render() {
    this.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__form_html__["a" /* default */])();
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((scope) => `
<div class="card todo-form">
  <div class="card-body">
    <form ref="form">
      <p>
      <small>Task</small>
      <input class="form-control form-control-lg" name="task"
        type="text" placeholder="Task" ref="text" />
      </p>
      <p>
      <small>Description</small>
      <input class="form-control form-control-md" name="description"
        type="text" placeholder="Task Description" ref="description" />
      </p>
      <button type="submit" class="btn btn-primary btn-outline">Add</button>
    </form>
  </div>
</div>
`);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_html__ = __webpack_require__(7);



class List extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__todos_html__["a" /* default */])();
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_html__ = __webpack_require__(6);


class Task extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = template();
  }
  render(task) {
    this.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__todo_html__["a" /* default */])(task);
  }
}

customElements.define('todo-task', Task);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((scope) => `
<div class="card">
  <div class="card-body">
    <h4 class="card-title">${scope.text || ''}</h4>
    ${scope.description ? `<p class="card-text">${scope.description}</p>` : ''}
    ${scope.actions ? scope.action.map(act => `<a href="#" class="btn btn-primary">${act.label}</a>`).join('') : ''}
    
  </div>
</div>`);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((scope) => `<h2>Tasks:</h2>
<ul ref="todos" class="list-group"></ul>`);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((scope) => `
<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
<style>${scope.css}</style>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container">
    <h1 class="navbar-brand">${scope.title}</h1>
  </div>
</nav>
<main class="container">
  <todo-form ref="form"></todo-form>
  <hr/>
  <todo-list ref="list"></todo-list>
</main>
`);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| :host {\n|   display: block;\n| }");

/***/ })
/******/ ]);