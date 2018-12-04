import React, { Component } from 'react';
import BoardStore from '../../Store/BoardStore';
import FlightRow from '../../components/FlightRow/FlightRow';
import Actions from '../../Actions/Actions';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import './AirportBoard.scss';

class AirportBord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...BoardStore.initialState(),
        };
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.updateState);
        Actions.loadBoardData();
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.updateState);
    }

    updateState = () => {
        this.setState({ ...BoardStore.getStore() });
    };

    render() {
        const { flights, stations, threads } = this.state;
        return (
            <div className="airportBord">
                <h3 className="airportBord__title">Табло</h3>
                <Filter onFilterChange={text => console.log('filter', text)} />
                <Search onSearchByBumber={text => console.log(`sdsds, ${text}`)} />
                <div className="flights">
                    <ul className="flights__nav">
                        {flights.map(flight => (
                            <FlightRow
                                key={flight.uid}
                                flights={flight}
                                threads={threads}
                                stations={stations}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AirportBord;
