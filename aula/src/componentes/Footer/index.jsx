// src\componentes\Footer\index.jsx
import './style.css';

function Footer() {
    return (
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} Minha Empresa.</p>
            <p>CNPJ: 12.345.678/0001-90</p>
            <p>Todos direitos reservados.</p>
        </footer>
    );
}

export default Footer;