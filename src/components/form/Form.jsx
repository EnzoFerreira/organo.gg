import React from "react";
import "./Form.css"
import Campo from "../TextBox/Campo"



const Form = () => {
  return (
    <section className="form">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <Campo label="Nome" placeholder="Digite seu nome" />
            <Campo label="Cargo" placeholder="Digite seu Cargo" />
            <Campo label="Imagem" placeholder="Digite o endereço da Imagem" />
        </form>
    </section>
  );
};
export default Form;
