import React from "react";

class PostWhats extends React.Component {
  state = {
    
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaMensagem = () => {
   //essa função precisa arrumar
    const novaMensagem = {
      
      Usuario: this.state.valorInputUsuario,
      
      Mensagem: this.state.valorInputMensagem
    };


    const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputUsuario = (event) => {

    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {

    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
  // está mapeado o array, precisamos deste código?
   const mensagemEnviada = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nome} - {pessoa.email}
        </p>
      );
    });

    return (
      <div>
        <div>{listaDeComponentes}</div>
        <div>
          <input
           
            value={this.state.valorInputUsuario}
            
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
           
            value={this.state.valorInputMensagem}
            
            onChange={this.onChangeInputMensagem}
            placeholder={"Email"}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
        
      </div>
    );
  }
}

export default PostWhats;