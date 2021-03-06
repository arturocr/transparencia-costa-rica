import React, { useState } from 'react';
import Tab from './tab';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div>
      <ol className='flex'>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={(tab) => setActiveTab(tab)}
            />
          );
        })}
      </ol>
      <div className='border-t border-green-700'>
        {children.map((child) =>
          child.props.label !== activeTab ? undefined : child.props.children
        )}
      </div>
    </div>
  );
};

export default Tabs;
