import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="w-full mt-5">
      {todos.map((el) => (
        <Todo
          key={el.id}
          {...el}
        />
      ))}
    </div>
  );
}
