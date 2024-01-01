import { useState, useEffect } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
// import SmallCard from './components/SmallCard'
import MainCard from "./components/MainCard";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import instagram from "./assets/images/icon-instagram.svg";
import youtube from "./assets/images/icon-youtube.svg";
import down from "./assets/images/icon-down.svg";
import up from "./assets/images/icon-up.svg";
import SmallHolder from "./components/SmallHolder";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const facebookStyle = "facebook-border";
  const twitterStyle = "twitter-border";
  const instaStyle = "insta-border";
  const youtubeStyle = "youtube-border";
  const greenText = "text-green";
  const redText = "text-red";

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <section
        className={` w-full mx-auto h-full flex justify-center p-8 ${
          darkMode ? "dark-bg" : "light-bg"
        }`}
      >
        <div className="flex flex-col items-center h-full w-full max-w-[1080px]">
          <div className="w-full dark:bg-[var(--Top-BG-Pattern)] bg-[var(--L-Top-BG-Pattern)]  py-[20px] px-[16px]">
            <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between w-full gap-4">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold dark:text-[var(--White-Text)] text-[var(--VD-Text)]">
                  Social Media Dashboard
                </h2>
                <p className="text-[14px] dark:text-[var(--D-Text)] text-[var(--Dark-Text)]">
                  Total Followers: 23,004
                </p>
              </div>
              <div onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <div className="flex gap-2 items-center justify-between">
                    <p className="text-[14px] dark:text-[var(--White-Text)] text-[var(--D-Text)]">
                      Dark Mode
                    </p>
                    <FaToggleOn className="text-2xl cursor-pointer toggle-light" />
                  </div>
                ) : (
                  <div className="flex gap-2 items-center justify-between">
                    <p className="text-[14px]">Light Mode</p>
                    <FaToggleOff className="text-2xl cursor-pointer  toggle-dark" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap mt-8 justify-between gap-6 items-center">
            <MainCard
              imgUrl={facebook}
              borderStyle={facebookStyle}
              name="@nathaf"
              iconUrl={up}
              followers={1987}
              today={12}
              textStyle={greenText}
            />

            <MainCard
              imgUrl={twitter}
              borderStyle={twitterStyle}
              name="@nathaf"
              iconUrl={up}
              followers={1044}
              today={99}
              textStyle={greenText}
            />

            <MainCard
              imgUrl={instagram}
              borderStyle={instaStyle}
              name="@realnathaf"
              iconUrl={up}
              followers="11k"
              today={1099}
              textStyle={greenText}
            />

            <MainCard
              imgUrl={youtube}
              borderStyle={youtubeStyle}
              name="Nathan F."
              iconUrl={down}
              followers={8239}
              today={144}
              textStyle={redText}
            />
          </div>
          <SmallHolder />
        </div>
      </section>
    </>
  );
}

export default App;
