import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login ");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currentState === "Sign Up") {
      if (!userDetails.name || !userDetails.email || !userDetails.password) {
        alert("Please fill out all fields to create an account");
        return;
      }
      setIsLoggedIn(true);
      alert("Account created successfully");
    } else if (currentState === "Login") {
      if (userDetails.email && userDetails.password) {
        setIsLoggedIn(true);
        alert("Logged in successfully");
      } else {
        alert("Please enter email and password to login");
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        name="email"
        value={userDetails.email}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        name="password"
        value={userDetails.password}
        onChange={handleInputChange}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password ?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here</p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
