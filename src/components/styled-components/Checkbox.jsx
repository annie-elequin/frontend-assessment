import styled, {css} from 'styled-components';
import constants from '../../constants';
const {colors} = constants.styles;
import check from '../../../assets/checkmark.svg';

const Checkbox = styled.div`
    float: right;
    height: 45px;
    margin-right: 20px;

    label {
        user-select: none;
        color: white;
        text-transform: uppercase;
        cursor: pointer;
        line-height: 40px;
    }

    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"] + span {
        position: relative;
        display: inline-block;
        top: -1px;
        width: 20px;
        height: 20px;
        margin: -1px 0px 0 0;
        margin-right: 8px;
        vertical-align: middle;
        background: transparent;
        border: 1px solid ${colors.white};
        border-radius: 3px;
    }

    ${props => props.checked && css`
        input[type="checkbox"] + span {
            background-image: url(${check});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
    `}
`;
export default Checkbox;