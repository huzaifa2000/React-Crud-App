// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserData from "./Users";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./AddUser.css";
import Card from "react-bootstrap/Card";

// eslint-disable-next-line react/prop-types
const AddUser = ({ setUserList }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    DOB: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    const uniqueID = ids.slice(0, 8);

    let a = formData.firstName,
      b = formData.lastName,
      c = formData.age,
      d = formData.DOB,
      f = formData.address;

    UserData.push({
      id: uniqueID,
      firstName: a,
      lastName: b,
      age: c,
      DOB: d,
      address: f,
    });

    navigate("/");
  };

  return (
    <Card className="w-100">
      <div className="container">
        <Row>
          <Col className="px-4" lg="4">
            <h2 className="py-4 px-3">
              <span
                className="ps-2"
                style={{
                  fontWeight: "600",
                }}
              >
                Add User
              </span>
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
                  className="p-2"
                  style={{ backgroundColor: "#dcdcdc" }}
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
                  className="p-2"
                  style={{ backgroundColor: "#dcdcdc" }}
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
                  className="p-2"
                  style={{ backgroundColor: "#dcdcdc" }}
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
                  className="p-2"
                  style={{ backgroundColor: "#dcdcdc" }}
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
                  className="p-2"
                  style={{ backgroundColor: "#dcdcdc" }}
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

export default AddUser;
