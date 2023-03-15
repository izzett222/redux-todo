import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import tick from "../assets/tick.svg";
import { useState } from "react";
import { taskDone, taskDeleted, taskUpdated } from "../features/todos";
import { useDispatch } from "react-redux";
export default function Todo({ done, text, id }) {
  const [updatedText, setUpdatedText] = useState(text);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (updatedText.trim() !== text) {
      dispatch(taskUpdated({ id, text: updatedText }));
    }
    setUpdate(false);
  };

  return (
    <div className="w-full flex items-center pb-5 pt-4  border-b border-b-gray-400">
      <input
        type="checkbox"
        name="done"
        checked={done}
        onChange={() => dispatch(taskDone(id))}
      />
      {!update ? (
        <span
          className={`text-lg text-gray-700 font-semibold ml-6 ${
            done && "line-through"
          }`}
        >
          {text}
        </span>
      ) : (
        <input
          className={`text-lg text-gray-700 block font-semibold w-[60%] mx-3 border rounded-sm p-1 pb-1.5 indent-[10px] shadow-inner`}
          value={updatedText}
          onChange={(event) => setUpdatedText(event.target.value)}
        />
      )}

      <div className="flex gap-2 ml-auto">
        <div>
          {!update && (
            <button
              className="block p-2 bg-green-100 rounded-full"
              onClick={() => setUpdate(true)}
            >
              <img src={edit} alt="" className="w-5 h-5" />
            </button>
          )}
          {update && (
            <button
              className="block p-2 bg-green-100 rounded-full"
              onClick={handleSave}
            >
              <img src={tick} alt="" className="w-5 h-5" />
            </button>
          )}
        </div>
        <button
          onClick={() => dispatch(taskDeleted(id))}
          className="block p-2 bg-red-100 rounded-full"
        >
          <img src={trash} alt="" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
