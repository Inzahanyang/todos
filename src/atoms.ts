import { atom, selector } from "recoil";

export let defaultCategories: string[] = ["TODO", "DOING", "DONE"];

// export enum Categories {
//   "TODO",
//   "DOING",
//   "DONE",
// }

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom<string>({
  key: "category",
  default: defaultCategories[0],
});

export const categoriesState = atom<string[]>({
  key: "categoriesState",
  default: JSON.parse(
    localStorage.getItem("categories") ?? JSON.stringify(defaultCategories)
  ),
});

export const toDoState = atom<IToDo[]>({
  key: "toDos",
  default: JSON.parse(localStorage.getItem("toDos") ?? "[]"),
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
