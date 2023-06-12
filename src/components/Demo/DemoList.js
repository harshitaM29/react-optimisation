import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  console.log(props)
  const { items } = props;

  let sortedList = useMemo(() => {
    console.log("list ")
    if(props.buttonTitle === 'Change to ascending order') {
    return items.sort((a, b) => b - a);
    } else {
      return items.sort((a,b)=> a - b)
    }
  }, [items, props.buttonTitle]); 
 

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);