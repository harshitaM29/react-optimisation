import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [buttonTitle, setButtonTitle] = useState('Change to decending order')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  const changeButtonTitleHandler = useCallback(() => {
    if(buttonTitle === 'Change to decending order'){
      setButtonTitle('Change to ascending order');
    }
    else {
      setButtonTitle('Change to decending order');
    } 
  
    
  }, [buttonTitle])
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} buttonTitle={buttonTitle} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeButtonTitleHandler}>{buttonTitle}</Button>
    </div>
  );
}

export default App;