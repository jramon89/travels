import React from 'react';
import Nav from './Nav.jsx';

const Layout = (props) => {
    return(
        <div className="layout">
            <header>
                <Nav/>
            </header>
            <section>
                <div className="content">
                    { props.children }
                </div>
            </section>
            <footer>
                <div>Footer</div>
            </footer>
        </div>
    );
}

export default Layout;
