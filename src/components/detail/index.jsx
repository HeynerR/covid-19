import React, {Component} from 'react';
import {connect} from 'react-redux';
import Page from './page';
import getDetailByCountry from '../../redux/actions/getDetailByCountry';

class GeneralData extends Component {

    componentDidMount() {
        const {
            match: {params: {country}},
            getDetailByCountry
        } = this.props;
        getDetailByCountry(country);
    }

    render() {
        const {
            detailByCountry,
            countrySelected
        } = this.props;


        return (
            <Page
                results={detailByCountry}
                countrySelected={countrySelected}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => (
    {
        detailByCountry: state.detailByCountry
    }
);
const mapDispatchToProps = {
    getDetailByCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralData);
