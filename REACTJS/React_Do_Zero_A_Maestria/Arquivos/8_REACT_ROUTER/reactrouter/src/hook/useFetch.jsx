import { useState, useEffect } from "react";


export const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {

         setLoading(true);

         try {
            const res = await fetch(url)
            const json = await res.json();
            setData(json);

         }
         catch (error) {
            setError("Houve um erro ao listar");
         }

         setLoading(false);
      }
      fetchData();

   }, [url]);

   return {data, loading, error}

}