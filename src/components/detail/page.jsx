import React, {Component, Fragment} from 'react';
import 'react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines, DiscreteColorLegend} from 'react-vis';
import {
    MainTitle,
    DivTotalFlex,
    Body,
    CardGeneral,
    Header,
    SubTitle
} from '../mixins';


class App extends Component {
    render() {

        let detailByCountry = this.props.results.detailByCountry;
        if (detailByCountry.length === 0 || detailByCountry['message']) {
            return null;
        }

        let confirmed = [];
        let recovered = [];
        let deaths = [];
        let options = {day: "numeric", month: "long"};
        let newDate = '';
        const ITEMS = [
            'Confirmados',
            'Muertos',
            'Recuperados',
        ];

        let lastIndex = detailByCountry.length - 1;

        if (detailByCountry[lastIndex]['Country'] === '') {
            detailByCountry.splice(lastIndex, 1);
            lastIndex--;
        }

        let summary = detailByCountry[lastIndex];

        for (const day of detailByCountry) {
            newDate = new Date(day['Date']);
            newDate = newDate.toLocaleDateString("es-ES", options);
            confirmed.push({x: newDate, y: day['Confirmed']});
            recovered.push({x: newDate, y: day['Deaths']});
            deaths.push({x: newDate, y: day['Recovered']});
        }

        return (
            <Fragment>

                <MainTitle>Información general del Covid-19 en {summary['Country']}</MainTitle>

                <DivTotalFlex>
                    <CardGeneral>
                        <Header>Casos confirmados</Header>
                        <Body>{summary['Confirmed']}</Body>
                    </CardGeneral>
                    <CardGeneral>
                        <Header>Muertos</Header>
                        <Body>{summary['Deaths']}</Body>
                    </CardGeneral>
                    <CardGeneral>
                        <Header>Recuperados</Header>
                        <Body>{summary['Recovered']}</Body>
                    </CardGeneral>
                </DivTotalFlex>

                <div className="container-line-chart">
                    <SubTitle>
                        Avance del Covid-19 en {summary['Country']}
                    </SubTitle>

                    <DiscreteColorLegend style={{
                        margin: '0 auto',
                    }} orientation="horizontal" height={120} width={900} items={ITEMS}/>

                    <div className="line-chart">
                        <XYPlot margin={{bottom: 150, left: 100}} xType="ordinal" width={900} height={400}>
                            <HorizontalGridLines/>
                            <VerticalGridLines/>
                            <XAxis tickLabelAngle={-90}
                                   title="X Axis"/>
                            <YAxis title="Y Axis"/>
                            <LineSeries
                                data={confirmed}
                            />
                            <LineSeries data={recovered}/>
                            <LineSeries
                                data={deaths}
                            />
                        </XYPlot>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default App;
