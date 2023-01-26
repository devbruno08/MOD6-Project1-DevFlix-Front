import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { Channel } from "../../../utils/types/channel.type";
import { ContainerContent, ContainerSection, ButtonSection } from "./styles";

interface ContainerProps extends Channel {
  update: () => void;
}

export function Container({
  id,
  name,
  description,
  imageURL,
  update,
}: ContainerProps) {
  const navigate = useNavigate();

  async function DeleteContainer() {
    const toDelete = await api.deleteChannelById(id);
    if (toDelete) {
      update();
    }
  }

  return (
    <ContainerSection>
      <ContainerContent>
        <img src={imageURL} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </ContainerContent>
      <ButtonSection>
        <button
          onClick={() => {
            navigate("/update/" + id);
          }}
        >
          Update
        </button>
        <button onClick={DeleteContainer}>Delete</button>
        <button
          onClick={() => {
            navigate("/channel/" + id);
          }}
        >
          See +
        </button>
      </ButtonSection>
    </ContainerSection>
  );
}
