import { FormEvent } from "react";
import { ChannelInput } from "../../../utils/types/channel.type";
import { api } from "../../../utils/api/api";
import { FormComponent } from "./styles";

interface FormProps {
  handleModal: () => void;
  update: () => void;
}

export function Form({ handleModal, update }: FormProps) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newChannel: ChannelInput = {
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      imageURL: e.currentTarget.productImage.value,
    };

    const channel = await api.createChannel(newChannel);
    if (channel) {
      console.log(channel);
      update();
      handleModal();
    }
  }

  return (
    <FormComponent>
      <form onSubmit={handleSubmit}>
        <h2>Create Channel</h2>
        <label>Channel Name:</label>
        <input type="text" name="channelName" required></input>
        <label>Channel Description:</label>
        <input type="text" name="channelDescription" required></input>
        <label>Channel Image:</label>
        <input type="text" name="channelImage" required></input>
        <button type="submit">Submit</button>
      </form>
    </FormComponent>
  );
}
