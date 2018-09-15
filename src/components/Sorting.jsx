import React from 'react';
import SortingWrapper from './styled-components/wrappers/SortingWrapper';
import Label from './styled-components/Label';

export default class Sorting extends React.Component {
    constructor() {
        super();

        this.state = {};
    }
    render() {
        return (
            <SortingWrapper>
                <Label>Badge</Label>
                <Label>Rocket Name</Label>
                <Label>Rocket Type</Label>
                <Label active>Launch Date</Label>
                <Label grow align="left">Details</Label>
                <Label>ID</Label>
                <Label>Article</Label>
            </SortingWrapper>
        );
    }
}