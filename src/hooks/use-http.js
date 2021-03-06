import { useState } from "react";

export const useHttp = (requestConfig, applyData) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fecthData = async (e) => {
    e.preventDefault();
    const InputValue = requestConfig.input.current.value;
    setLoading(true);
    setIsError(null);
    try {
      const response = await fetch(`${requestConfig.url}/${InputValue}`);

      if (!response.ok) {
        throw new Error("Oops... Country not avaiable, try another country ");
      }

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setIsError(error.message);
    }

    setLoading(false);
  };

  return {
    isLoading,
    isError,
    fecthData,
  };
};

export const useRegion = (requestConfig, applyData) => {
  const [isLoading2, setLoading] = useState(false);
  const [isError2, setIsError] = useState(null);
  const fetchRegion = async (el) => {
    const valueInput = el.target.value.toLowerCase();
    setLoading(true);
    setIsError(null);
    try {
      const response = await fetch(`${requestConfig}/${valueInput}`);

      if (!response.ok) {
        throw new Error("Oops... Country not avaiable, try another country ");
      }

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setIsError(error.message);
    }

    setLoading(false);
  };

  return {
    isLoading2,
    isError2,
    fetchRegion,
  };
};
