import React from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Editor from "@monaco-editor/react";


const Code_Section = () => {
    const [code,setCode] = useState('');
    const [language,setLanguage]= useState('');
    const [output,setOutput] = useState('');
    const [input,setInput] = useState('');
    const [selectedOption, setSelectedOption] = useState("false");

    const handleOptionChange = (event) => {
      	setSelectedOption(event.target.value);
    };
  
    const handleSubmit=()=>{
		console.log(language);
		console.log(input);
		axios.post('http://localhost:3500/run',{language:language,code:code})
		.then((response)=>{
			setOutput(response.data.output);
			console.log(output);
		}).catch(err =>{
			console.log(err);
		})
    }

    const handleDropdownChange = (eventkey) =>{
        setLanguage(eventkey);
    }

	const LangLogo = ({ lang }) => {
		const imgAddress = `../images/${lang}.png`
		return (
			<div className='.problem_code_ide_langlogo-logo'>
				<p>{lang}</p>
				<img src={imgAddress} alt={lang} height={25} width={25}/>		
			</div>
		)
	}

    return (
        <div className='problem_container_main'>
			<div className='problem_statement_container'>
				<div className='problem_header_name'>
					<p>Problem Name</p>
				</div>
				
				<div className='problem_statement_body'>

				</div>
			</div>

			<div className='problem_code_ide_container'>
				<div className='problem_lang_selector'>
					<Dropdown onSelect={handleDropdownChange}>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Languages
						</Dropdown.Toggle>

						<Dropdown.Menu >
							<Dropdown.Item eventKey ="c++"><LangLogo lang="cpp"/></Dropdown.Item>
							<Dropdown.Item eventKey ="python"><LangLogo lang="python"/></Dropdown.Item>
							<Dropdown.Item eventKey ="java"><LangLogo lang="java"/></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<Editor  
					className='problem_code_editor'
					height="500px"
					width ="600px"
					language={language}
					theme="vs-dark"
					
					options={{
						inlineSuggest: true,
						fontSize: "16px",
						formatOnType: true,
						autoClosingBrackets: true,
						minimap: { scale: 10 }
					}} 
				>
					<input 
						type='textbox' 
						value ={code} 
						onChange={(e)=>setCode(e.target.value)}
					>

					</input>
				</Editor>
			</div>

			<label>
				<input 
					type='radio' 
					value= "true" 
					checked={selectedOption === 'true'} 
					onChange={handleOptionChange}
				>
				</input>
					yes
			</label>
			
			<label>
				<input 
					type='radio' 
					value= "false" 
					checked={selectedOption === 'false'} 
					onChange={handleOptionChange}
				>
					
				</input>
					No
			</label>

			{selectedOption === "true" ?
				(
					<textarea 
						rows={5} 
						cols={20} 
						value ={input} 
						onChange={(e)=>setInput(e.target.value)}
					></textarea>
				) :	<div/>       
			}
	
			<Button onClick={handleSubmit}>Submit</Button>
			<h2>Output</h2>
			{output ?.length ? 
			(
				<div className='output'>
					<h6>{output}</h6>
				</div>
			) : <div/> }
		</div>
	)
}

export default Code_Section