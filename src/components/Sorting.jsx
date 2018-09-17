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
                <Label md>Badge</Label>
                <Label>Rocket Name</Label>
                <Label>Rocket Type</Label>
                <Label active>Launch Date</Label>
                <Label lg align="left">Details</Label>
                <Label sm>ID</Label>
                <Label sm>Article</Label>
            </SortingWrapper>
        );
    }
}