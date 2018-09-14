import React from 'react';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import Content from './Content';

import '../index.scss';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <ContentWrapper>
                    <Content />
                </ContentWrapper>
            </Container>
        );
    }
}