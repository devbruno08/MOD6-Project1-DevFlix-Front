import { Channel } from "../../../utils/types/channel.type";
import { useNavigate } from "react-router-dom";
import { ChannelSection, ChannelContent } from "./styles";
import { FaWindowClose } from "react-icons/fa";

interface ChannelProps extends Channel {}

export function OneChannel({
  id,
  name,
  description,
  imageURL,
}: ChannelProps) {
  const navigate = useNavigate();

  return (
    <>
      <ChannelSection>
        <ChannelContent>
          <img src={imageURL} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
        </ChannelContent>
        <button onClick={() => navigate("/")}>
          <FaWindowClose size={25} />
        </button>
      </ChannelSection>
    </>
  );
}
