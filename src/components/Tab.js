import React, { Component } from 'react';
import { PropTypes } from 'prop-types'; //runs type-checking on props in a component

class Tab extends Component {
    //type checking
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
      };
    
    //On tab-click behavior, sets label so the render can read 'label' to know the new active tab
    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }
    
    //Render the tab
    render() {
        //Object and variable setup to refer to in return statement when rendering
        const {
          onClick,
          props: {
            activeTab,
            label,
          },
        } = this;

        let className = 'tab-list-item';

        if(activeTab === label) {
            className += ' tab-list-active';
        }
        
        return (
            <li className={className}
            onClick={onClick}
            >
                {label}
            </li>
        );
    }
}

export default Tab;
