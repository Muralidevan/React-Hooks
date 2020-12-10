import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [posts,setPosts] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            setPosts(response.data)
            
        }).catch((err) => {
            
        });
        
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.map((post)=>{
                        return(
                    <li key={post.id}>{post.title}</li>

                        )

                    })
                }
            </ul>
        </div>
    )
}

export default DataFetching
