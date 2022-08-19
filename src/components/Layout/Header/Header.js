// Components
import React from "react"
import { BiMenuAltRight } from "react-icons/bi";




// CSS
import DIVHeader from "./Css.Header"


// IMG
import imgBackground from './img/background.png'
import logo from './img/logo.png'






export default function Header(){
    return(
        <DIVHeader>
            {/* Bloco 1 */}
            <div style={{zIndex: '100'}}>

                <img src={logo} alt="Charme do Serrado Flats" />

            </div>

            {/* Bloco 2 */}
            <div></div>

            {/* Bloco 3 */}
            <div style={{zIndex: '100'}}>
                <div>
                    <BiMenuAltRight size={28} color={"white"}/>
                </div>
            </div>

            {/* Background */}
            <div style={{zIndex: '1'}}>
                <div style={{zIndex: '3'}}>
                    <p>VENHA<br/>CONHECER<br/>NOSSOS FLATS!</p>

                </div>
                <img src={imgBackground} alt="Background" style={{zIndex: '2'}}/>
            </div>
        </DIVHeader>
    ) 
}