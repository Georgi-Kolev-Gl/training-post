import { useEffect, useState } from "react";
import Post from "./components/Post";
import styles from "./Home.module.scss";
import SearchContainer from "./components/SearchContainer";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const [isGridView, setIsGridView] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");



  useEffect(() => {
    console.log("Component mounted");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const onInput = (ev) => {
    setInputValue(ev.target.value);
  };

  const filteredPosts = posts.filter(
    (post) => post.title.includes(inputValue) && post.body.includes(bodyValue)
  );

  return (
    <div className={styles.homeWrapper}>
      <h2 className={styles.title}>Welcome, Thats your news feed!</h2>

      <SearchContainer
        onTitleInputChange={(value) => setInputValue(value)}
        onBodyInputChange={(value) => setBodyValue(value)}
        onToggleView={() => setIsGridView(!isGridView)}
        inputValue={inputValue}
        bodyValue={bodyValue}
        isGridView={isGridView}
        posts={filteredPosts}
      />

      <div
        className={isGridView ? styles.postsWrapper : styles.listViewWrapper}
      >
        {/* {isGridView ? <GridPosts posts={posts} /> : <ListPosts post={posts} />} */}

        {filteredPosts.map((post) => (
          <Post {...post} key={post.id} isUsingCardView={isGridView} />
        ))}
      </div>
    </div>
  );
}
