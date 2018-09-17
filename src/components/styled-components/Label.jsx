import styled, {css} from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;

const Label = styled.div`
    font-size: .9em;
    line-height: 35px;
    padding-left: 10px;
    color: ${colors.darkBlue};
    flex-grow: 1;   
    flex-basis: 10%;
    align-item: center;
    border-top: 5px solid transparent; 

    ${props => props.sm && css`
        flex-basis: 3%;
    `}
    ${props => props.md && css`
        flex-basis: 5%;
    `}
    ${props => props.lg && css`
        flex-basis: 35%;
    `}
    ${props => props.active ? css`
        border-bottom: 5px solid ${colors.teal};
    `: css`
        border-bottom: 5px solid transparent;
    `}
`;
export default Label;