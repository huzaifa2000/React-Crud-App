// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserData from "./Users";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import "./EditUser.css";
// import { v4 as uuid } from "uuid";

// eslint-disable-next-line react/prop-types
const EditUser = ({ userList }) => {
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
    id: "",
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
    const user = userList.find((user) => user.id === id);
    console.log(id);

    if (user) {
      setFormData(user);
    }
  }, [formData.id, userList]);

  return (
    <Card className="w-100">
      <div className="container">
        <Row>
          <Col className="px-4" lg="4">
            <h2 className="py-4 px-3">
              <span className="ps-2">Edit User</span>
            </h2>
          </Col>
        </Row>

        <Form className="d-grid gap-2" style={{ margin: "10px" }}>
          <Row>
            <Col lg="6">
              <div className="label">
                <Form.Label>Enter Your First Name</Form.Label>
              </div>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Control
                  type="text"
                  placeholder="Huzaifa"
                  required
                  className="p-2 input-field-color"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </Form.Group>
            </Col>

            <Col lg="6">
              <div className="label mx-10">
                <Form.Label>Enter Your Last Name</Form.Label>
              </div>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Control
                  type="text"
                  placeholder="Nadeem"
                  required
                  className="p-2 input-field-color"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <div className="label">
                <Form.Label>Enter Your Age</Form.Label>
              </div>
              <Form.Group className="mb-3" controlId="formAge">
                <Form.Control
                  type="number"
                  placeholder="23"
                  required
                  className="p-2 input-field-color"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              </Form.Group>
            </Col>

            <Col lg="6">
              <div className="label me-3">
                <Form.Label>Enter Your DOB</Form.Label>
              </div>
              <Form.Group className="mb-3" controlId="formDOB">
                <Form.Control
                  type="date"
                  required
                  className="p-2 input-field-color"
                  value={formData.DOB}
                  onChange={(e) =>
                    setFormData({ ...formData, DOB: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div className="label">
                <Form.Label>Enter Your Address</Form.Label>
              </div>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Control
                  type="text"
                  placeholder="A 38 Karachi"
                  required
                  className="p-2 input-field-color"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-3">
            <Col lg="4"></Col>

            <Col lg="2">
              <Button
                className="btn-size btn-success"
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                Submit
              </Button>
            </Col>

            <Col lg="2">
              <Link to="/">
                <Button className="d-flex justify-content-start btn-size btn-success">Back</Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
  );
};

export default EditUser;
