import React from 'react';

const Header = (props) => {
    return (
    <section component="Header" className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
     </section>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;