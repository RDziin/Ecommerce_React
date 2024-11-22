import Store from "./img/Store.svg";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="main">
      <div id="bg"></div>
      <div id="Logo">
        <img src={Store} alt="Logo" />
      </div>

      <div class ="navbar">
      <ul>
        <li>
          <a href="">Início</a>
        </li>
        <li>
          <a href="">Departamentos</a>
        </li>
        <li>
          <a href="">Fale Conosco</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
      </ul>
      </div>
      

      <div id="Icons-Box">
        <div class="icons">
          <a href="#"><FontAwesomeIcon id="iconssvg" icon={faUser} /></a>
          <a href = "#"><h3>Meu Perfil</h3></a>
        </div>

        <div class="icons">
          <a href = "#"><FontAwesomeIcon id="iconssvg" icon={faCartShopping}/></a>
          <a href="#"><h3>Carrinho</h3></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
