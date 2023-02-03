import { Form, Icon, Input, Button, Checkbox, Typography, message } from 'antd';
import React,{useState, useRef} from 'react'
import 'antd/dist/antd.css'
import './Hi.css'
import Move from './Move';

function Hi() {
  const email=useState()
  const password=useState()
  const getEmail=localStorage.getItem("emailData")
  const getPassword=localStorage.getItem("passwordData")
  const handleSubmit=()=>{
    if(email.current.value==="abc@gmail.com"&&password.current.value==="12345"){
        localStorage.setItem("emailData","abc@gmail.com")
        localStorage.setItem("passwordData","12345")
    }

} 





  const Login=()=>{
    message.success("Login Successfull")
  }
  return (
    <div className='appBg'>
      
      

      <Form className='loginForm' onSubmit={handleSubmit}>
        <Typography.Title>Login Form</Typography.Title>
        <Form.Item label="Email" name={'myEmail'}>
          <Input placeholder='Enter Your Email' ref={email}  />

        </Form.Item>
        <Form.Item 
       
        label="Password" name={'myPassword'}>
          <Input.Password  placeholder='Enter Your Password'ref={password} />

        </Form.Item>
        <Button type='primary' htmlType='submit' block onClick={Login}>Login
        </Button>
        
      </Form>

      
    </div>
  )
}

export default Hi;
