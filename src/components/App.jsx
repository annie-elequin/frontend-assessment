import React from 'react';
import AppContainer from './styled-components/containers/AppContainer';
import ContentWrapper from './styled-components/wrappers/ContentWrapper';
import Content from './Content';

import '../index.scss';

const App = () => {
    return (
        <AppContainer>
            <ContentWrapper>
                <Content />
            </ContentWrapper>
        </AppContainer>
    );
}
export default App;