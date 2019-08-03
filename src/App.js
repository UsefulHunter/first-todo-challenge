import React from 'react';
import Header from './components/Header';
import Options from './components/Options';
import AddOption from './components/AddOption';

class FirstTodo extends React.Component {
  state = {
    options: []
  };

  handleAddTodo = option => {
    if (!option) {
      return 'Valor inserido não é valido';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Saporra já existe, marreco';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  render() {
    const subtitle = 'Essa daqui vai pra tu, meu bom! VRAU';
    return (
      <div>
        <Header subtitle={subtitle} />
        <section>
          <div>
            <p>Aqui deveriam ir minhas opções</p>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddTodo={this.handleAddTodo} />
          </div>
        </section>
      </div>
    );
  }
}

FirstTodo.defaultProps = {
  options: []
};

export default FirstTodo;
