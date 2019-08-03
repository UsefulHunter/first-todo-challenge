import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <section className="options-header">
      <h3 className="option-header__title">Listinha:</h3>
      <button className="button button--link" onClick={props.handleClearAll}>
        Marca Tudo
      </button>
    </section>
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
