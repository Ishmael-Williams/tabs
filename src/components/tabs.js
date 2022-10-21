import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

//Component for managing tabs: tracking active tabs, displaying active tab content, and displaying list of tabs
class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label,
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }


    render() {
        //setup variables referenced in the return statement 
        //Object destructuring
        const {
          onClickTabItem,
          noProp, //Example that destructing a prop the object doesn't have is possible, but it has no content as the object never had the prop named
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
          // Render list of tabs
          <div className="tabs">
            <ol className="tab-list">
              {/* for each child (tab), generate a 'label' object holding all child props */}
              {children.map((child) => {
                const { label } = child.props;
                return (
                  // For each tab, Render the component using provided arguments
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>
            {/* Render active tab content? */}
            <div className="tab-content">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        );
      }
    }
    
    export default Tabs;