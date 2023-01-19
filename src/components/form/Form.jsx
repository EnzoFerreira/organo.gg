import React, { useState } from "react";
import "./Form.css"
import Campo from "../TextBox/Campo"
import ListaSus from "../ListaSuspensa/ListaSus";
import Botao from "../Botao/Botao";



const Form = (props) => {
  
  const[nome, setNome] = useState('')
  const[cargo, setCargo] = useState('')
  const[imagem, setImagem] = useState('')
  const[time, setTime] = useState('')
    
  const aoSalvar = (evento) =>{
      evento.preventDefault()
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('')
      setCargo('')
      setImagem('')
  }
  


  return (
    <section className="form">
        <form onSubmit={aoSalvar} >
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <Campo 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            valor = {nome} 
            aoAlterado={valor => setNome(valor)}/>
            
            <Campo 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu Cargo" 
            valor = {cargo}
            aoAlterado = {valor => setCargo(valor)}/>
            
            <Campo 
            label="Imagem" 
            placeholder="Digite o endereço da Imagem" 
            valor = {imagem}
            aoAlterado = {valor => setImagem(valor)}/>
            
            <ListaSus 
            obrigatorio={true} 
            label="Times"
            itens={props.times} 
            valor = {time}
            aoAlterado = {valor => setTime(valor)}
            />
            <Botao>
              Enviar Dados
            </Botao>
        </form>
    </section>
  );
};
export default Form;
