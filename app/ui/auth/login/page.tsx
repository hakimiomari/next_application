"use client";
import {  useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    await axios
      .post("http://localhost:8000/auth/login",data)
      .then((response) => {
        router.push('/ui/dashboard');
        setErrors('');
      })
      .catch((error) => {
        if(error.response.status === 400){
          setErrors(error.response.data.message);
        }else{
          setErrors('');
          window.alert(error.response.data.message);
        }
      });
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Next Login</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries for
            your digital products, while leaving the UI design on us!
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="#" className="underline">
              Get Started!
            </a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <a href="#" className="underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 flex flex-col justify-center bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                value={email}
                type="email"
                id="email"
                placeholder="Enter your email address"
                onChange={(event) => setEmail(event?.target.value)}
                className="px-4 py-2 text-black transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
              {errors && <span className="text-black text-red-700 text-sm">{errors[0]}</span>}
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-500">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event?.target.value)}
                className="px-4 py-2 text-black transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
                {errors && <div className="text-black text-red-700 text-sm">{errors[2]}</div>}
            </div>
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
