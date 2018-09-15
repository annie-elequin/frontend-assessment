import styled, {css} from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;

const Label = styled.div`
    font-size: 1em;
    line-height: 35px;
    color: ${colors.darkBlue};
    flex-grow: 1;   
    border-top: 5px solid transparent; 

    ${props => props.grow && css`
        flex-basis: 35%;
    `}
    ${props => props.active ? css`
        border-bottom: 5px solid ${colors.teal};
    `: css`
        border-bottom: 5px solid transparent;
    `}
    ${props => props.align ? css`
        text-align: ${props.align};
        padding-left: 18px;
    `: css`
        text-align: center;
    `}
`;
export default Label;