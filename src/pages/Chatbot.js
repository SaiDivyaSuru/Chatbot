import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatMessage from '../components/ChatMessage';
import { analyze } from '../components/utils';
import {arrayItems} from "./AIOptions";
// import { Button } from 'bootstrap';
const Chatbot = () => {
 

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, )
  const [messages,setMessages] = useState([
    {
      messages:'Hi , May I have your Name'
    }
  ])
 
  const [text,setText] = useState('');
  const onSend =() =>{
    let list = [...messages,{message:text,user:true}];
    if(list.length > 2){
      const reply = analyze(text)
      list =[
        ...list,
        {
          message:reply
        }
      ];

    }else{
      list =[
        ...list,
        {
          message:`Hi,${text}`,
        },
        {
          message:"How can i help you?",
        },
      ];
    }
    setMessages(list);
    setText("");
    
  }
  return (
    <div>

      <div className='d-flex align-items-center justify-content-center'> 
          <img src='https://imgs.search.brave.com/I2AxeLD3k7PL3RGNPerLvxbdYwffVKb-WYbMLLxd33M/rs:fit:450:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/ZVB5dEZOR1l2d1lS/dTlzQnRXQjlnQUFB/QSZwaWQ9QXBp'
          alt='logo'
          height={200}
          width={200}
          />
          <h2 className='text-primary'>Chatbot</h2>
      </div>
      <div className='chat-message'>
        {
          messages.length >0 && messages.map((data)=> <ChatMessage{...data}/>)
        }
        <div className='d-flex mt-2'>
          <input type='search' className='form-control' value={text} onChange={(e)=> setText(e.target.value)}/>
          <button style={{color:'white',backgroundColor:'sky blue'}} className='ms-2' onClick={onSend}>Send</button>
        </div>
        {/* <div id='copyright'>Copy rights</div> */}

      </div>
    </div>
  )
}

export default Chatbot