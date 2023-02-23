import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from "react-bootstrap";
import ChatMessage from '../components/ChatMessage';
import { analyze } from '../components/utils';

const Dashboard = () => {

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
  },)
  const[messages,setMessages]=useState([{

    messages:"Hi,May I have your name?"
  }
  ])
  const [text,setText] = useState('');
  const onSend =() =>{
    let list=[...messages,{messages:text,user:true}];
    if(list.length>2){
      const reply= analyze(text)
      list=[
        ...list,
        {messages:reply}
      ];

    }
    else{
      list =[
        ...list,
        {
          messages:`Hi,${text}`,
        },
        {
          messages:"How can i help you?",
        }
      ];
      // console.log(messages)
    }
    setMessages(list);
    setText("");
    setTimeout(() =>{
      document.querySelector("#copyright").scrollIntoView();

    },1);
    
  };
  return (
    <div>

      <div className='d-flex align-items-center justify-content-center'>
        <img
        src='https://imgs.search.brave.com/zgazSqgdxZdT2eruKzjGnmYMzlpd7Z1yDkhPHr96Bj0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/ekNBT0RmYkZ4RHFm/MEZLTUlaakRRSGFI/YSZwaWQ9QXBp'
        alt='logo'
        height={200}      
        width={150}
        />
        <h2 className='text-primary'> ChatBot</h2>
      </div>
        <div className='chat-message'>
          {
            messages.length>0 && messages.map((data)=><ChatMessage {...data}/>)
          }
          <div className='d-flex'>
            <input type='text' className='form-control' value={text} onChange={(e)=>setText(e.target.value)}/>
            <Button type='primary' className="ms-3" onClick={onSend}>Send</Button>
          </div>
          <div id='copyright' className='mt-3'></div>

        </div>
      
    </div>
  )
}

export default Dashboard
