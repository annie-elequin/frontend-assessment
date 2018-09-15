import styled from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;

const RefreshButton = styled.button`
    background: transparent;
    border-radius: 100px;
    border: 2px solid ${colors.white};
    padding: 8px;
    cursor: pointer;
`;
export default RefreshButton;