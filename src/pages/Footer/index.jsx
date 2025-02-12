import "./styles.css";
import Node from "/nó-js-48.png";
import ViteLogo from "/vite.svg"
import NextLogo from "/nextjs-48.png"
import VercelLogo from "/vercel_favicon.svg"
import MongoDb from "/mongo-db-48.png"


function Footer(){

    return(
        <>
            <footer className="foo"> 
                <div className="img-foo">
                    <a href="https://nodejs.org/" target="_blank">
                        <img src={Node} alt="Node Js" />   
                    </a> 
                    <a href="https://vite.dev/" target="_blank">
                        <img src={ViteLogo} alt="Vite" />
                    </a>
                    <a href="https://nextjs.org/" target="_blank">
                        <img src={NextLogo} alt="Next Logo" />                    
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank">
                        <img src={MongoDb} alt="MongoDb" />                    
                    </a>

                </div>
                <p>Desenvolvido por <a href="https://wa.me/5511961544855?text=Olá,%20tenho%20interesse%20em%20saber%20mais" target="_blank"><span>n4k</span></a> </p>
            </footer>
        </>
    )

}

export default Footer;