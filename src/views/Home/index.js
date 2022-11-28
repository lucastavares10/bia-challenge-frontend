import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  HomeBox,
  CoverBox,
  ContainerMessages,
  ContentMessages,
  ContentInput,
  InputMessage,
  CButton,
} from "./components/assets/styled";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { IoLogoSnapchat } from "react-icons/io";
import { MdSend } from "react-icons/md";
import Message from "./components/message";
import InputSelect from "../../components/UI/InputSelect";
import ChatService from "../../services/ChatService";
import { toast } from "react-toastify";
import io from "socket.io-client";

const socket = io.connect(process.env.REACT_APP_BIA_CHALLENGE_BACKEND);

const Home = (props) => {
  const [bots, setBots] = useState();
  const [selectedBot, setSelectedBot] = useState();
  const [conversation, setConversation] = useState();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState("LOADING");
  const messagesEndRef = useRef();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
    });

    socket.on("disconnect", () => {
      console.log("socket disconnect");
    });

    socket.on("send_message_to_user", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("send_message_to_user");
    };
  }, []);

  useEffect(() => {
    ChatService.findAllBot()
      .then((res) => {
        setBots([...res.data.data]);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Erro ao carregar bots!");
      })
      .finally(() => {
        setPage("START_CONVERSATION");
      });
  }, []);

  const startTalk = () => {
    if (selectedBot) {
      setPage("LOADING");
      const data = {
        botId: selectedBot,
        socketId: socket.id,
      };

      ChatService.startConversation(data)
        .then((response) => {
          const conversation = response?.data?.data?.conversation;
          setConversation(conversation);
          sessionStorage.setItem("@chat/conversationid", conversation?.id);
          sessionStorage.setItem("@chat/botid", conversation?.botId);

          setPage("CONVERSATION");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message || "Erro ao carregar bots!");
          setPage("START_CONVERSATION");
        });
    } else {
      toast.error("Selecione um bot para iniciar!");
    }
  };

  const sendMessageToBot = () => {
    const data = {
      conversationId: conversation.id,
      from: conversation.sessionId,
      to: conversation.botId,
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, data]);

    socket.emit("send_message_to_bot", data);
    setText("");
  };

  return (
    <HomeBox>
      <CoverBox />
      <Container>
        {page === "LOADING" && (
          <div className="loaderContent">
            <CircularProgress
              size={70}
              color="inherit"
              style={{ marginTop: 200 }}
            />
          </div>
        )}

        {page === "START_CONVERSATION" && (
          <Grid xs={12} container justifyContent="center">
            <IoLogoSnapchat
              size={200}
              color="#870000"
              style={{ marginTop: 100 }}
            />
            <Grid
              xs={10}
              container
              justifyContent="center"
              style={{ marginTop: 80 }}
            >
              {bots && (
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={10}>
                    <InputSelect
                      name="botId"
                      label="Bot"
                      options={bots.map((bot) => {
                        return { label: bot.name, value: bot.id };
                      })}
                      defaultValue=""
                      onChange={(event) => setSelectedBot(event.target.value)}
                    />
                  </Grid>
                </Grid>
              )}

              <Button
                variant="contained"
                size="large"
                style={{
                  color: "white",
                  backgroundColor: "#002d5c",
                  width: "200px",
                  marginTop: "15px",
                }}
                onClick={startTalk}
                disabled={false}
              >
                {1 === 2 ? (
                  <CircularProgress size={26} color="inherit" />
                ) : (
                  "INICIAR CONVERSA"
                )}
              </Button>
            </Grid>
          </Grid>
        )}

        {page === "CONVERSATION" && (
          <Grid xs={12} container justifyContent="center">
            <Grid
              xs={10}
              container
              justifyContent="center"
              style={{ marginTop: 10 }}
            >
              <ContainerMessages>
                {conversation &&
                  messages.map((message) => {
                    return (
                      <ContentMessages key={message.id}>
                        <Message
                          text={message.text}
                          time={message.timestamp}
                          user={
                            message.from === conversation.botId ? "bot" : "user"
                          }
                        />
                      </ContentMessages>
                    );
                  })}

                <div ref={messagesEndRef} />
              </ContainerMessages>

              <ContentInput>
                <InputMessage
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Digite sua mensagem"
                />

                <CButton
                  cursor="default"
                  color="#fff"
                  onClick={sendMessageToBot}
                >
                  <MdSend size="90%" color="#ccc" />
                </CButton>
              </ContentInput>
            </Grid>
          </Grid>
        )}
      </Container>
    </HomeBox>
  );
};

export default Home;
