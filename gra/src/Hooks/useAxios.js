import axios from "axios";
import { useEffect, useState } from "react";

 function useAxios(url) {
    const [data, SetData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const getData = async () => {
           setIsLoading(true)
    try{
        const result = await axios.get(url)
         SetData(result.data);
    }catch (error){
        setError(error.message);
    }finally {
        setIsLoading(false);
    }
};
getData();
    },[url]);
    return{data, isLoading,error};
};

export default useAxios;