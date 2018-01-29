export default (scope) => `
<div class="card ${scope.done ? 'done' : ''}">
  <div class="card-body">
    ${scope.text ? `<h4 class="card-title">${scope.text}</h4>` : ''}
    ${scope.description ? `<p class="card-text">${scope.description}</p>` : ''}
    ${(scope.actions || []).map((act) => {
      const label = act.label || act;
      const classes = (act.classNames || []).concat(`btn-${label.toLowerCase().replace(' ', '-')}`).join(' ');
      return `<a href="#" data-id="${scope.id}" class="btn btn-primary ${classes}">${label}</a>`;
    }).join(' ')}
  </div>
</div>`;
