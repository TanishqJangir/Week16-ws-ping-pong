import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket>();
  const inputRef = useRef<HTMLInputElement>(null);


  function sendMessage(){
    const message = inputRef.current?.value;
    //@ts-ignore
    socket?.send(message);
  }


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)

    ws.onmessage = (ev) => {
      alert(ev.data)
    }
  }, [])



  return <div>
    <input type='text' ref={inputRef} placeholder='Enter a text' />
    <button onClick={sendMessage}>Submit</button>
  </div>
}

export default App
