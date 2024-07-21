import { Link } from "react-router-dom";
import Button from "./component/Button";
import TextField from "./component/TextField";
import { FaEye, FaMobile, FaUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export async function register(user) {
    return axios.post('http://127.0.0.1:8000/user/register/api/', user, 
      {headers: {'Content-Type': 'application/json'}, withCredentials: true});
}

function SignUp() {
    const [inputs, setInputs] = useState({});
    
    function handleChange(e) {
      var name = e.target.name;
      var value = e.target.value;
      setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(inputs);

      const user = {
        first_name: inputs.firstName,
        last_name: inputs.lastName,
        phone_number: inputs.phoneNumber,
        age: inputs.age,
        gender: "Male",
        password: inputs.password,
      }

      console.log(user);

      register(user).then(response => {
        if (response.status == 200) {
          console.log(response.data);
        }
      });

    }

    return <div className="font-[sans-serif] bg-gray-50 h-lvh">
    <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[160px] sm:p-6 p-4">
      <h4 className="sm:text-3xl text-2xl font-bold text-white">Create your free account</h4>
    </div>

    <div className="mx-4 mb-4 -mt-16">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md">
        
        <div className="grid md:grid-cols-2 gap-8">
          <TextField 
            label="First Name"
            placeholder="Enter First Name"
            type="text"
            name="firstName"
            handleChange={handleChange}
            value={inputs.firstName}>
              <FaUser className="w-[18px] h-[18px] absolute right-4 cursor-pointer" fill="#bbb" stroke="#bbb"/>
          </TextField>

          <TextField 
            label="Last Name"
            placeholder="Enter Last Name"
            type="text"
            name="lastName"
            handleChange={handleChange}
            value={inputs.lastName}>
              <FaUser className="w-[18px] h-[18px] absolute right-4 cursor-pointer" fill="#bbb" stroke="#bbb"/>
          </TextField>
          
          <TextField 
            label="Mobile No."
            placeholder="Enter mobile number"
            type="text"
            name="phoneNumber"
            handleChange={handleChange}
            value={inputs.phoneNumber}>
              <FaMobile className="w-[18px] h-[18px] absolute right-4 cursor-pointer" fill="#bbb" stroke="#bbb"/>
          </TextField>
          
          <TextField 
            label="Age"
            placeholder="Enter Age"
            type="number"
            name="age"
            handleChange={handleChange}
            value={inputs.age}>
          </TextField>

          <div>
            <label htmlFor="countries" className="text-gray-800 text-[15px] mb-2 block">Gender</label>
            <select id="countries" 
            className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600">
              <option selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <TextField 
            label="Password"
            placeholder="Enter password"
            type="password"
            name="password"
            handleChange={handleChange}
            value={inputs.password}>
              <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" fill="#bbb" stroke="#bbb"/>
          </TextField>
          
          <TextField 
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            type="password"
            name="confirmPassword"
            handleChange={handleChange}
            value={inputs.confirmPassword}>
              <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" fill="#bbb" stroke="#bbb"/>
          </TextField>
        </div>

        <div className="mt-8">
          <Button type="submit" text="Register" onClick={() => {console.log("Login clicked")}} />
        </div>
        <p className="text-sm mt-8 text-center text-gray-800">I have an account? <Link to="/login" className="text-primary-600 font-semibold tracking-wide hover:underline ml-1">Log in here</Link></p>
      
      </form>
    </div>
  </div>
}

export default SignUp;