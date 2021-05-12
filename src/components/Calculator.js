import React, { Component, useState } from "react";
import { Button, Container,Row,Col,ButtonGroup  } from 'react-bootstrap';
import "./Calculator.css";
 
 
 
const Calculator = () =>{

   const [expression,setExpression]=useState('');

   const MemoryStore = () =>{
    let memread = localStorage.getItem("memory")
    let exp = parseInt(expression);
 
    let result = parseInt(memread)+ exp;
    localStorage.setItem("memory",result)
    
   }
   const MemClear = () => {
    localStorage.setItem("memory",parseInt(0))
   }
   const MemRead = () => {
   
    let memread = parseInt(localStorage.getItem("memory"))
    setExpression(memread)
  
}
   const Evaluate = (e) => {
      
        setExpression(expression+e.target.value)
     
   }
   const Backspace = () =>{
    let result= String(expression)
  
    setExpression(result.slice(0, result.length-1));  
  
    
   }
   const Compute = () =>{
       try{
    let op = eval(expression);
    setExpression(op)
       }
       catch{
           alert("Invalid")
           setExpression('');

       }
   }
   const Clear = () =>{
    setExpression('')

   }
   
        return (
           <div className = "app">
           
            
            <div className = "wrapper">
            <Row><h2 style = {{textAlign:"center"}}>Calculator</h2>
            </Row>
            <Row>
            <input name="display" type="text" value={expression} className="input" onChange={(e) =>setExpression(e.target.value) }/>
            </Row>
             <Row>
             <ButtonGroup>
                <Button className="border" variant="danger" size="lg"  onClick={() => Clear()}>C</Button>
                <Button className="border" variant="primary" size="lg"  value="1" onClick={(e) => Backspace(e)}>B</Button>
                <Button className="border" variant="primary" size="lg"  value="%" onClick={(e) => Evaluate(e)}>%</Button>
                <Button className="border" variant="primary" size="lg"  value="M" onClick={(e) => MemoryStore(e)}>M</Button>
           
            </ButtonGroup>
              </Row>
            {/* <Container>  */}
            <Row>
            <ButtonGroup>
                
                <Button className="border" variant="primary" size="lg"   value="1" onClick={(e) => Evaluate(e)}>1</Button>
                <Button className="border" variant="primary" size="lg"    value="2" onClick={(e) => Evaluate(e)}>2</Button>
                <Button className="border" variant="primary" size="lg"   value="3" onClick={(e) => Evaluate(e)}>3</Button>
                <Button className="border" variant="primary" size="lg"    value="+" onClick={(e) => Evaluate(e)}>+</Button>
            </ButtonGroup>
            {/* </Container> */}
            </Row>
            
     
              <Row>
            <ButtonGroup>
                <Button className="border"  variant="primary" size="lg"   value="4" onClick={(e) => Evaluate(e)}>4</Button>
                <Button className="border" variant="primary" size="lg" value="5" onClick={(e) => Evaluate(e)}>5</Button>
                <Button className="border" variant="primary" size="lg"  value="6" onClick={(e) => Evaluate(e)}>6</Button>
                <Button className="border" variant="primary" size="lg"   value="-" onClick={(e) => Evaluate(e)}>-</Button>
            

            </ButtonGroup>
            </Row>
            <Row>
            <ButtonGroup>
                <Button className="border" variant="primary" size="lg"  value="7" onClick={(e) => Evaluate(e)}>7</Button>
                <Button className="border" variant="primary" size="lg"  value="8" onClick={(e) => Evaluate(e)}>8</Button>
                <Button className="border" variant="primary" size="lg"  value="9" onClick={(e) => Evaluate(e)}>9</Button>
                <Button className="border" variant="primary" size="lg"  value="/" onClick={(e) => Evaluate(e)}>/</Button>
            

            </ButtonGroup>
            </Row>
            <Row >
            <ButtonGroup>
                 <Button className="border" variant="primary" size="lg" value="0" onClick={(e) => Evaluate(e)}>0</Button>
                <Button className="border" variant="primary" size="lg"  value="." onClick={(e) => Evaluate(e)}>.</Button> 
                <Button className="border" variant="primary" size="lg"  value="*" onClick={(e) => Evaluate(e)}>*</Button> 
                <Button className="border" variant="success" size="lg"  onClick={(e) => Compute(e)}>=</Button> 
            

            </ButtonGroup>
            </Row>
            <Row >
            <ButtonGroup>
                 <Button className="border" variant="primary" size="lg" value="" ></Button>
                <Button className="border" variant="primary" size="lg"  value="MR" onClick={(e) => MemRead(e)}>MR</Button> 
                <Button className="border" variant="primary" size="lg"  value="MC" onClick={(e) => MemClear(e)}>MC</Button> 
                <Button className="border" variant="primary" size="lg" value="" ></Button>
            

            </ButtonGroup>
            </Row>
            </div>

            </div>
        );
    }
 

export default Calculator;