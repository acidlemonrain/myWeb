import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
const container = {
    width:'80%',
    margin:'auto'
}
function searchKey(str) {
    return str.split('=')[1]
}
function Blog() {
    const location = useLocation();
    const [md,setMd] = useState('')
    useEffect(()=>{
        let id = searchKey(location.search)
        axios.get('/blog?id='+id).then(res=>{
            setMd(res.data)
        })
    },[])
    return (
        <div className={'md'} style={container}>
             <div dangerouslySetInnerHTML={{ __html: md }}></div>
        </div>
    )
}

export default Blog