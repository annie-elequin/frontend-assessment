import styled, {css} from 'styled-components';
import constants from '../../constants';
import Label from './Label';
const {colors} = constants.styles;

const RowItem = styled(Label)`
    // min-width: 10%;
    font-size: .8em;
    // flex-grow: 1;
    color: ${colors.darkGray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: table-cell;
    cursor: default;

    &:hover {
        border-bottom: 5px solid transparent;
    }

    img {
        max-width: 30px;
        vertical-align: middle;
    }

    svg {
        cursor: pointer;
        vertical-align: middle;
    }

    ${props => props.width && css`
        // flex-basis: ${props.width}%;
    `}
    ${props => props.sm && css`
        // flex-basis: 5%;
    `}
    
    ${props => props.lg && css`
        // flex-basis: 35%;
    `}
`;
export default RowItem;