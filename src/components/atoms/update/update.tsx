import { FormEvent, useState, useEffect } from "react";
import { FormComponent } from "./styles";
import { Channel, ChannelInput } from "../../../utils/types/channel.type";
import { api } from "../../../utils/api/api";
import { useParams, useNavigate } from "react-router-dom";

export function Update() {
  const navigate = useNavigate();
  const [channel, setChannel] = useState<Channel>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.getChannelById(id).then((data) => {
        setChannel(data);
      });
    }
  }, []);

  async function getChannelById(id: string) {
    if (id) {
      const channel = await api.getChannelById(id);
      setChannel(channel);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newChannel: ChannelInput = {
      name: e.currentTarget.channelName.value,
      description: e.currentTarget.channelDescription.value,
      imageURL: e.currentTarget.channelImage.value,
    };

    let ChannelResponse;
    if (id) {
      const channelToUpdate = { ...newChannel, id: id };
      ChannelResponse = await api.updateChannel(channelToUpdate);
      navigate("/");
    }
  }

  return (
    <FormComponent>
      <form onSubmit={handleSubmit}>
        <h2> Channel Update</h2>
        <label>Channel Name:</label>
        <input
          defaultValue={channel?.name}
          type="text"
          name="channelName"
          required
        ></input>
        <label>Channel Description:</label>
        <input
          defaultValue={channel?.description}
          type="text"
          name="channelDescription"
        ></input>
        <label>Channel Image:</label>
        <input
          defaultValue={channel?.imageURL}
          type="text"
          name="channelImage"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </FormComponent>
  );
}
