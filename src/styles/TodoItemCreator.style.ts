import styled from "@emotion/styled";

const InputWrapper = styled.div`
    width: 720px;
    border-radius: 24px;
    padding: 32px;
    background-color: #e5e5e5;
    border: 0px;
    input {
        font-size: 20px;
        font-weight: 400;
        border: 0px;
        background-color: #e5e5e5;
        outline: none;
        ::placeholder {
            color: #b9b9b9;
        }
    }
`;

export { InputWrapper };
