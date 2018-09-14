import React from 'react';
import HeaderContainer from './styled-components/containers/HeaderContainer';
import Filtering from './Filtering';
import Sorting from './Sorting';


export default class ContentHeader extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {};
    // }
    render() {
        return (
            <HeaderContainer>
                <Filtering />
                <Sorting />
            </HeaderContainer>
        );
    }
}