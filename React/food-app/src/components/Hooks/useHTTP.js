import { useCallback, useEffect, useState } from "react";

async function sendHTTPRequest(url,config){
    const response = await fetch(url,config);

    const resData = await response.json();

    if(!response.ok){
        throw new Error(resData.message || 'Something went wrong')
    }

    return resData;
}


export default function useHTTP(url,config,initialData){
    const [data,setData]= useState(initialData)
    const[error,setError] = useState();
    const [isLoading,setIsLoading] =useState(false)

    function clearData(){
        setData(initialData);
    }


    const sendRequest =useCallback(async function sendRequest(data) {
        setIsLoading(true);
        setError(null);
        try {
            const resData = await sendHTTPRequest(url,config?.method ==='POST' ? { ...config, body: data }:{});
            setData(resData);
        } catch (error) {
            setError(error.message || 'something went wrong');
        }
        setIsLoading(false);
    },[url,config])

    useEffect(()=>{
        if((config && (config.method === 'GET' || !config.method)) || !config){
            sendRequest(url,config)
        }
    },[sendRequest,config])


    return {
        data,
        isLoading,
        error,
        sendRequest,clearData
    }
}