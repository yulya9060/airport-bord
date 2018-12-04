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
        onSearchByBumber(search);
    };

    onResetSearchValue = () => {
        const { onSearchByBumber } = this.props;
        onSearchByBumber('');
        this.setState({ search: '' });
    };

    render() {
        const { search } = this.state;
        return (
            <div className="Search">
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={this.onInputChange}
                    className="Search-Text"
                    placeholder="Введите номер рейса"
                />
                <button
                    onClick={this.onChange}
                    className="Search-Btn search-Btn_marginRight"
                    type="submit"
                >
                    Поиск
                </button>
                <button onClick={this.onResetSearchValue} className="Search-Btn" type="submit">
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
