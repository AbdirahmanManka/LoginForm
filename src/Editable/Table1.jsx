import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import {Table,Button,Form, Input} from 'antd';


function Table1() {
    


    const [dataSource,setDataSource]=useState([]);
    const [editingRow,setEditingRow]=useState(null);
    
    useEffect(()=>{
        const data=[]
        for(let index=0; index<8; index++){
            data.push({
                key:`${index}`,
                name:`Name ${index}`,
                address:`Address ${index}`


            })
        }
        setDataSource(data);

    },[])

    const columns=[
        {
            title:'Name',
            dataIndex:"name",
            render:(text,record)=>{
                if(editingRow===record.key){
                 return   <Form.Item>
                    
                   

                    <Input />

                    </Form.Item>
                }else{
                    return <p>{text}</p>
                }

            },
        },
        {
            title:'Address',
            dataIndex:"address",
            render:(text,record)=>{
                if(editingRow === record.key){
                 return (  <Form.Item>
                    
                    

                    <Input />

                    </Form.Item>
                 );
                }else{
                    return <p>{text}</p>
                }

            },
        },
        {
            title:'Actions',
            render:(_,record)=>{
                return <>
                <Button type='link' onClick={()=>{
                    setEditingRow(record.key)
                }}>Edit</Button>
                <Button type='link'>Save</Button>
                </>

            }
        }
    ]
  return (
    <div className='App'>
        <header className='App-header'>
            <Form>
            <Table columns={columns} dataSource={dataSource}></Table>
            </Form>

        </header>
      
    </div>
  );
}

export default Table1
