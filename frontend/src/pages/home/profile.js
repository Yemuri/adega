import { useState } from "react";
import { MdClose } from "react-icons/md";
import "./profile.css";
import Modal from "react-modal";
import Wines from "../../images/wines.jpeg";

export default function ProfilePage() {
  const [openedModal1, setOpenedModal1] = useState(false);

  function openModal1() {
    setOpenedModal1(true);
  }

  function closeModal1() {
    setOpenedModal1(false);
  }

  return (
    <div className="main-home-container">
      <div className="main-home-menu-container">
        <h1>Olá Usuário!</h1>
          {/* ABRE MODAL1 PARA CADASTRO DE VINHO */}
        <div className="main-home-pre-modal">
          <a onClick={openModal1}>Adicionar Vinho</a>
          <Modal
            isOpen={openedModal1}
            onRequestClose={closeModal1}
            className="modal1-container"
          >
            <img src={Wines} alt="" className="wines-pic" />

            <div className="modalAdd-text-structure">
              <h2 style={{ fontSize: "2.5vw" }}>Adicione aqui seus vinhos</h2>

              <br />
              <form>
                <label>Nome do vinho:</label>
                <input type="text" placeholder="Digite o nome do vinho..." />
                <label>Tipo do vinho</label>
                <select>
                  <option value="red" key="">
                    Tinto
                  </option>
                  <option value="white" key="">
                    Branco
                  </option>
                  <option value="Rose" key="">
                    Rosé
                  </option>
                  <option value="Sparkling" key="">
                    Espumante
                  </option>
                  <option value="Dessert" key="">
                    Sobremesa
                  </option>
                </select>
                <label>Região</label>
                <input type="text" placeholder="Região de origem do vinho..." />
                <label>Ano</label>
                <input type="text" placeholder="Ano de produção do vinho..." />
                <label>Nota</label>
                <select>
                  <option value="0" key="">
                    0
                  </option>
                  <option value="1" key="">
                    1
                  </option>
                  <option value="2" key="">
                    2
                  </option>
                  <option value="3" key="">
                    3
                  </option>
                  <option value="4" key="">
                    4
                  </option>
                  <option value="5" key="">
                    5
                  </option>
                  <option value="6" key="">
                    6
                  </option>
                  <option value="7" key="">
                    7
                  </option>
                  <option value="8" key="">
                    8
                  </option>
                  <option value="9" key="">
                    9
                  </option>
                  <option value="10" key="">
                    10
                  </option>
                </select>
                <label>Descrição</label>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Descreva o vinho..."
                ></textarea>
              </form>
              <br />
              <div className="modal1-buttons">
                <button type="submit" id="add-wine">
                  Cadastrar
                </button>
                <button type="submit" id="cancel">
                  Cancelar
                </button>
              </div>
            </div>
            <a onClick={closeModal1}>
              <MdClose size={25} />
            </a>
          </Modal>
          {/* ACIMA FECHA O MODAL 1 PARA ADICIONAR VINHO */}
          <a>Editar Vinho</a>
          <a>Sair</a>
        </div>
      </div>
      <div className="main-home-wine-container">
        <h1>kaka</h1>
      </div>
    </div>
  );
}
