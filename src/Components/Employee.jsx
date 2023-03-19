import React ,{useState} from 'react'
import axios from 'axios';

const Employee = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        groups:"",
      });
    
      const handleNot=(e)=>{
    alert("Data added sucessfully")
      }
    
      const handleChange = (e) => {
        const newData = { ...formData };
        newData[e.target.id] = e.target.value;
        setFormData(newData)
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://upthinks.onrender.com/data", {
          name: formData.name,
          email: formData.email,
          groups: formData.groups,
        }).then((res) => {
          console.log(res.data);
        })
      };
  return (
    <div>
          <form onSubmit={(e) => handleSubmit(e)}>
      <div
        className="mainDiv">
        <input
          type="text"
          value={formData.name}
          id="name"
          className="inputTag"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          value={formData.email}
          id="email"
          className="inputTag"
          placeholder="Enter Email"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          value={formData.groups}
          id="groups"
          className="inputTag"
          placeholder="Enter Groups"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="submit"
          value="Add data"
          className="btn"
          onClick={(e)=>handleNot(e)}
        />
      </div>
    </form>
      
    </div>
  )
}

export default Employee
