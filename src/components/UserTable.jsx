// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserData from "./Users";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./UserTable.css";

// eslint-disable-next-line react/prop-types
const UserTable = ({ userList }) => {
  let navigate = useNavigate();

  const handleDelete = (id) => {
    let index = UserData.map(function (e) {
      return e.id;
    }).indexOf(id);

    UserData.splice(index, 1);

    navigate("/");
  };

  // const handleEdit = (id, firstName, lastName, age, DOB, address) => {
  //   localStorage.setItem("firstName", firstName);
  //   localStorage.setItem("lastName", lastName);
  //   localStorage.setItem("age", age);
  //   localStorage.setItem("DOB", DOB);
  //   localStorage.setItem("address", address);
  //   localStorage.setItem("id", id);
  // };

  return (
    <Row>
      <Col>
        <Card className="w-100">
          <div className="d-flex justify-content-between px-3">
            <h4>
              <span className="ps-4">User Info</span>
            </h4>
            <Link to="AddUser">
              <Button className="btn-success" style={{padding: '12px 45px'}}>+ Add User</Button>
            </Link>
          </div>
          <Card.Body>
            <Table className="w-100" bordered hover>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>DOB</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList && userList.length > 0
                  ? // eslint-disable-next-line react/prop-types
                    userList.map((item) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.age}</td>
                          <td>{item.DOB}</td>
                          <td>{item.address}</td>
                          <td>
                            <Link to="/editUser">
                              <Button
                                onClick={() =>
                                  handleEdit(
                                    item.id,
                                    item.firstName,
                                    item.lastName,
                                    item.age,
                                    item.DOB,
                                    item.address
                                  )
                                }
                                className="font-size btn-success"
                              >
                                <FaEdit />
                              </Button>
                            </Link>
                            &nbsp;
                            <Button
                              onClick={() => handleDelete(item.id)}
                              variant="danger"
                              className="font-size"
                            >
                              <FaTrashAlt />
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  : "No Data Available"}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserTable;
