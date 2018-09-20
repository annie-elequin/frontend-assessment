import styled from 'styled-components';

import bg from '../../../../assets/background.jpg';

const AppContainer = styled.div`
    display: block;
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    position: fixed;
`;
export default AppContainer;