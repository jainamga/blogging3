import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap';
import { getCurretUserDetail } from '../auth';
import axios from 'axios';
import authHeader from '../services/auth-header';

const AddPost=()=> {
  const [response, setResponse] = useState(null);
  const [userId, setuserId] = useState(null);
const [post,setPost] = useState({
    title:"newwwwwwwww",
    content:"newwwwwwwwww",
    // category:"1"

})


useState({



})

const API_URL2 = 'http://localhost:8087/api/user/${userId}/category/1/posts';

  useEffect(() => {
    axios.post(API_URL2,post , { headers: authHeader() })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      const user = JSON.parse(localStorage.getItem('user'));
      setuserId(user.id);  
  }, []);
//const[token,setToken]=useState(undefined)

const[user,setUser]=useState(undefined)
useEffect(()=>{
    setUser(getCurretUserDetail());
    console.log(user);
    
    console.log(JSON.parse(localStorage.getItem("accessToken")));
})

const createPost = (event) =>{
    event.preventDefault();
    console.log(post);
    axios.post(`http://localhost:8087/api/user/${userId}/category/1/posts`,post , { headers: authHeader() })
    .then((res) => {
      setResponse(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
const fieldChanged=(event)=>{
  setPost({...post,[event.target.name]:event.target.value}) 
  console.log(post);

}

    



  return (
    <div className='wrapper'>
        <Card>
            <CardBody>
            <h3>whats happening</h3>
            <Form>
                <div className='my-3'>
                    <Label for="title">
Post title
                    </Label>
                    <Input type = "text" id="title" name='title' placeholder='Enter here' onChange={fieldChanged}>
                    
                    </Input>  
                </div>
                <div className='my-3'>
                    <Label for="content">
Post Content
                    </Label>
                    <Input style={{height:'150px'}} type = "textarea" id="content" placeholder='Enter here' name='content' onChange={fieldChanged}>
                    
                    </Input>  
                </div>
                <div className='my-3'>
                    <Label for="category">
Post Category
                    </Label>
                    <Input  type = "select" id="category" placeholder='Enter here'>
                    <option>Programming</option>
                    <option>b</option>
                    <option>v</option>
                    <option>d</option>
                    </Input>  
                </div>
                <Container className='text-center'>
                <Button color='primary' onClick={createPost}>
                   Create Post 
                </Button>
                </Container>
            </Form>
            </CardBody>
        </Card>
        AddPost</div>

  )
}

export default AddPost;