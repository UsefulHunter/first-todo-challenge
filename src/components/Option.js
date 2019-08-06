import React from 'react';

const Option = props => {
  const handleDelete = () => props.handleDeleteOption(props.optionText);
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
      <button className="button button--link" onClick={handleDelete}>
        DELETE THIS
      </button>
    </div>
  );
};

export default Option;
