"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/state";
import {
    ItemWrapper,
    CheckboxWrapper,
    HiddenCheckbox,
    Icon,
    ItemTitleWrapper,
    CloseIconWrapper,
} from "../../styles/TodoItem.style";
import CheckIcon from "../../assets/icons/Check.svg";
import UncheckedIcon from "../../assets/icons/unchecked.svg";
import CloseIcon from "../../assets/icons/close.svg";
import type { TodoItemType } from "../../recoil/state";

interface TodoItemProps {
    id: number;
    isComplete: boolean;
    text: string;
}

const TodoItem = ({ item }: { item: TodoItemProps }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const removeItemAtIndex = (
        arr: Array<TodoItemType>,
        index: number
    ): Array<TodoItemType> => {
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
        <ItemWrapper>
            <ItemTitleWrapper>
                <CheckboxWrapper>
                    <HiddenCheckbox
                        checked={item.isComplete}
                        onChange={toggleItemCompletion}
                        type="checkbox"
                    />
                    <Icon checked={item.isComplete}>
                        {item.isComplete ? (
                            <CheckIcon width={24} height={24} alt="check" />
                        ) : (
                            <UncheckedIcon
                                width={24}
                                height={24}
                                alt="uncheck"
                            />
                        )}
                    </Icon>
                </CheckboxWrapper>
                <span>{item.text}</span>
            </ItemTitleWrapper>
            <CloseIconWrapper>
                <CloseIcon onClick={deleteItem} width={20} height={20} />
            </CloseIconWrapper>
        </ItemWrapper>
    );
};

export default TodoItem;
