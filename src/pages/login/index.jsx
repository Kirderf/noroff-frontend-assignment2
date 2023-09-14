import React from "react";
import InputField from "../../components/InputField";

const Login = () => {
  return (
    <section className="flex flex-col relative">
      <div className=" bg-yellow w-full h-96 flex items-center justify-center">
        <div className="centering"></div>
      </div>
      <div className="centering">
        <div className="shadow-2xl rounded-2xl h-auto w-full flex flex-col justify-center items-start">
          <div className="flex flex-wrap h-auto p-10 w-full">
            <InputField placeHolder={"Any translaterino?"} />
          </div>
          <div className="w-full bg-purple rounded-b-2xl h-12 flex justify-start items-center">
            <div className="w-auto m-5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
