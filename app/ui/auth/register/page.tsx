"use client";
import axios from "axios";
import { useState } from "react";
import {useRouter} from 'next/navigation'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const registerAccount = async (event: any) => {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    await axios
      .post("http://localhost:8000/auth/register", data)
      .then((response) => {
        setErrors({});
        router.push('/ui/dashboard');
      })
      .catch((error) => {
        if(error.response.status === 400){
          setErrors(error.response.data.message);
        }else{
          setErrors({});
          window.alert(error.response.data.message);
        } 
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen px-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              onSubmit={registerAccount}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4 md:mr-2">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Name"
                  onChange={(event) => setName(event?.target.value)}
                />
                {errors && <span className="text-red-700 text-sm">{errors[0]}</span>}
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/ui/auth/login"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
