import React from 'react';
import autoBind from 'react-autobind';
import axios from 'axios';
import Title from './styled-components/Title';
import constants from '../constants';
import ContentHeader from './ContentHeader';
import ContentRow from './ContentRow';

export default class Content extends React.Component {
    constructor() {
        super();
        autoBind(this);

        this.state = {
            data: []
        };
    }
    componentDidMount() {
        axios.get(constants.apiRoute).then(res => {
            console.log(res.data);
            this.setState({data: res.data})
        });
    }
    render() {
        const {data} = this.state;
        const rows = data.map(row => <ContentRow key={row.flight_number} info={row} />);
        return (
            <React.Fragment>
                <Title>SpaceX Launches</Title>
                <ContentHeader />
                {rows}
            </React.Fragment>
        );
    }
}