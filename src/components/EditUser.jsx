// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserData from "./Users";
import { useNavigate } from "react-router-dom";
// import { v4 as uuid } from "uuid";

// eslint-disable-next-line react/prop-types
const EditUser = ({userList}) => {
  
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [age, setAge] = useState("");
  // const [DOB, setDOB] = useState("");
  // const [address, setAddress] = useState("");
  // const [id, setId] = useState("");
  // const navigate = useNavigate();

  // let index = Users.map(function (e) {
  //   return e.id;
  // }).indexOf(id);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let object = Users[index];

  //   object.firstName = firstName;
  //   object.lastName = lastName;
  //   object.age = age;
  //   object.DOB = DOB;
  //   object.address = address;

  //   navigate("/");
  // };

  // useEffect(() => {
  //   setFirstName(localStorage.getItem("firstName"));
  //   setLastName(localStorage.getItem("lastName"));
  //   setAge(localStorage.getItem("age"));
  //   setDOB(localStorage.getItem("DOB"));
  //   setAddress(localStorage.getItem("address"));
  //   setId(localStorage.getItem("id"));
  // }, []);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    DOB: "",
    address: "",
    id: ""
  });

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // eslint-disable-next-line react/prop-types
  //   let updatedUserList = userList.map(Users => 
  //     Users.id === formData.id ? formData : Users
  //   );

    
  //   navigate("/");
  // };

  // let index = Users.map(function (e) {
  //   return e.id;
  // }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let object = UserData[index];

    object.firstName = formData.firstName;
    object.lastName = formData.lastName;
    object.age = formData.age;
    object.DOB = formData.DOB;
    object.address = formData.address;
    object.id = formData.id;

    navigate("/");
  };

  
  // console.log(updatedUserList);

  useEffect(() => {
    const id = formData.id;
    // eslint-disable-next-line react/prop-types
    const user = userList.find(user => user.id === id);
    console.log(id);

    if (user) {
      setFormData(user);
    }
  }, [formData.id, userList]);


  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="Mark"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Boucher"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="23"
            required
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDOB">
          <Form.Control
            type="date"
            required
            value={formData.DOB}
            onChange={(e) => setFormData({ ...formData, DOB: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Control
            type="text"
            placeholder="A 38 Karachi"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditUser;
