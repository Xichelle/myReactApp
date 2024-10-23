import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [posts, setPost] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // fetching the post data based on the count value
    fetch(`https://data.ny.gov/resource/w8wg-vp5f.json/`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data)
        setLoading(false)
      })
      .catch(error => console.error('Error fetching post:', error));
  }, []); // The effect depends on the count

  return (
    <div>
      <p>Address Type: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Next Address
      </button>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.map((post, i) => (
            <div key={i}>
              <h2>{post.borough}</h2>
              <p>{post.intersection_street_1}</p>
              <p>{post.intersection_street_2}</p>
              <p>{post.latitude}{post.longitude}</p>
            </div>

          ))}
        </ul>
      )}

    </div>
  );
}

export default App
