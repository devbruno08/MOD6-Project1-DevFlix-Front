import { Container } from "../../molecules/container/container";
import { ContainerSection } from "./styles";
import { Channel } from "../../../utils/types/channel.type";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { api } from "../../../utils/api/api";
import { Header } from "../../molecules/header/header";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "21rem",
    height: "25rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
    border: "none",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

export function Home() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getChannelsData() {
    const allChannels = await api.getAllChannels();
    setChannels(allChannels ?? []);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getChannelsData();
  }, [control]);

  return (
    <>
      <Header controlPage={updatePage} />
      <ContainerSection>
        {channels.map((channel) => (
          <Container
            id={channel.id}
            description={channel.description}
            imageURL={channel.imageURL}
            name={channel.name}
            update={updatePage}
          />
        ))}
      </ContainerSection>
    </>
  );
}
