import React from 'react';
import { useLocation } from 'react-router-dom';

function Page2(){
    const location = useLocation();
    const searchParams = newURLSearchParams(location.search);
    const inputData = searchParams.get('data');
    return <h1>Input Value: {inputData}</h1>
}
export default Page2;