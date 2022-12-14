import { useEffect, useState } from 'react';

const UseHost = id => {
  const [hostData, setHostData] = useState({});

  const getHostData = async () => {
    const data = await fetch(`/api/hosts/${id}`);
    setHostData(data.json);
  };

  useEffect(() => {
    getHostData();
  }, []);

  return hostData;
};

export default UseHost;
