import React from 'react';
import autoBind from 'react-autobind';
import axios from 'axios';
import Title from './Title';
import constants from '../constants';

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
            <div>
                <Title>SpaceX Launches</Title>
                {/* <ContentHeader /> */}
            </div>
        );
    }
}