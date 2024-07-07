import { useEffect, useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../melecule/TodoItem";
import { initialzeTodoList, localSet, userInput } from "../../utils/util";
import { INFO } from "../../constants/infoMessage";

// class: 시작하자마자(){ localStorage }
// fc: useEffect

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);

  // 1. key값 -> 상수로 빼기
  // 2. localStorage 함수를 util로 함수화

  const addItem = () => {
    const newData = { id: id, contents: userInput(INFO.TODO) };

    setTodoitems((prev) => {
      const updateData = [...prev, newData];
      localSet(updateData);
      return updateData; // return [...prev, newData];
    });

    setId((prev) => prev + 1);

    // obj -> string
    // localStorage.setItem(String(id), JSON.stringify(newData));
  };

  const deleteItem = (id: number) => {
    setTodoitems((prev) => {
      const updateData = prev.filter((value) => value.id !== id);
      localSet(updateData);
      return updateData; // return prev.filter((value) => value.id !== id);
    });
  };

  useEffect(() => {
    // initialzeTodoList()
    initialzeTodoList({ setTodoitems, setId });
  }, []);

  return (
    <div className="flex flex-col items-center max-w-lg">
      <div className="bg-white p-16 shadow-lg w-full">
        {todoitems.map((v) => (
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(v.id)} />
        ))}
      </div>
      <div className="relative bottom-8">
        <AddButton handleClick={addItem} />
      </div>
    </div>
  );
};

export default Body;
