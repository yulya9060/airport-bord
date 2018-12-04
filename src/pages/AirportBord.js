import React, { Component } from 'react';
import BoardStore from '../Store/BoardStore';
import Flight from '../components/Flight/Flight';
import Actions from '../Actions/Actions';

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
            <ul className="Flights">
                {flights.map(flight => (
                    <Flight
                        key={flight.uid}
                        flights={flight}
                        threads={threads}
                        stations={stations}
                    />
                ))}
            </ul>
        );
    }
}

export default AirportBord;
