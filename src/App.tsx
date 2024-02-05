import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css'

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>();
    useEffect(() => {
        axios.get(`/attendance/statistics`).then(response => {
            setData(response.data.response);
            setIsLoading(false);
        })
    }, []);
    return (
        <>
            {
                !isLoading && <h1>안녕하세요<br/>{JSON.stringify(data)}</h1>
            }
        </>
    )
}

export default App
