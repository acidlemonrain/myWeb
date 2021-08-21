import { Card, Space } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';
const container = {
    width:'80%',
    margin:'auto'
}

function Blogs() {
    const [blogs,setBlogs] = useState([])
     useEffect(()=>{
        axios.get('http://localhost/blogs').then(res=>{
            const {data} = res 
            const transfer  = data.map(item=>{
                return {title:item,description:item}
            })
            setBlogs(transfer)
        })
     },[])
    return (

        <div style={container}>

                <Space direction="vertical"  style={{ width: '100%' }} >
                    {blogs.map(item =>
                        <Card title={item.title}   extra={  <Link to={`/blog?id=${item.title}`}>More</Link>} >

                            <p>   {item.description}  </p>
                        </Card>
                    )}
                </Space>
           
        </div>
    )
}

export default Blogs