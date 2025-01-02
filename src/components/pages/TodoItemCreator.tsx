"use client";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/state";

let id = 0;
function getId() {
    return id++;
}

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);
    const todoList = useRecoilValue(todoListState);

    const addItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (e.key === "Enter" && inputValue.length > 0) {
            const todo = todoList.filter((item) => item.isComplete);
            if (todo.length < 10) {
                setTodoList((oldTodoList) => [
                    ...oldTodoList,
                    {
                        id: getId(),
                        text: inputValue,
                        isComplete: false,
                    },
                ]);
            }
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length <= 20) {
            setInputValue(value);
        }
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setInputValue("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                placeholder="할 일을 입력해주세요."
                onChange={(e) => onChange(e)}
                onKeyDown={addItem}
                onKeyUp={onKeyUp}
            />
        </div>
    );
};

export default TodoItemCreator;
