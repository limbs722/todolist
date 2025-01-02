import { atom, selector } from "recoil";

export type TodoItemType = {
    id: number;
    text: string;
    isComplete: boolean;
};

export const todoListState = atom<TodoItemType[]>({
    key: "todoListState",
    default: [],
});

export const todoListFilterState = atom<string>({
    key: "todoListFilterState",
    default: "All",
});

export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case "Done":
                return list.filter((item) => item.isComplete);
            case "ToDo":
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});
