import React, {Component} from "react";
import fetchGeneralData from "../../redux/actions/getGeneralData";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import Page from './page';

class Header extends Component {

    render() {
        return (
            <Page>
            </Page>);
    }
}


const mapStateToProps = state => {
    return {
        generalData: state.generalData,
    }
};
const mapDispatchToProps = {
    fetchGeneralData
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
);

