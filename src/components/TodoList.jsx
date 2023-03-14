import Todo from "./Todo";
import { useSelector } from "react-redux";
import { taskDone, taskDeleted, taskUpdated } from "../features/todos";
import { useDispatch } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const createCompleteHandler = (id) => {
    return () => dispatch(taskDone(id));
  };
  const createDeleteHandler = (id) => {
    return () => dispatch(taskDeleted(id));
  };
  const createUpdateHandler = (id) => {
    return (text) => dispatch(taskUpdated({ id, text }));
  };

  return (
    <div className="w-full mt-5">
      {todos.map((el) => (
        <Todo
          key={el.id}
          remove={createDeleteHandler(el.id)}
          check={createCompleteHandler(el.id)}
          updateTask={createUpdateHandler(el.id)}
          done={el.done}
          text={el.text}
        />
      ))}
    </div>
  );
}
