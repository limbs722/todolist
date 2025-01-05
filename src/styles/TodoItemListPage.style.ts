import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Title = styled.div`
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 72px;
`;

const ListWrapper = styled.div`
    display: flex;
    background-color: #ffffff;
    width: 737px;
    height: 484px;
    flex-direction: column;
    gap: 4px;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-self: center;
    justify-content: center;
`;

const ButtonStyle = styled.button<{ isActive: boolean }>`
    background-color: ${(props) => (props.isActive ? "#EBF4FF" : "#ffffff")};
    width: 108px;
    height: 40px;
    border-radius: 12px;
    border: 0px;
    color: ${(props) => (props.isActive ? "#2182F3" : "#b9b9b9")};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

export { Container, Title, ListWrapper, ButtonWrapper, ButtonStyle };
