import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authHeader from '../services/auth-header';

function Trail() {

    const [response, setResponse] = useState(null);
    
const API_URL2 = 'http://localhost:8087/api/user/1';

  useEffect(() => {
    axios.get(API_URL2 + '/posts', { headers: authHeader() })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div><h1>trail</h1></div>
  )
}

export default Trail;