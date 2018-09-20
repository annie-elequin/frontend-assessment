import React from 'react';
import SortingWrapper from './styled-components/wrappers/SortingWrapper';
import Label from './styled-components/Label';

const Sorting = props => {
    const {sortData, ascending} = props;
    const labels = labelList.map(i =>
        <Label
            key={i.label}
            size={i.size}
            active={'Launch Date' === i.label}
            ascending={ascending}
            onClick={() => sortData(i.label)}>
                {i.label}
        </Label>);
    return (
        <SortingWrapper>
            {labels}
        </SortingWrapper>
    );
}
export default Sorting;

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