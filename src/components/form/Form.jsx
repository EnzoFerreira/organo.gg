import React from "react";
import "./Form.css"
import Campo from "../TextBox/Campo"
import ListaSus from "../ListaSuspensa/ListaSus";
import Botao from "../Botao/Botao";



const Form = () => {
  
  const times = [
      'programação',
      'front end',
      'data science',
      'dev ops',
      'mobile'
  ]
  
  const aoSalvar = (evento) =>{
      evento.preventDefault()
  }
  
  return (
    <section className="form">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <Campo obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
            <Campo obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
            <Campo label="Imagem" placeholder="Digite o endereço da Imagem" />
            <ListaSus obrigatorio={true} label="Times"itens={times} />
            <Botao>
              Enviar Dados
            </Botao>
        </form>
    </section>
  );
};
export default Form;
