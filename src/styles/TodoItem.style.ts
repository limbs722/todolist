import styled from "@emotion/styled";

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    background-color: #ffffff;
    margin-bottom: 6px;
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const HiddenCheckbox = styled.input`
    display: none;
`;

const Icon = styled.div<{ checked: boolean }>`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
    color: #2182f3;

    ${({ checked }) => checked && `transform: scale(1.1);`}
`;

const ItemTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const CloseIconWrapper = styled.div`
    cursor: pointer;
`;

export {
    ItemWrapper,
    CheckboxWrapper,
    HiddenCheckbox,
    Icon,
    ItemTitleWrapper,
    CloseIconWrapper,
};
