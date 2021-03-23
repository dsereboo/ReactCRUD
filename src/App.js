import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUserForm from './components/AddUserForm';
import { useState } from 'react';
import Users from './components/Users';



function App() {
  const initalState=[
    {id:"dsnkn768", name:"Daniel", age:"15", grade:"9"},
    {id:"ds66n768", name:"Abena", age:"17", grade:"10"},
    {id:"ds99n768", name:"Adwoa", age:"17", grade:"10"}
  ]

  const [users,setUsers]=useState(initalState)

  const addUser=(user)=>{
    user.id=Math.floor(Math.random()).toString()
    setUsers([...users, user])
  }

  const deleteUser=(id)=>{
    console.log("click")
    const undeletedUsers=users.filter(user=> id!==user.id)
    setUsers(undeletedUsers)
  }
  

  return (
    <Container>
      <Row>
        <Col md="4">
          <AddUserForm addUser={addUser}/>
        </Col>
        <Col>
          <Users userData={users} deleteUser={deleteUser}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
