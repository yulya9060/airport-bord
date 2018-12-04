import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    onInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    onChange = () => {
        const { search } = this.state;
        const { onSearchByBumber } = this.props;
        if (search.trim().length) {
            onSearchByBumber(search);
        }
    };

    onResetSearchValue = () => {
        console.log('onResetSearchValue');
        this.setState({ search: '' });
    };

    render() {
        const { search } = this.state;
        return (
            <div className="search">
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={this.onInputChange}
                    className="seacrh_text"
                    placeholder="Введите номер рейса"
                />
                <button
                    onClick={this.onChange}
                    className="search__btn search__btn_marginRight"
                    type="submit"
                >
                    Поиск
                </button>
                <button onClick={this.onResetSearchValue} className="search__btn" type="submit">
                    Очистить
                </button>
            </div>
        );
    }
}

Search.propTypes = {
    onSearchByBumber: PropTypes.func.isRequired,
};
export default Search;
