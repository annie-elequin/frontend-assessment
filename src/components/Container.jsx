import styled from 'styled-components';

import bg from '../../assets/background.jpg';

const Container = styled.div`
    display: block;
    width: 100%;
    height: 1000px;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    position: relative;
`;
export default Container;