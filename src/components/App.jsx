import React from 'react';
import AppContainer from './styled-components/containers/AppContainer';
import ContentWrapper from './styled-components/wrappers/ContentWrapper';
import Content from './Content';

import '../index.scss';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer>
                <ContentWrapper>
                    <Content />
                </ContentWrapper>
            </AppContainer>
        );
    }
}