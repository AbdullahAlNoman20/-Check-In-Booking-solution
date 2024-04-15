import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const Profile = ({ children }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="">
      <Helmet>
        <title>Check-In | User Profile</title>
      </Helmet>
      <section className="p-6 dark:bg-sky-900 dark:text-gray-900">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-100">
            <div className="space-y-2 col-span-full lg:col-span-1 border-r-4 border-black">
              <p className="font-extrabold text-3xl animate__animated animate__bounce">
                Profile
              </p>
            </div>
            <div
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              data-aos-duration="2000"
              data-aos="zoom-in"
            >
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm font-bold">
                  Name
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Name"
                  className="border p-2  w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm font-bold">
                  Photo URL
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm font-bold">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder="Bio"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <button type="button" className="btn btn-outline btn-success">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Profile;
