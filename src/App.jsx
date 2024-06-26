import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LinkedInProfile>
        <CoverPhoto />
        <ProfileHeader>
          <ProfilePhoto />
          <ProfileInfo />
        </ProfileHeader>
        <AboutMe />
        <JobHistory />
        <Education />
        {/* Add more sections as needed */}
      </LinkedInProfile>
    </>
  );
}

export default App;
