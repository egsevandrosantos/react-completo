import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response, json, error;
    setLoading(true);
    try {
      response = await fetch(url, options);
      json = await response.json();
    } catch (err) {
      error = err.message;
    } finally {
      setError(error);
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
