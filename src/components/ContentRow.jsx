import React from 'react';
import ContentRowWrapper from './styled-components/wrappers/ContentRowWrapper';

export default class ContentRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const {info} = this.props;
        return (
            <ContentRowWrapper>
                Rocket Name - {info.rocket.rocket_name}
            </ContentRowWrapper>
        );
    }
}