import React from 'react';
import HeaderContainer from './styled-components/containers/HeaderContainer';
import Filtering from './Filtering';
import Sorting from './Sorting';

const ContentHeader = props => {
    const {refreshData, sortData, filterData, ascending} = props;
    return (
        <HeaderContainer>
            <Filtering refreshData={refreshData} filterData={filters => filterData(filters)} />
            <Sorting sortData={label => sortData(label)} ascending={ascending} />
        </HeaderContainer>
    );
}
export default ContentHeader;