import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { MdOutlineNoteAdd } from "react-icons/md";
import { useState } from "react";
import { HeaderComponent, HeaderLogo, HeaderSection, Buttons } from "./styles";
import { Form } from "../form/form";

const customStyles = {
  content: {
    top: "35%",
    left: "70%",
    right: "auto",
    bottom: "auto",
    marginRight: "-80%",
    width: "25rem",
    height: "20rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    borderRadius: "15px",
    border: "none",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
  },
};

Modal.setAppElement("#root");

interface HeaderProps {
  controlPage: () => void;
}

export function Header({ controlPage }: HeaderProps) {
  const [modalIsOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen(!modalIsOpen);
  }

  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent>
        <HeaderLogo>
          <Link to="/home">
            <h1>DevFlix</h1>
          </Link>
        </HeaderLogo>
        <HeaderSection>
          <Buttons color="#44bd32" onClick={handleModal}>
            <MdOutlineNoteAdd size={24} />
          </Buttons>
        </HeaderSection>
      </HeaderComponent>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Create Form"
      >
        <Form update={controlPage} handleModal={handleModal} />
      </Modal>
    </>
  );
}
