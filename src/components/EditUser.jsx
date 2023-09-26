import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import "./EditUser.css";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../state/userSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const { userId } = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    DOB: "",
    address: "",
    id: "",
  });

  const navigate = useNavigate();
  let user = {};

  useEffect(() => {
    if (userId) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      user = userList.find((item) => item.id === userId);
    }

    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      DOB: user.DOB,
      address: user.address,
      id: user.id,
    });
  }, [userId, userList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editUser({ id: formData.id, formData }));

    navigate("/React-Crud-App");
  };

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
              <Link to="/React-Crud-App">
                <Button className="d-flex justify-content-start btn-size btn-success">
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
  );
};

export default EditUser;
