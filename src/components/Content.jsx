import React from 'react';
import autoBind from 'react-autobind';
import axios from 'axios';
import Title from './styled-components/Title';
import constants from '../constants';
import ContentHeader from './ContentHeader';
import ContentRow from './ContentRow';
import Loader from './styled-components/Loader';

import loaderUrl from '../../assets/loader.svg';

export default class Content extends React.Component {
    constructor() {
        super();
        autoBind(this);

        this.state = {
            data: [],
            ascending: false,
            filteredData: [],
            isFetching: false
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        this.setState({isFetching: true});
        axios.get(constants.apiRoute).then(res => {
            this.setState({data: res.data, filteredData: res.data, isFetching: false})
        });
    }
    sortData(label) {
        if (label === 'Launch Date') {
            this.setState({ascending: !this.state.ascending});
        }
    }
    filterData(filters) {
        this.setState({isFetching: true});
        const {data} = this.state;
        const filteredData = data.filter(row => {
            let valid = true;
            if (filters.landSuccess && row.launch_success !== true) { valid = false; }
            if (filters.reused && !this.isReused(row.reuse)) { valid = false; }
            if (filters.withReddit && !this.hasReddit(row.links)) { valid = false; }
            return valid;
        });
        this.setState({filteredData: filteredData, isFetching: false});
    }
    isReused(reuse) {
        for (const key of Object.keys(reuse)) {
            if (reuse[key]) {
                return true;
            }
        }
        return false;
    }
    hasReddit(links) {
        for (const key of Object.keys(links)) {
            if (key.match("^reddit_.*")) {
                return true;
            }
        }
    }
    render() {
        const {filteredData, isFetching, ascending} = this.state;
        ascending ?
        filteredData.sort((a, b) => new Date(a.launch_date_utc) - new Date(b.launch_date_utc)) :
        filteredData.sort((a, b) => new Date(b.launch_date_utc) - new Date(a.launch_date_utc));
        const rows = filteredData.map(row => <ContentRow key={row.flight_number} info={row} />);
        return (
            <React.Fragment>
                <Title>SpaceX Launches</Title>
                <ContentHeader
                    refreshData={this.fetchData}
                    sortData={label => this.sortData(label)}
                    filterData={filters => this.filterData(filters)}
                    ascending={ascending}
                />
                {isFetching ? <Loader src={loaderUrl} /> : rows}
            </React.Fragment>
        );
    }
}

