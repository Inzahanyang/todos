import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDos from "./ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories, setCategories] = useRecoilState(categoriesState);

  const onClick = (category: string) => {
    setCategory(category);
  };

  const addCategory = () => {
    const newCategory = prompt("New category name", "");

    if (newCategory) {
      setCategories([...categories, newCategory]);
      setCategory(newCategory);
    }
  };

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <div>
        {categories.map((cate) => (
          <div key={cate}>
            <button onClick={() => onClick(cate)} disabled={cate === category}>
              {cate}
            </button>
          </div>
        ))}
        <div>
          <button onClick={addCategory}>
            <div>new cate</div>
          </button>
        </div>
      </div>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDos key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
