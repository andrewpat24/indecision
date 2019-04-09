import React from 'react';

const Header = (props) => {
    return (
    <section className="Header">
        <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
     </section>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;