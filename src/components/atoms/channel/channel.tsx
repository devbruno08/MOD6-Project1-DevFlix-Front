import { api } from "../../../utils/api/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Channel } from "../../../utils/types/channel.type";
import { OneChannel } from "./oneChannel";

export function ProductId() {
  const { id } = useParams();

  const [oneChannel, setChannel] = useState<Channel>({
    id: "",
    name: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    if (id) {
      api.getChannelById(id).then((data) => {
        setChannel(data);
      });
    }
  }, []);

  async function getChannelById(id: string) {
    const channel = await api.getChannelById(id);
    setChannel(channel);
  }

  return (
    <>
      <section>
        <OneChannel
          id={oneChannel?.id}
          description={oneChannel.description}
          imageURL={oneChannel.imageURL}
          name={oneChannel.name}
        />
      </section>
    </>
  );
}
