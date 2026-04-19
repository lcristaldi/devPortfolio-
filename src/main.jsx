import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Launcher from "./Launcher.jsx";
import BuildingBookshelfPost from "./blog-posts/BuildingBookshelfPost.jsx";
import AIDrivenUIUXPost from "./blog-posts/AIDrivenUIUXPost.jsx";
import SamIntelPostmortemPost from "./blog-posts/SamIntelPostmortemPost.jsx";
import TestFootagePost from "./blog-posts/TestFootagePost.jsx";
import "./index.css";

const POSTS = {
  "#/blog/building-bookshelf": BuildingBookshelfPost,
  "#/blog/ai-driven-uiux": AIDrivenUIUXPost,
  "#/blog/sam-intel-postmortem": SamIntelPostmortemPost,
  "#/blog/test-footage": TestFootagePost,
};

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onChange = () => {
      const next = window.location.hash;
      setHash(next);
      if (POSTS[next]) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const Post = POSTS[hash];
  if (Post) return <Post />;
  return <Launcher />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
