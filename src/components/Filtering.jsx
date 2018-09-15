import React from 'react';
import autoBind from 'react-autobind';
import FilterWrapper from './styled-components/wrappers/FilterWrapper';
import RefreshButton from './styled-components/RefreshButton';
import constants from '../constants';
import Checkbox from './styled-components/Checkbox';
import CheckboxLabel from './styled-components/CheckboxLabel';
import Input from './styled-components/Input';
const {colors} = constants.styles;

export default class Filtering extends React.Component {
    constructor() {
        super();
        autoBind(this);

        this.state = {
            landSuccess: false,
            reused: false,
            withReddit: false
        };
    }
    handleChange(e, name) {
        this.setState({[name]: !this.state[name]});
    }
    render() {
        const {landSuccess, reused, withReddit} = this.state;
        const iconSize = '20';
        return (
            <FilterWrapper>
                <RefreshButton>
                    <RefreshIcon width={iconSize} height={iconSize} fill={colors.white} />
                </RefreshButton>
                <Checkbox onClick={e => this.handleChange(e, 'withReddit')} checked={withReddit}>
                    <input type="checkbox" defaultChecked={withReddit} />
                    <span /><label>With Reddit</label>
                </Checkbox>
                <Checkbox onClick={e => this.handleChange(e, 'reused')} checked={reused}>
                    <input type="checkbox" defaultChecked={reused} />
                    <span /><label>Reused</label>
                </Checkbox>
                <Checkbox onClick={e => this.handleChange(e, 'landSuccess')} checked={landSuccess}>
                    <input type="checkbox" defaultChecked={landSuccess} />
                    <span /><label>Land Success</label>
                </Checkbox>
            </FilterWrapper>
        );
    }
}

const RefreshIcon = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '48'} height={props.height || '48'} viewBox="0 0 48 48">
            <path fill={props.fill || 'none'} d="M24 8V2l-8 8 8 8v-6c6.63 0 12 5.37 12 12 0 2.03-.51 3.93-1.39 5.61l2.92 2.92C39.08 30.05 40 27.14 40 24c0-8.84-7.16-16-16-16zm0 28c-6.63 0-12-5.37-12-12 0-2.03.51-3.93 1.39-5.61l-2.92-2.92C8.92 17.95 8 20.86 8 24c0 8.84 7.16 16 16 16v6l8-8-8-8v6z"
            />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}