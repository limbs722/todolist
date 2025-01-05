"use client";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../recoil/state";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import {
    Container,
    Title,
    ListWrapper,
    ButtonWrapper,
    ButtonStyle,
} from "../../styles/TodoItemListPage.style";

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
            <Title>To Do List</Title>
            <TodoItemCreator />
            <ListWrapper>
                <ButtonWrapper>
                    <ButtonStyle
                        isActive={filter === "All"}
                        onClick={() => setFilter("All")}
                    >
                        All
                    </ButtonStyle>
                    <ButtonStyle
                        isActive={filter === "ToDo"}
                        onClick={() => setFilter("ToDo")}
                    >
                        To Do
                    </ButtonStyle>
                    <ButtonStyle
                        isActive={filter === "Done"}
                        onClick={() => setFilter("Done")}
                    >
                        Done
                    </ButtonStyle>
                </ButtonWrapper>
                <span>총 {filteredTodoList.length} 개</span>
                {filteredTodoList.map((item) => {
                    return (
                        <div key={item.id}>
                            <TodoItem item={item} />
                        </div>
                    );
                })}
            </ListWrapper>
        </Container>
    );
};

export default TodoUserListPage;
