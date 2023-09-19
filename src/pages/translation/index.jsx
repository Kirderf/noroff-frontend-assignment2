import React from "react";
import InputField from "../../components/inputField/InputField";

import { useDispatch, useSelector } from "react-redux";
import { addTranslation } from "../../store/userSlice";

const Translation = () => {
  const [transelation, setTranslation] = React.useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //Handles the translations of the input and adds it to the user.
  async function handleTranselation(inputWord) {
    event.preventDefault();
    setTranslation(inputWord);

    let newTranslation = [...user.translations];

    newTranslation.unshift(inputWord);

    dispatch(addTranslation({ id: user.id, translations: newTranslation }));
  }

  return (
    <section className="flex flex-col">
      <div className="relative bg-yellow w-full h-60 flex items-center justify-center">
        <div className="centering animate-ease-in animate-once animate-fade-right">
          <InputField
            placeHolder={"Any translaterino?"}
            onSubmit={handleTranselation}
          />
        </div>
      </div>
      <div className="centering">
        <div className="w-full shadow-2xl rounded-2xl h-auto mt-20 flex flex-col justify-center items-start animate-ease-in animate-once animate-fade-up">
          <div className="p-5 flex flex-wrap h-64">
            {transelation
              .toLowerCase()
              .split("")
              .filter((letter) => letter !== " ")
              .map((letter, index) => {
                return (
                  <img
                    key={index}
                    src={`./src/assets/individial_signs/${letter}.png`}
                    alt={letter}
                    className="w-16 h-16"
                  />
                );
              })}
          </div>
          <span className="grow"></span>
          <div className="w-full bg-purple rounded-b-2xl h-12 flex justify-start items-center">
            <div className="w-auto m-5 bg-white rounded-full">
              <div className="text-black p-2 font-bold text-xs">
                Transelation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Translation;
