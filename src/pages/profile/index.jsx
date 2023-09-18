import React from "react";
import AuthGuard from "../auth/AuthGuard";
import { useSelector, useDispatch } from "react-redux";
import { addTranslation } from "../../store/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(addTranslation({ id: user.id, translations: [] }));
  }

  return (
    <div className="bg-yellow w-full h-44 pt-8">
      <div className="centering pb-3">
        <div className="shadow-2xl rounded-t-2xl max-h-screen w-full flex overflow-auto flex-col justify-center items-start bg-white">
          <div className="flex flex-col h-auto p-10 w-full gap-2 ">
            {user.translations.map((element, index) => (
              <div className="rounded overflow-hidden shadow-lg" key={index}>
                <div className="px-6 py-4">
                  <p className="text-gray-700 font-sans">{element}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-purple rounded-b-2xl h-14 flex justify-start items-center">
          <div className="w-auto m-5">
            <button
              onClick={handleDelete}
              className="bg-yellow hover:bg-yellow-dark text-white font-bold py-2 px-4 border-b-4 border-yellow-dark hover:border-yellow rounded"
            >
              Delete Translations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
