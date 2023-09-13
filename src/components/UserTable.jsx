/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// src/components/UserTable.jsx
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { deleteUser } from '../state/actionCreators/userActions';
import "./UserTable.css";

const UserTable = () => {

  const userList = useSelector(state => state.user.userList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <Row>
      <Col>
        <Card className="w-100">
          <div className="d-flex justify-content-between px-3">
            <h4>
              <span className="ps-4">User Info</span>
            </h4>
            <Link to="AddUser">
              <Button className="btn-success" style={{ padding: '12px 45px' }}>
                + Add User
              </Button>
            </Link>
          </div>
          <Card.Body>
            <Table className="w-100" bordered hover>
              <thead>
                <tr>
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
                  ? userList.map((item) => (
                      <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.age}</td>
                        <td>{item.DOB}</td>
                        <td>{item.address}</td>
                        <td>
                          <Link to={`/EditUser/${item.id}`}>
                            <Button className="font-size btn-success">
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
                    ))
                  : 'No Data Available'}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserTable;
