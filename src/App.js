import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function App() {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td> <Button variant="info">View</Button>{' '}</td>
          <td> <Button variant="info">Edit</Button>{' '}</td>
          <td> <Button variant="danger">Delete</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default App;


