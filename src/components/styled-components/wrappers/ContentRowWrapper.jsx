import styled from 'styled-components';
import constants from '../../../constants';
const {styles} = constants;
const {fadedWhite} = styles.colors;

const ContentRowWrapper = styled.div`
    width: 100%;
    height: 60px;
    margin: 10px 0;
    box-sizing: border-box;
    background-color: ${fadedWhite};
    border-radius: ${styles.borderRadius};
    border: ${styles.border};
`;
export default ContentRowWrapper;