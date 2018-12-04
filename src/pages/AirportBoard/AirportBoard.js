import React, { Component } from 'react';
import BoardStore from '../../Store/BoardStore';
import Actions from '../../Actions/Actions';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import './AirportBoard.scss';
import PlaneSchedule from '../../components/PlaneSchedule/PlaneSchedule';
import Constants from '../../Constants';

class AirportBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...BoardStore.initialState(),
        };
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.updateState);
        Actions.loadBoardDataFromTo(Constants.BY_ARRIVE);
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

    onFilterChange = filter => () => {
        console.log('onFilterChange', filter);
        Actions.filterByType(filter);
    };

    render() {
        const {
            flights, stations, threads, search, filter,
        } = this.state;
        return (
            <div className="airportBord">
                <h3 className="airportBord__title">Табло</h3>
                <Filter onFilterChange={this.onFilterChange} filter={filter} />
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

export default AirportBoard;
