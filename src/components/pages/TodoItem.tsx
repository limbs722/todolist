"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/state";
import type { TodoItemType } from "../../recoil/state";

interface Props {
    id: number;
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

    function replaceItemAtIndex(
        arr: Array<TodoItemType>,
        index: number,
        newValue: TodoItemType
    ): Array<TodoItemType> {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input
                checked={item.isComplete}
                onChange={toggleItemCompletion}
                type="checkbox"
            />
            <span>{item.text}</span>
            <button onClick={deleteItem}>X</button>
        </div>
    );
};

export default TodoItem;
