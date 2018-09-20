import styled from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;

const Title = styled.h1`
    text-align: center;
    font-size: 4em;
    padding-top: 25px;
    color: white;
    margin: 0px 0px 20px;
    background: -webkit-linear-gradient(${colors.white}, ${colors.lightGray});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export default Title;