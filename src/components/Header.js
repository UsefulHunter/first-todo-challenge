import React from 'react';

const Header = props => (
  <div className="header">
    <section className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </section>
  </div>
);

Header.defaultProps = {
  title: 'First TODO of KINGS'
};

export default Header;
