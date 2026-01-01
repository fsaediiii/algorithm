import { useState, startTransition } from "react";
import { useOptimistic } from "react";

export default function SimpleOptimistic() {
  const [messages, setMessages] = useState<string[]>([]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    [],
    (current: string[], newMessage: string) => [...current, newMessage],
  );

  const handleAdd = () => {
    const newMsg = "new message sending!";

    startTransition(() => {
      addOptimisticMessage(newMsg);
    });

    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div>
      <button onClick={handleAdd}>اضافه کردن پیام</button>

      <h4>Optimistic Messages:</h4>

      <h4>Final Messages:</h4>
      <ul>
        {optimisticMessages.map((msg, i) => (
          <li key={i} style={{ color: "red" }}>
            {msg}
          </li>
        ))}
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
