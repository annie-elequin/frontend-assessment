import styled, {css} from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;

const Label = styled.div.attrs({
    // dynamic styles
    flexbasis: props => {
        switch(props.size) {
            case 'sm': return '3%';
            case 'md': return '5%';
            case 'lg': return '35%';
            default: return '10%';
        }
    },
    topborder: props => {
        let ret = '';
        props.ascending ? ret = `5px solid ${colors.teal}` : ret = '5px solid transparent';
        return ret;
    },
    bottomborder: props => {
        let ret = '';
        props.ascending ? ret = '5px solid transparent' : ret = `5px solid ${colors.teal}`;
        return ret;
    }
})`
    font-size: .9em;
    line-height: 35px;
    padding-left: 10px;
    color: ${colors.darkBlue};
    flex-grow: 1;   
    align-item: center;

    flex-basis: ${props => props.flexbasis};
    border-top: ${props => props.topborder};
    border-bottom: ${props => props.bottomborder};

    ${props => props.active ? css`
        cursor: pointer;
    `: css`
        border-top: 5px solid transparent; 
        border-bottom: 5px solid transparent;
    `}
`;
export default Label;