import React from 'react';
import ContentRowWrapper from './styled-components/wrappers/ContentRowWrapper';
import Badge from './styled-components/Badge';

import placeholder from '../../assets/placeholder.png';

export default class ContentRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const {info} = this.props;
        return (
            <ContentRowWrapper>
                <Badge src={placeholder} />
                Rocket Name - {info.rocket.rocket_name}
            </ContentRowWrapper>
        );
    }
}