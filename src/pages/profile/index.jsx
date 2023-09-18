import React from "react";
import InputField from "../../components/inputField/InputField";
import AuthGuard from "../auth/AuthGuard";

const Profile = () => {
  const list = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis", "ke sadh jksdhakj", "dæ dsahjk asdhkj", "går dshjk dashkj","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis", "ke sadh jksdhakj", "dæ dsahjk asdhkj", "går dshjk dashkj"]
  return (
    <div className="bg-yellow w-full h-44 pt-8">
        <div className="centering pb-3">
          <div className="shadow-2xl rounded-2xl max-h-screen w-full flex overflow-auto flex-col justify-center items-start bg-white">
            <div className="flex flex-col h-auto p-10 w-full gap-2 ">
                {list.map((element, index) => (
                   <div class="rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                      <p class="text-gray-700 font-sans">
                        {element}
                      </p>
                    </div>
                 </div>
                ))}
            
            </div>
           
          </div>
          <div className="w-full bg-purple rounded-b-2xl h-14 flex justify-start items-center">
              <div className="w-auto m-5">
                <button className="bg-yellow hover:bg-yellow-dark text-white font-bold py-2 px-4 border-b-4 border-yellow-dark hover:border-yellow rounded">
                  Delete Translations
                </button>
              </div>
            </div>
        </div>
      </div>
  )
}

export default AuthGuard(Profile);
