import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState("hidden");
  const [isMobile, setIsMobile] = useState(false);
  console.log("isMobile", isMobile);
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 390) {
        console.log("mobile");
        setDisplay("block");
        setIsMobile(true);
      } else {
        console.log("desktop");
        setDisplay("hidden");
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="w-screen h-screen bg-indigo-950 ">
        <div className="">
          {isMobile ? (
            <div className="text-white flex items-center justify-center text-center">
              <div className="grid gap-8 ">
                <div>
                  <img
                    src="https://i.pinimg.com/474x/05/9a/f8/059af8063862567722d683b24e236f52.jpg"
                    className="rounded-lg "
                    alt="logo"
                  />
                </div>
                <div>
                  <h1 className="mb-2 text-4xl font-medium ">Headline</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatem, quos, voluptatum, quia voluptates
                    magnam quas consequatur voluptas quibusdam perspiciatis
                    fugit! Quisquam voluptatem, quos, voluptatum, quia
                    voluptates magnam quas consequatur voluptas quibusdam
                    perspiciatis fugit!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-screen flex  items-center justify-center">
              <div className="max-w-md">
                <p className="text-white text-lg font-mono">
                  For an optimal mobile experience, please resize your browser
                  window to fit your phone screen. This will ensure you have
                  access to all of the website's features.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
