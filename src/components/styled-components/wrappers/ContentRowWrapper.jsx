import styled from 'styled-components';
import constants from '../../../constants';
const {styles} = constants;
const {fadedWhite} = styles.colors;

const ContentRowWrapper = styled.div`
    width: 100%;
    height: 60px;
    margin: 10px 0;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .7);
    border-radius: ${styles.borderRadius};
    border: ${styles.border};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
export default ContentRowWrapper;