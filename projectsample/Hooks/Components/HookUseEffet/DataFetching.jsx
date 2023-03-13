import React , {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post,setPosts]= useState({})
    const [id,setId] =useState(1)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/{id}')
        .then(
            res => {
                console.log(res)
                setPosts(res.data)
            })
        .catch(err=>{
            console.log(err)
            })
        }, [])

  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
        <div>
            <h1>{post.title}</h1>
        </div>

    </div>
  )
}

export default DataFetching
