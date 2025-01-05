import React from "react";
import "@testing-library/jest-dom"; // Jest DOM matchers 추가
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "../../recoil/state";

describe("TodoItemCreator Component", () => {
    test("입력값 변경 시 반영되는지 확인", () => {
        render(
            <RecoilRoot>
                <TodoItemCreator />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText("할 일을 입력해주세요.");
        fireEvent.change(input, { target: { value: "새로운 할 일" } });

        expect(input).toHaveValue("새로운 할 일");
    });

    test("Enter 키 입력 시 새로운 항목이 추가되는지 확인", () => {
        render(
            <RecoilRoot>
                <TodoItemCreator />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText("할 일을 입력해주세요.");

        fireEvent.change(input, { target: { value: "새로운 할 일" } });
        fireEvent.keyUp(input, { key: "Enter", code: "Enter" }); // keyDown -> keyUp으로 수정

        expect(input).toHaveValue(""); // 입력창이 비워지는지 확인
    });

    test("입력값이 20자를 초과할 경우 제한되는지 확인", () => {
        render(
            <RecoilRoot>
                <TodoItemCreator />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText("할 일을 입력해주세요.");

        fireEvent.change(input, {
            target: { value: "1234567890123456789012345" },
        }); // 25자 입력
        expect(input).toHaveValue("12345678901234567890"); // 20자로 제한됨
    });

    test("할 일 목록이 10개 이상일 경우 추가되지 않는지 확인", () => {
        render(
            <RecoilRoot
                initializeState={({ set }) => {
                    set(
                        todoListState,
                        Array(10).fill({
                            id: 1,
                            text: "완료된 할 일",
                            isComplete: true,
                        })
                    );
                }}
            >
                <TodoItemCreator />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText("할 일을 입력해주세요.");

        fireEvent.change(input, { target: { value: "새로운 할 일" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(input).toHaveValue("새로운 할 일"); // 추가되지 않으므로 입력값 유지
    });

    test("입력창이 존재하는지 확인", () => {
        render(
            <RecoilRoot>
                <TodoItemCreator />
            </RecoilRoot>
        );

        expect(
            screen.getByPlaceholderText("할 일을 입력해주세요.")
        ).toBeInTheDocument();
    });
});
