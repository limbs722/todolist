"use client";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../recoil/state";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";

const Container = styled.div``;

interface Props {}

const TodoUserListPage = ({}: Props) => {
    const todoList = useRecoilValue(filteredTodoListState);
    const [filter, setFilter] = useState("All");

    const filteredTodoList = todoList.filter((item) => {
        if (filter === "Done") return item.isComplete;
        if (filter === "ToDo") return !item.isComplete;
        return true;
    });

    return (
        <Container>
            <div>To Do List</div>
            <TodoItemCreator />
            <div>
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("ToDo")}>To Do</button>
                <button onClick={() => setFilter("Done")}>Done</button>
            </div>
            <span>총 {filteredTodoList.length} 개</span>
            {filteredTodoList.map((item) => {
                return (
                    <div key={item.id}>
                        <TodoItem item={item} />
                    </div>
                );
            })}
        </Container>
    );
};

export default TodoUserListPage;
