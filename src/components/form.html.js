export default (scope) => `
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
`;
