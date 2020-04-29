import React, {Component} from 'react';
import {connect} from 'react-redux';
import Page from './page';
import fetchGeneralData from '../../redux/actions/getGeneralData';
import searchByCountry from '../../redux/actions/searchByCountry';
import {withRouter} from 'react-router-dom';

class GeneralData extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.filterByCountry = this.filterByCountry.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        this.props.fetchGeneralData();
    }

    filterByCountry(e) {
        const value = e.target.value;
        this.props.searchByCountry(value)
        this.setState({value: value})
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            generalData
        } = this.props;

        return (
            <Page generalData={generalData}
                  filterByCountry={this.filterByCountry}
                  goTo={this.goTo}
                  value={this.state.value}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        generalData: state.generalData,
    }
};
const mapDispatchToProps = {
    fetchGeneralData,
    searchByCountry
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GeneralData)
);
