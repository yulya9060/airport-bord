import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Filter.scss';
import Constants from '../../Constants';

const arrivalBtn = (filter, buttonFilter) => cn({
    filter__btn: true,
    filter__btn_active: buttonFilter === filter,
});

const Filter = ({ onFilterChange, filter }) => (
    <div className="filter">
        <button
            onChange={() => onFilterChange(Constants.BY_DEPART)}
            type="submit"
            className={arrivalBtn(filter, Constants.BY_DEPART)}
        >
            Вылет
        </button>
        <button
            onChange={() => onFilterChange(Constants.BY_ARRIVE)}
            type="submit"
            className={arrivalBtn(filter, Constants.BY_ARRIVE)}
        >
            Прилет
        </button>
    </div>
);

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string,
};

Filter.defaultProps = {
    filter: Constants.BY_ARRIVE,
};

export default Filter;
