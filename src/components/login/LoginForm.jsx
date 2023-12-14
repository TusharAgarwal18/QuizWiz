import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const users = [
  {
    name: "satya@gmail.com",
    pass: "1234",
  },
  {
    name: "tushar@gmail.com",
    pass: "3422",
  },
  {
    name: "souvik@gmail.com",
    pass: "3294",
  },
  {
    name: "debjeet@gmail.com",
    pass: "1278",
  },
];

const LoginForm = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    const isValid = users.filter((r) => {
      return r.name === formDataObj.email && r.pass === formDataObj.pass;
    });
    alert(isValid.length ? "Login successful" : "Login failed");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="pass" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
