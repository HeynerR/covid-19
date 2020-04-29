import React, {Fragment} from 'react';
import {Div, Brand, Nav} from "./style";
import {NavLink} from 'react-router-dom';

const Page = (props) => {
    return (
        <Fragment>
            <Div>
                <Brand>
                    Covid-19 Status
                </Brand>
                <Nav>
                    <NavLink to="/" className="link">
                        Inicio
                    </NavLink>
                </Nav>
            </Div>
        </Fragment>

    );
};

export default Page;
