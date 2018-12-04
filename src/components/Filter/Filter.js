import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ onFilterChange }) => (
    <div className="filter">
        <button onChange={() => onFilterChange('Departures')} type="submit" className="filter__btn">
            Вылет
        </button>
        <button onChange={() => onFilterChange('Arrival')} type="submit" className="filter__btn">
            Прилет
        </button>
    </div>
);

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
