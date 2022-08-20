import styled from "styled-components";
import imgBackground from './img/background.png'


const DIVHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 488px;
    margin: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    overflow: hidden;
    background: url(${(props)=>props.imgUrl}) no-repeat; 
    background-size: 100%;
    flex-wrap: wrap;
    /* background: rgba(255, 0, 0, 0.233); */




    /* Blocos Header */
    .blocos_header{
        position: relative;
        height: 100px;
    }



    .blocos_header:nth-child(1){
        width: 30%;
        /* background: purple; */
    }
    .blocos_header:nth-child(1) img{
        width: 120%;
        /* background: purple; */
    }

















    .blocos_header:nth-child(2){
        width: 40%;
        /* background: red; */
    }










    .blocos_header:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        /* background: white; */
    }
    .blocos_header:nth-child(3) div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        margin-right: -20px;
        border-radius: 30px;
        background: rgba(31, 0, 0, 0.322);
    }
    .blocos_header:nth-child(3) .icon_menu{

    }









    /* CONTEUDO INFERIOR */
    .blocos_header:nth-child(4){
        width: 100%;
        height: calc(100% - 100px);
    }
    .blocos_header:nth-child(4) p{
        width: 60%;
        margin-top: 90px;
        margin-left: 5%;
        /* background: paleturquoise; */
        font-size: 2.6rem;
        font-weight: 700;
        text-align: left;
        color: white;
        text-shadow: -0px 4px 3px rgba(31, 0, 0, 0.637);
        text-transform: uppercase;
    }













    /* Coments
        &:nth-child(2) */
`








export default DIVHeader