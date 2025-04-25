import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts/post1.md")
      .then((res) => res.text())
      .then((text) => setPosts([text]));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My React Blog</h1>
      {posts.map((post, index) => (
        <pre key={index}>{post}</pre>
      ))}
    </div>
  );
}

export default App;