import {useEffect, useState} from "react";

const UseHost = () => {
  const [hostData, setHostData] = useState({});

  const getHostData = async()=>{
    const data = await fetch("/api/host")
    setHostData(data.json)
  }

  useEffect(()=>{
    getHostData();
  })

  return hostData;
}

export default UseHost
