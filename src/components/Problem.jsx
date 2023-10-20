import { useEffect, useState } from 'react';
import axios from 'axios';
import Editor from "@monaco-editor/react";


const Problem = ({mode}) => {
    const [code,setCode] = useState('');
    const [language,setLanguage]= useState('C++');
    const [output,setOutput] = useState('');
    const [input,setInput] = useState('');
    const [selectedOption, setSelectedOption] = useState("false");

    const handleOptionChange = (event) => {
      	setSelectedOption(event.target.value);
    };

	useEffect(() => {
		console.log(mode)
	}, [])
  
    const handleSubmit=()=>{
		console.log(language);
		console.log(input);
		axios.post('http://localhost:3500/run', { language: language, code: code })
		.then((response) => {
			setOutput(response.data.output);
			console.log(output);
		}).catch(err => {
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
				<div className='problem_header'>
					<ul className='problem_header_options'>
						<li>Description</li>
						<li>Editorial</li>
						<li>Solutions</li>
						<li>Submissions</li>
					</ul>
				</div>
				<div className='problem_name'>
					<p>Problem Name</p>
				</div>
				<div className='problem_tags'>

				</div>
				<div className='problem_statement_body'>
					<p>Problem Body</p> 
				</div>
				<div className='problem_statement_footer'>
					<p>Problem Footer</p>
				</div>
			</div>

			<div className='problem_code_ide_container'>
				<div className='problem_code_ide_header'>
					<div className='problem_code_ide_header-top'>
						<p>Code</p>
						<p>...</p>
					</div>
					<div className='problem_code_ide_header-bottom'>
						<div className='problem_code_ide_header-bottom--1'>
							<p>C++</p>
							<p>Auto</p>
						</div>
						<div className='problem_code_ide_header-bottom--2'>
							<p>Mark</p>
							<p>Braces</p>
							<p>Restore</p>
						</div>
					</div>

				</div>
				<div className='problem_lang_selector'>
					{/* <Dropdown onSelect={handleDropdownChange} className='problem_lang_selector'>
						<Dropdown.Toggle className='problem_lang_selector-selected'>
							{language}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey ="C++"><LangLogo lang="cpp"/></Dropdown.Item>
							<Dropdown.Item eventKey ="Python"><LangLogo lang="python"/></Dropdown.Item>
							<Dropdown.Item eventKey ="Java"><LangLogo lang="java"/></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown> */}
					
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
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
						value={code} 
						onChange={(e) => setCode(e.target.value)}
					/>
				</Editor>

				<div className='problem_code_output'>
					<label>
						<input 
							type='radio' 
							value="true" 
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

					{/* {selectedOption === "true" ?
						(
							<textarea 
								rows={5} 
								cols={20} 
								value={input} 
								onChange={(e) => setInput(e.target.value)}
							></textarea>
						) :	<div/>       
					} */}
				</div>
			</div>
		</div>
	)
}

export default Problem