import React, { Component } from 'react';
import BoardStore from '../../Store/BoardStore';
import Actions from '../../Actions/Actions';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import './AirportBoard.scss';
import PlaneSchedule from '../../components/PlaneSchedule/PlaneSchedule';

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

    onSearchByBumber = (searchText) => {
        Actions.searchByNumber(searchText);
    };

    onFilter = test => () => {
        console.log('test1', test);
    };

    render() {
        const {
            flights, stations, threads, search,
        } = this.state;
        return (
            <div className="airportBord">
                <h3 className="airportBord__title">Табло</h3>
                <Filter onFilterChange={this.onFilter} />
                <Search onSearchByBumber={this.onSearchByBumber} />
                <div className="flights">
                    <PlaneSchedule
                        flights={flights}
                        threads={threads}
                        stations={stations}
                        searchStr={search}
                    />
                </div>
            </div>
        );
    }
}

export default AirportBord;
