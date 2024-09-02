import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Avatar,Wrap,WrapItem} from '@chakra-ui/react'
import { UsersDetails } from "./Users";
import { useNavigate } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";





function AdminUserInfo() {
  const [user] = useState(UsersDetails);
  


  

  const navigate = useNavigate();

  const handleDetails = (userid) => {
    
    navigate(`/DetailsUsers/${userid}`);
    
  };
  
  console.log(user);

  return (
    <div className="container-fluid">
      <AdminNavbar />
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Profile Pic</th>
            <th>Email</th>
            <th></th>

          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {user.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>
                <h6 className="card-title">{users.name}</h6>
              </td>
              <td>

              <Wrap>
              <WrapItem>
                <Avatar name={users.name} src={users.image} />
              </WrapItem>
              </Wrap>

              </td>
              <td>
                <p className="card-text">{users.email}</p>
              </td>
              <td>
                <button onClick={() => handleDetails(users.id)} style={{borderRadius:'5px',backgroundColor:'cyan'}}>Details</button>
                {/* &nbsp;&nbsp;<button>Remove</button> */}
              </td>
              {/* <td><li className="list-group-item"> ₹ {users.offerPrice}</li></td> */}
              {/* <td><button  onClick={() => handleEdit(users.id)}>Edit</button>&nbsp;&nbsp;<button onClick={() => removeItem(users.id)}>Remove</button></td> */}
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default AdminUserInfo;
