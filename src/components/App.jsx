import React from 'react';
import AppContainer from './styled-components/containers/AppContainer';
import ContentWrapper from './styled-components/wrappers/ContentWrapper';
import Rocket from '../components/styled-components/Rocket';
import Content from './Content';

import '../index.scss';
import rocket from '../../assets/rocket.png';

const App = () => {
    return (
        <AppContainer>
            <ContentWrapper>
                <Content />
            </ContentWrapper>
            <Rocket src={rocket} />
        </AppContainer>
    );
}
export default App;