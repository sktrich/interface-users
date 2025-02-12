import "./styles.css";
import Node from "/nó-js-48.png";
import ViteLogo from "/vite.svg"
import NextLogo from "/nextjs-48.png"
import VercelLogo from "/vercel_favicon.svg"
import MongoDb from "/mongo-db-48.png"

function Header(){

    return(
        <>
            <header>
                <div className="img-nav">
                    <img src={Node} alt="React" />    
                    <img src={ViteLogo} alt="Vite" />
                    <img src={NextLogo}alt="Next" />
                    <img src={VercelLogo} alt="Vercel" /> 
                    <img src={MongoDb} alt="MongoDb" />                    

                </div>            
            </header>        
        </>
    )
}

export default Header