import { useState } from "react";
import plus from "../assets/plus.svg";
import { taskCreated } from "../features/todos";
import { useDispatch } from "react-redux";

export default function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
        dispatch(taskCreated(text))
        setText("");
    }
  }
  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  }

  return (
    <form className="w-full mt-10 relative" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="new todo"
        className="block w-full indent-4 h-14 rounded-2xl shadow-small"
      />
      <button className="bg-[#00897E] block p-1 rounded-full w-fit absolute top-3.5 right-3">
        <img src={plus} alt="" className="w-5 h-5" />
      </button>
    </form>
  );
}
