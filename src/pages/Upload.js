import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Input, Button } from 'antd';
import Progress from '../components/Progress'

export default function UploadFile(){
	const [selectedFile, setSelectedFile] = useState();
	const [IsSelected, setIsSelected] = useState(false);
	const [IsProgress, setIsProgress] = useState(false);

	const handleSubmission = async () => { 
		const formData = new FormData();

		formData.append('file', selectedFile);

		 fetch(
			'http://localhost:8100/uploadfile',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())			
			.then((result) => {
				console.log('Success:', result);
  
 //-------------------------------/ 
  
 async function gravar () {
 await axios.all(result.map(i => 
		axios.post('http://localhost:8100/upload',
		
		{
			"cpf": i.cpf,
			"nome": i.nome,
			"filial": i.filial,
			"bairro": i.bairro,
			"centro_de_custo": i.centro_de_custo,
			"cep": i.cep,
			"cidade": i.cidade,
			"conta_contabil": i.conta_contabil, 
			"data_admissao": i.data_admissao,
		    "data_geracao": i.data_geracao,
			"data_vencimento": i.data_vencimento,
			"dt_nascimento": i.dt_nascimento,
			"empresa_pagadora": i.empresa_pagadora,
			"endereco": i.endereco,
			"numero": i.numero,
			"observacao": i.observacao,
			"rg": i.rg,
			"telefone_princial": i.telefone_princial,
			"telefone_secundario": i.telefone_secundario,
			"tipo_de_documento": i.tipo_de_documento,
			"uf": i.uf,
			"valor": i.valor
		 }
 		)))
		}
		gravar();
				

//----------------------------------/				 
			})
			.catch((error) => {
				console.error('Error:', error);
			});

			setIsProgress(true);
	}

	const changeHandler = (event) => {
	  	  setSelectedFile(event.target.files[0]);
		  setIsSelected(true);
		
	};


	
	return(
			<div>
						<Input type="file" name="file" onChange={changeHandler} />
						{IsSelected ? (
							<div>
								<br></br>
								<p>Nome do Arquivo: {selectedFile.name}</p>
								<p>Tipo do Arquivo: {selectedFile.type}</p>
								<p>Tamanho in bytes: {selectedFile.size}</p>
								<p>
									Ultima Modificação:{' '}
									{selectedFile.lastModifiedDate.toLocaleDateString()}
								</p>
								
							</div>
						) : (
							<p></p>
						)}

						<div>
							<Button onClick={handleSubmission} >Gravar</Button>		 			
							<p/>
							<Button><Link to="/detalhe">Ver Registros</Link></Button>				
						</div>


						{IsProgress ? (
							<div>
								<br></br>
								<Progress />
								
							</div>
						) : (
							<p></p>
						)} 
					</div>
	)
};

