import styled from 'styled-components';

export const H3 = styled.h3`
    font-size: 12px;
    margin: 3px 0; 
`;

export const CardCountry = styled.div`
    background-color: #17a2b8;
    border-radius: 8px;
    width: 200px;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin: 8px;
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 10px 10px 0 rgba(0,0,.1,.1);
    }
`;
