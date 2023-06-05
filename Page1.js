import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Page1(){
    const [inputValue, setInputValue]= usestate('');
    const history = useHistory();
    const handleSubmit = (e)=> {
        e.preventDefault();
        history.push('/page2?data=${inputValue}');
    };
    return (
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    );

}
export default Page1;