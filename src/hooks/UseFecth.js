import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [md, setMd] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      setLoading(true);
      fetch(url)
        .then(res => {
          return res.text();
        })
        .then(text => {
          setMd(text);
          setLoading(false);
        });
    },
    [url]
  );
  return { md, loading };
}

export default useFetch;