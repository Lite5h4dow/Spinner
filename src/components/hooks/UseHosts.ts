import { useEffect, useState } from 'react';

const UseHosts = () => {
  const [hosts, setHosts] = useState({});

  const getHostsData = async () => {
    const response = await fetch('/api/hosts');
    setHosts(response);
  };

  useEffect(() => {
    getHostsData();
  }, []);

  return hosts;
};

export default UseHosts;
