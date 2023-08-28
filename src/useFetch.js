import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const abortControll = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortControll.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fatrch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => {
      abortControll.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
