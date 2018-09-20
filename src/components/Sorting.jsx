import React from 'react';
import SortingWrapper from './styled-components/wrappers/SortingWrapper';
import Label from './styled-components/Label';

export default class Sorting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // activeLabel: 'Launch Date'
        };
    }
    render() {
        const {sortData, ascending} = this.props;
        const labels = labelList.map(i =>
            <Label
                key={i.label}
                size={i.size}
                active={'Launch Date' === i.label}
                className={ascending ? 'ascending' : 'descending'}
                onClick={() => sortData(i.label)}>
                   {i.label}
            </Label>);
        return (
            <SortingWrapper>
                {labels}
            </SortingWrapper>
        );
    }
}

const labelList = [
    {
        label: 'Badge',
        size: 'md'
    },
    {
        label: 'Rocket Name'
    },
    {
        label: 'Rocket Type'
    },
    {
        label: 'Launch Date'
    },
    {
        label: 'Details',
        size: 'lg'
    },
    {
        label: 'ID',
        size: 'sm'
    },
    {
        label: 'Article',
        size: 'sm'
    }
];