import styled from 'styled-components';


export const MainTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

export const DivFlex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const DivTotalFlex = styled(DivFlex)`
    width: 70%;
    margin: 0 auto;
`;

export const CardGeneral = styled.div`
    background-color: #DF382C;
    border-radius: 8px;
    width: 200px;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.125);
    text-align: center;
    margin: 8px;
`;


export const Header = styled.div`
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px;
`;

export const Body = styled.div`
    padding: 15px;
    font-size: 16px;
`;

export const SubTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
`;
