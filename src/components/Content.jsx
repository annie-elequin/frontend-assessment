import React from 'react';
import autoBind from 'react-autobind';
import axios from 'axios';
import Title from './styled-components/Title';
import constants from '../constants';
import ContentHeader from './ContentHeader';

export default class Content extends React.Component {
    constructor() {
        super();
        autoBind(this);

        this.state = {};
    }
    componentDidMount() {
        axios.get(constants.apiRoute).then(res => {
            console.log(res.data);
        });
    }
    render() {
        return (
            <React.Fragment>
                <Title>SpaceX Launches</Title>
                <ContentHeader />
            </React.Fragment>
        );
    }
}