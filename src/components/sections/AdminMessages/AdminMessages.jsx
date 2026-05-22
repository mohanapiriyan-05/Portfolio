import "./AdminMessages.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminMessages() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    fetchMessages();

  }, []);

  const fetchMessages = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/contact/messages"
      );

      setMessages(
        res.data.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section
      className="admin-messages"
    >

      <h2>

        Contact Messages

      </h2>

      <div className="message-grid">

        {

        messages.map((item)=>(

        <div
        className="message-card"
        key={item.id}
        >

        <h3>

        {item.name}

        </h3>

        <p>

        {item.email}

        </p>

        <span>

        {item.message}

        </span>

        </div>

        ))

        }

      </div>

    </section>

  );

}