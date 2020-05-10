import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import {
    H3,
    CardCountry
} from './style';

import {
    CardGeneral,
    DivFlex,
    DivTotalFlex,
    Header,
    Body,
    MainTitle,
    SubTitle,
} from '../mixins';

const Page = (props) => {

    const {generalData, filterByCountry, goTo, value} = props;
    const global = generalData['generalData'];
    const countries = generalData['generalDataCountries'];

    if (global.length === 0) {
        return null;
    }

    return (
        <Fragment>

            <MainTitle>Covid-19 a nivel mundial</MainTitle>
            <DivTotalFlex>
                <CardGeneral>
                    <Header>Casos confirmados</Header>
                    <Body>{global['TotalConfirmed']}</Body>
                </CardGeneral>
                <CardGeneral>
                    <Header>Muertos</Header>
                    <Body>{global['TotalDeaths']}</Body>
                </CardGeneral>
                <CardGeneral>
                    <Header>Recuperados</Header>
                    <Body>{global['TotalRecovered']}</Body>
                </CardGeneral>
            </DivTotalFlex>

            <hr/>

            <div className="all-countries">
                <SubTitle>
                    Una visión general por país
                </SubTitle>

                <Paper className="wrapper-filter">
                    <InputBase
                        className="input-filter"
                        placeholder="Filtro por pais. Ejm: Perú"
                        onChange={filterByCountry}
                        value={value}
                    />
                </Paper>

                <DivFlex>
                    {countries.map((country, i) => (
                        <CardCountry onClick={() => goTo(`/detail/${country['CountryCode']}`)} key={i}>
                            <Header>{country['Country']}</Header>
                            <Body>
                                <H3>Confirmados: {country['TotalConfirmed']}</H3>
                                <H3>Muertos: {country['TotalDeaths']}</H3>
                                <H3>Recuperados: {country['TotalRecovered']}</H3>
                            </Body>
                        </CardCountry>))}
                </DivFlex>
            </div>
        </Fragment>

    );
};

export default Page;
