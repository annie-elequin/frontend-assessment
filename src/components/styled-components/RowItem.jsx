import styled, {css} from 'styled-components';
import constants from '../../constants';
import Label from './Label';
const {colors} = constants.styles;

const RowItem = styled(Label)`
    font-size: .8em;
    color: ${colors.darkGray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: table-cell;
    cursor: default;
    border-top: 5px solid transparent; 
    border-bottom: 5px solid transparent;

    img {
        max-width: 30px;
        vertical-align: middle;
    }

    svg {
        cursor: pointer;
        vertical-align: middle;
    }
`;
export default RowItem;