import { api as http } from "../http";

class ChatService {
  constructor() {
    this.basePath = "/api";
  }

  findAllBot = () => {
    return http.get(`${this.basePath}/bots`);
  };

  startConversation = (data) => {
    return http.post(`${this.basePath}/conversations`, data);
  };
}

export default new ChatService();
