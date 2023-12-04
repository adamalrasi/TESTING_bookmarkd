import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Homepage = (props) => {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 390) {
        // console.log("mobile");
        setIsMobile(true);
      } else {
        // console.log("desktop");
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <section className=" text-white text-3xl font-mono">
        <div className="">
          {isMobile ? (
            <div>
              <h3>Hello, {props.token.user.user_metadata.username}</h3>
              <ul className="m-3 text-2xl underline">
                <li>My Current Read</li>
                <li>My Profile</li>
                <li>My Book Recommendation</li>
                <li>My Friends</li>
                <li>Settings</li>
              </ul>
              <button
                className="border p-2 hover:text-blue-400"
                onClick={handleLogout}
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <div className="h-screen flex flex-col items-center justify-center">
              <div className="max-w-md">
                <h3 className="text-white p-3">
                  Hello, {props.token.user.user_metadata.username}
                </h3>
                <p>
                  For an optimal mobile experience, please resize your browser
                  window to a mobile size screen. This will ensure you have
                  access to all of the website's features.
                </p>
              </div>
              <button
                className="mt-4 border bg-white text-gray-900 font-bold p-2 pt-3 hover:text-blue-700 "
                onClick={handleLogout}
              >
                LOG OUT
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Homepage;
