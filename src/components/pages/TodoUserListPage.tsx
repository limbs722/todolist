"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "../../recoil/state";

const Container = styled.div``;

interface Props {}

const TodoUserListPage = ({}: Props) => {
    const todoList = useRecoilValue(todoListState);

    return (
        <Container>
            <div>To Do List</div>
            <TodoItemCreator />
            {todoList.map((item) => {
                return (
                    <div key={item.id}>
                        <input type="checkbox" checked={item.isComplete} />
                        <span>{item.text}</span>
                    </div>
                );
            })}
        </Container>
    );
};

export default TodoUserListPage;
