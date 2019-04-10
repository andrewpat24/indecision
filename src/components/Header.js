import React from 'react';

const Header = (props) => {
    return (
    <section className="Header">
        <h1 className="header__title">{props.title}</h1>
        {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
     </section>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;