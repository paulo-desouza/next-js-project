import styled from "styled-components";


export const Container = styled.div`
    background: black;
    display: flex;
    width: 400px;
    flex-direction: column;
    padding: 48px 24px 48px 24px;
    gap: 24px;
    align-items: center; 
    font-size: 14px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 10px 10px 45px black;
    margin: 5px 20px 10px 20px;
    
`;

export const Img = styled.div`

    
    width:150px;
    height: 150px;
    border-radius: 120px;
    background: url('/img/paulo_head.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    
    

`
export const Box = styled.div`

    display: flex;
    border-top: 2px solid white;
    width: 100%;
    justify-content: space-between;
    padding: 3px;
    font-size: large;
    
`

export const BoxHolder = styled.div`
    flex-direction: column;
    display:flex;
    width:100%;
    


`