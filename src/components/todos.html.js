export default (scope) => `
<style>${scope.css}</style>
<h2>Tasks:</h2>
<ul ref="todos" class="list-group"></ul>`;
