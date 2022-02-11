import React,{useState} from "react";
import axios from "axios"; 
import { Link, useParams } from "react-router-dom";
import { Table, Button } from 'antd';

export default function ListaDetalhe() {
    const [detalhe,setDetalhe]=useState([])    
    const { id } = useParams();
    console.log(id)
  
    const handleSubmission = async () => {
        axios.get (`http://localhost:8100/upload`)   
            .then(res=>{
                const dadosDetalhe=res.data
                setDetalhe(dadosDetalhe) 
            })
          }

    const columns = [         
     
        { title: 'CPF',  dataIndex: 'CPF',key: 'CPF', render: text => <a>{text}</a>},
        { title: 'NOME', dataIndex: 'NOME',key: 'NOME', render: text => <a>{text}</a>}, 
        { title: 'FILIAL',dataIndex:'FILIAL',key: 'FILIAL', render: text => <a>{text}</a>}, 
        { title: 'DATA', dataIndex: 'DATA_GERACAO',key: 'DATA_GERACAO', render: text => <a>{text}</a>}, 
        { title: 'VALOR',dataIndex: 'VALOR',key: 'VALOR', render: text => <a>{text}</a>}, 
    ];
    
  const data =  detalhe; 
 
    
    return (
      <div>
         <Button onClick={handleSubmission} >Buscar</Button>
         <Table columns={columns} dataSource={data} />         	
         <Button><Link to="/upload">Voltar</Link></Button>
      </div>
    )
  }
