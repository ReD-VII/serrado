import styled from "styled-components";



const DIVHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw !important;
    height: 70px;
    margin: 0;
    background: black;

    div{
        height: 100%;
    }


    div:nth-child(1){
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(1) img{
        width: 150%;
        margin-top: 5px;
        /* background: red; */
    }


    div:nth-child(2){
        width: 40%;
        background: violet;
    }


    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        /* background: red; */
    }
    div:nth-child(3) div{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        width: 35px;
        height: 35px;
        margin: auto;
        margin-right: 10    px;
        border-radius: 20px;

        background: rgba(0, 0, 0, 0.473);
    }


    div:nth-child(4){

        position: absolute;
        
        width: 100%;
        height: 488px;
        overflow: hidden;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
    }
    div:nth-child(4) img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
    div:nth-child(4) div{
        position: absolute;
        width: 100%;
        height: 488px;
        /* background: rgba(255, 0, 0, 0.301); */
        
    }
    div:nth-child(4) div p{
        /* background: black; */
        margin-top: -50px;
        margin-left: -60px;

        text-align: left;
        color: white;
        font-size: 2em;
        font-weight: 700;
        letter-spacing: .1em;
        line-height: 1.2em;
        text-shadow: -2px 5px 5px #141414;
        
    }
    /* Coments
        &:nth-child(2) */
`








export default DIVHeader