import Button from "./component/Button";
import TextField from "./component/TextField";
import { useState } from 'react';
import { Link } from "react-router-dom";
 
 function Login() {

  const [inputs, setInputs] = useState({});
  
  function handlerChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

    return <div className="font-[sans-serif] max-w-7xl mx-auto h-screen">
    <div className="grid md:grid-cols-2 items-center gap-8 h-full">
      <form className="max-w-lg max-md:mx-auto w-full p-6">
        <div className="mb-12">
          <h3 className="text-gray-800 text-4xl font-extrabold dark:text-white">Sign in</h3>
          <p className="text-gray-800 text-sm mt-6 dark:text-white">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
        </div>

        <TextField 
          label="Email"
          placeholder="Enter Email"
          type="text"
          name="email">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                </g>
              </svg>
        </TextField>

        <div className="mt-4">
          <TextField 
            label="Password"
            placeholder="Enter password"
            type="password"
            name="password">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
              </svg>
          </TextField>
        </div>

        <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
          <div className="flex items-center hover:cursor-pointer">
            <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 h-4 w-4 text-primary-600 focus:ring-blue-500 border-gray-300 rounded-md" />
            <label for="remember-me" className="ml-3 block text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="jajvascript:void(0);" className="text-primary-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Button text="Log in" onClick={() => {console.log("Login clicked")}} />
        </div>
        <p className="text-sm mt-8 text-center text-gray-800">Don't have an account? <Link to="/signup" className="text-primary-600 font-semibold tracking-wide hover:underline ml-1">Register here</Link></p>
      </form>

      <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#E4FE66] before:to-[#55F5A3] before:h-full before:w-3/4 before:right-0 before:z-0">
        <img src="https://oi-files-d8-prod.s3.eu-west-2.amazonaws.com/s3fs-public/50762-ous-community-seed-site-ethiopia-coco-mccabe-800x533.jpg" className="rounded-md lg:block md:block lg:w-4/5 lg:h-5/6 md:w-11/12 md:h-5/6 sm:hidden z-50 relative object-cover object-center" alt="Dining Experience" />
      </div>
    </div>
  </div>
 }

 export default Login;