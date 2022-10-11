import type { NextPage } from 'next'
import Card from './component/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
const [userData,setUserData] = useState<any>('')

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res:any) => {
      const persons = res.data;
      setUserData({ persons });
    })
  },[]
)
console.log(userData)

  return (
   <div className='p-3'>
    

    <Card userData={userData}/>
   </div>
  )
}

export default Home
