// segundo\exer/cicio\src\components\Footer\index.jsx//
import './style.css';
 
function Footer (){
    return(
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} Armazenamento de Dados. </p>
            <p>CNPJ: 12.345.682/0001-90</p>
            <p>Todos direitos reservados.</p>

        </footer>
    )

}

export default Footer;