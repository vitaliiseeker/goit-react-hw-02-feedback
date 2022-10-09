import styled from 'styled-components';

export const Button = styled.button` 
    display: inline-block;

    padding: 8px 12px;
    width: 120px;
    
    font-size: 18px;
    font-weight: 600;
    
    color: #000080;
    background-color: #cefdfd;

    border: 1px solid #ff80c0;
    border-radius: 4px;

    box-shadow: 0px 2px 4px #808080;
    cursor: pointer;
    outline: none;

&:not(:last-child) {
    margin-right: 10px;
}

&:hover {
    color: #ffffff;
    background-color: #ff0080;
}
`;

export const List = styled.ul`
display: flex;
gap: 15px;
`