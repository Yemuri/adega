import {Link} from 'react-router-dom'
import { FiUser } from "react-icons/fi";
import {MdClose} from 'react-icons/md'
import { AiOutlineHome } from "react-icons/ai";
import Modal from "react-modal";
import { useState } from "react";
import "./header.css";
import glass from "../../images/glass.jpg";
import LoopVideo from '../loopVideo/loopVideo';

export default function NavHeader() {
  const [openedModal, setOpenedModal] = useState(false);

  function openModal() {
    setOpenedModal(true);
  
  }
  function closeModal() {
    setOpenedModal(false);
  }

  /*function isLogged(){
    Se estiver logado o simbolo da casinha aparece
    Se estiver deslogado o símbolo do
  }
  */

  return (
    <div  id="navbar">
      <div className="general-container-video">
        <LoopVideo />
      </div>
    <div className="general-container">
      <Link to='/adega' className="font-style">Notas & Uvas: Registros de Adega</Link>
      <input type="search" id="wine-search" placeholder="Pesquisar vinhos..." />
      <a onClick={openModal}>
        <FiUser size={25} />
      </a>
      <Link to='/my-profile'><AiOutlineHome size={25} color='black'/></Link>
      <Modal
        isOpen={openedModal}
        onRequestClose={closeModal}
        className="modals-container"
        >
        <img src={glass} alt="" className="glass-pic" />

          
        <div className="modal-text">
            

          <h2 style={{fontSize: "1.8vw"}}>Compartilhe seus vinhos preferidos</h2>
          <h2 style={{fontSize: "2.5vw"}} id="make-login">Faça Login</h2>
          
            
          <br />
          <form>
            <input type="text" placeholder="Digite seu e-mail*" />
            <br />
            <input type="text" placeholder="Digite a senha*" />
          </form>
          <br />
          <div className="modal-buttons">
            <button type="submit" id="enter">Entrar</button>
            <button type="submit" id="forgot">Esqueci a senha</button>
          </div>
          <div className='but-acc'>

            <button type="submit" id="acc">Crie sua conta</button>
          </div>
        </div>
        <a onClick={closeModal}><MdClose size={25} /></a>
      </Modal>
    </div>
        </div>
  );
}
