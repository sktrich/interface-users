import "./styles.css";
import ReactLogo from "/eact-80.png";
import ViteLogo from "/vite.svg"
import NextLogo from "/nextjs-48.png"
import VercelLogo from "/vercel_favicon.svg"

function Footer(){

    return(
        <>
            <footer className="foo"> 
                <div className="img-foo">
                    <img src={ReactLogo} alt="React" /> 
                    <img src={ViteLogo} alt="Vite" />
                    <img src={NextLogo}alt="Next" />
                    <img src={VercelLogo} alt="Vercel" />
                    
                </div>
                <p>Desenvolvido por <a href="https://wa.me/5511961544855?text=Olá,%20tenho%20interesse%20em%20saber%20mais" target="_blank"><span>n4k</span></a> </p>
            </footer>
        </>
    )

}

export default Footer;