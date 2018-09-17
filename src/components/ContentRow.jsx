import React from 'react';
import ContentRowWrapper from './styled-components/wrappers/ContentRowWrapper';
import Badge from './styled-components/Badge';

import placeholder from '../../assets/placeholder.png';
import RowItem from './styled-components/RowItem';
import constants from '../constants';
const {colors} = constants.styles;

export default class ContentRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    formatDate(date) {
        const year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }

        return `${month}/${day}/${year}`;
    }
    render() {
        const {info} = this.props;

        // for a larger project, use moment.js
        const date = new Date(info.launch_date_local);
        return (
            <ContentRowWrapper>
                <RowItem md><img src={placeholder} /></RowItem>
                <RowItem>{info.rocket.rocket_name}</RowItem>
                <RowItem>{info.rocket.rocket_type}</RowItem>
                <RowItem>{this.formatDate(date)}</RowItem>
                <RowItem lg>{info.details || 'No Details'}</RowItem>
                <RowItem sm>{info.flight_number}</RowItem>
                <RowItem sm><LinkIcon fill={colors.twitterBlue} /></RowItem>
            </ContentRowWrapper>
        );
    }
}

const LinkIcon = props => {
    return (
        <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' width={props.width || '25'} height={props.height || '25'}
            viewBox='0 0 512 512'>
            <path fill={props.fill || '#010101'} d='M482.25,210.752L346.5,346.502c-37.5,37.5-98.25,37.5-135.75,0l-45.25-45.25l45.25-45.25l45.25,45.25	c12.5,12.469,32.781,12.5,45.25,0L437,165.502c12.469-12.484,12.469-32.781,0-45.266l-45.25-45.25	c-12.469-12.469-32.781-12.469-45.25,0l-48.469,48.469c-22.469-13.219-48-18.891-73.281-17.188l76.5-76.531	c37.5-37.484,98.281-37.484,135.75,0l45.25,45.25C519.75,112.471,519.75,173.268,482.25,210.752z M213.938,388.564L165.5,437.002	c-12.5,12.5-32.781,12.469-45.25,0L75,391.752c-12.5-12.469-12.5-32.75,0-45.25l135.75-135.75c12.469-12.469,32.781-12.469,45.25,0	l45.25,45.25l45.25-45.25l-45.25-45.25c-37.5-37.484-98.25-37.484-135.75,0L29.75,301.252c-37.5,37.5-37.5,98.281,0,135.75	L75,482.252c37.469,37.5,98.25,37.5,135.75,0l76.5-76.5C261.969,407.439,236.5,401.752,213.938,388.564z'
            />
        </svg>
    )
}