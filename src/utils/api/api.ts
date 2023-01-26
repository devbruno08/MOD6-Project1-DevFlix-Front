import { Channel, ChannelInput } from "../types/channel.type";
import axios from "axios";

axios.defaults.baseURL = "https://api-ecomm-back.herokuapp.com/products";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
  getAllChannels: async (): Promise<Channel[] | undefined> => {
    try {
      const channels = await axios.get("/all-channels");
      return channels.data;
    } catch (err: any) {
      alert("Erro no servidor");
      throw new Error(err);
    }
  },

  createChannel: async (
    channel: ChannelInput
  ): Promise<ChannelInput | undefined> => {
    try {
      const newChannel = await axios.post("/create", channel);
      console.log(newChannel);
      return newChannel.data;
    } catch (err: any) {
      alert("Erro ao criar o canal");
      throw new Error(err);
    }
  },

  deleteChannelById: async (channelId: string): Promise<boolean | undefined> => {
    try {
      const toDeleted = await axios.delete("/delete/" + channelId);
      if (toDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      console.log(channelId);
      alert("Erro ao deletar o canal");
    }
  },

  updateChannel: async (
    channel: Channel
  ): Promise<ChannelInput | undefined> => {
    try {
      const updatedChannel = await axios.put("/update", channel);
      return updatedChannel.data;
    } catch (err: any) {
      alert("Erro ao atualizar o canal");
      throw new Error(err);
    }
  },

  getChannelById: async (channelId: string): Promise<Channel> => {
    try {
      const channel = await axios.get("/channel/" + channelId);
      return channel.data;
    } catch (err: any) {
      alert("Canal não encontrado");
      throw new Error(err);
    }
  },
};
