import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddTodo = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddTodo(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form onSubmit={this.handleAddTodo}>
          <input type="text" name="option" />
          <button>Adicionar Item</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
