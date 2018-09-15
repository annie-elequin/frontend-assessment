import styled from 'styled-components';
import constants from '../../../constants';
const {borderRadius, border} = constants.styles;
const {fadedWhite} = constants.styles.colors;

const HeaderContainer = styled.div`
    width: 100%;
    height: 130px;
    background-color: ${fadedWhite};
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
    border: ${border};
    box-sizing: border-box;
    position: relative;
`;
export default HeaderContainer;