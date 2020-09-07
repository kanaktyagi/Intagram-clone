import React,{useState} from 'react';
import './App.css';
import Post from './Post'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Kanak Tyagi",
      caption: "Its works",
      imageUrl:"https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
    }, 
    {
      username: "Abhishek",
      caption: "Wow!!!! It works",
      imageUrl: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    }
  ])
  return (
    <div className="app">
    <div className="app__header">
    <img 
    className="app_headerImage"
    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    alt="image"
    />
    {posts.map(post => (
      <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
    ))}
    </div>
    </div>
  );
}

export default App;
