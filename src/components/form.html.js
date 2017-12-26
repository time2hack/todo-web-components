export default (scope) => `
<style>${scope.css}</style>
<div class="card todo-form">
  <div class="card-body">
    <form ref="form">
      <input class="form-control form-control-lg" name="task"
        type="text" placeholder="Task" ref="text" />
      <textarea class="form-control form-control-md" name="description"
        type="text" placeholder="Task Description/Notes" ref="description" ></textarea>
      <button type="submit" class="btn btn-block btn-outline-dark" ref="btn-submit">Add</button>
    </form>
  </div>
</div>
`;
