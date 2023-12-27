export const Task = (props) => {
  return (
    <div>
      <p style={{ color: props.completed ? "green" : "red" }}>{props.name}</p>
      <button
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          props.completedTask(props.id);
        }}
      >
        {props.completed ? "Completed" : "Not Completed"}
      </button>
    </div>
  );
};
