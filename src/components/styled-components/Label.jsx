import styled, {css} from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;

const Label = styled.div.attrs({
    // or we can define ynamic ones
    flexbasis: props => {
        switch(props.size) {
            case 'sm': return '3%';
            case 'md': return '5%';
            case 'lg': return '35%';
            default: return '10%';
        }
    }
})`
    font-size: .9em;
    line-height: 35px;
    padding-left: 10px;
    color: ${colors.darkBlue};
    flex-grow: 1;   
    align-item: center;

    flex-basis: ${props => props.flexbasis};

    ${props => props.active ? css`
        cursor: pointer;
        border-top: 5px solid transparent; 
        border-bottom: 5px solid ${colors.teal};
        &.ascending: {
            border-top: 5px solid ${colors.teal}; 
            border-bottom: 5px solid transparent;
        }
    `: css`
        border-top: 5px solid transparent; 
        border-bottom: 5px solid transparent;
    `}
`;
export default Label;