import React from "react";
import { useState } from "react";
import "./array.css";

function Array() {
  // If the length of the element's string is 0 then display helper message 
  function required(inputtx) 
  {
    if (inputtx.value.length == 0)
     { 
        alert("message");  	
        return false; 
     }  	
     return true; 
   } 
  const [inputarr, setInputarr] = useState([]);

  const [inputdata, SetInputdata] = useState({
    Name: "",
    Order: "",
    Location: "",
  });

  function changehandle(e) {
    SetInputdata({
      ...inputdata,
      [e.target.name]: e.target.value,
    });
  }

  let { Name, Order, Location } = inputdata;
  function changhandle() {
    setInputarr([
      ...inputarr,
      {
        Name,
        Order,
        Location,
      },
    ]);

    console.log(inputdata, "show me my input");
    SetInputdata({ Name: "", Order: "", Location: "" });
  }
  let delethandle = (i) => {
    let newdataArr = [...inputarr];
    newdataArr.splice(i, 1);
    setInputarr(newdataArr);
  };

  return (
    <div className="one">
      <form  name="form1" action="#" onsubmit="required()">
      <input
        type="text"
        autoComplete="off"
        name="Name"
        value={inputdata.Name}
        onChange={changehandle}
        placeholder="Enter Name"
        required="required"
      />
      <input
        type="text"
        autoComplete="off"
        name="Order"
        value={inputdata.Order}
        onChange={changehandle}
        placeholder="Enter the Order"
        required="required"
      />
      <input
        type="text"
        autoComplete="off"
        name="Location"
        value={inputdata.Location}
        onChange={changehandle}
        placeholder="Location"
        required="required"
      />
      </form>

      <button id="add" onClick={changhandle}>Add Order</button>
      <br />
      <div class="table">
      <table border={4} width="30%" cellPadding={20} id="grow">
        <tbody>
          <tr>
            <td>Sr.No</td>
            <th>Name </th>
            <th>Order</th>
            <th>Location</th>
            <th>Options</th>
          </tr>
          {inputarr.length < 1 ? (
            <tr>
              <td colSpan={4}>NO data Enter yet !</td>
            </tr>
          ) : (
            inputarr.map((info, ind) => {
              return (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{info.Name}</td>
                  <td>{info.Order}</td>
                  <td>{info.Location}</td>
                  <td>
                    <button id="remove" onClick={() => delethandle(ind)}>
                      Delete Order
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default Array;
