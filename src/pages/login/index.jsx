import React, { useEffect } from "react";
import InputField from "../../components/inputField/InputField";
import { useUser } from "../../contexts/UserProvider";
import { loginOrCreateByUsername } from "../../services/UserService";
import { Navigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useUser();

  async function handleLogin(inputWord) {
    event.preventDefault();

    const newUser = await loginOrCreateByUsername(inputWord);
    console.log(newUser);

    setUser(newUser);
  }

  useEffect(() => {
    if (user && user.user) {
      console.log("User: ", user.user.username);
    }
  }, [user]);

  return (
    <section className="flex flex-col relative">
      <div className=" bg-yellow w-full h-72 flex items-center justify-center">
        <div className="centering">
          <div className="flex">
            <img
              className="relative bg-[url('./src/assets/Backgroundicon.svg')] bg-[10%_100%] w-64 max-w-3xl bottom-0 px-3 py-1"
              style={{
                backgroundSize: "100% 120%",
                backgroundPositionY: "-12px",
                backgroundRepeat: "no-repeat",
              }}
              src="./src/assets/Logo.png"
              alt="Logo"
            />
            <div
              className="flex flex-col text-5xl pl-10 justify-center text-white font-light"
              style={{
                fontFamily: "'Love Ya Like A Sister', cursive",
              }}
            >
              <h1>Lost in Translation</h1>
              <h2>Get Started</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow w-full h-24">
        <div className="centering">
          <div className="shadow-2xl rounded-2xl h-auto w-full flex flex-col justify-center items-start bg-white">
            <div className="flex flex-wrap h-auto p-10 w-full">
              {user && <Navigate to="/translate" replace={true} />}
              <InputField placeHolder={"Username:"} onSubmit={handleLogin} />
            </div>
            <div className="w-full bg-purple rounded-b-2xl h-12 flex justify-start items-center">
              <div className="w-auto m-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
