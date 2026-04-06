import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// 🔹 message type define
type Message = {
  content: string;
  senderId: string;
};

const socket = io("http://localhost:5000", {
  query: {
    userId: "USER_1_ID", // change per tab
  },
});

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]); // 🔥 FIX

  const userId = "USER_1_ID";
  const conversationId = "CONVERSATION_ID";

  // receive message
  useEffect(() => {
    socket.on("receive_message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  // send message
  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("send_message", {
      conversationId,
      content: message,
    });

    // optimistic UI update
    setMessages((prev) => [...prev, { content: message, senderId: userId }]);

    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Chat</h2>

      {/* messages */}
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.senderId === userId ? "Me" : "Other"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>

      {/* input */}
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
