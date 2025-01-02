"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/state";
import type { TodoItemType } from "../../recoil/state";

interface Props {
    isComplete: boolean;
    text: string;
}

const TodoItem = ({ item }: { item: Props }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const removeItemAtIndex = (
        arr: Array<TodoItemType>,
        index: number
    ): Array<any> => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input type="checkbox" />
            <span>{item.text}</span>
            <button onClick={deleteItem}>X</button>
        </div>
    );
};

export default TodoItem;
