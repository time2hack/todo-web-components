export default (scope) => `
<div class="card">
  <div class="card-body">
    ${scope.text ? `<h4 class="card-title">${scope.text}</h4>` : ''}
    ${scope.description ? `<p class="card-text">${scope.description}</p>` : ''}
    ${scope.actions ? scope.action.map(act => `<a href="#" class="btn btn-primary">${act.label}</a>`).join('') : ''}
  </div>
</div>`;
