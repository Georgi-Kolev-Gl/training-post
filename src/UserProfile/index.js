import { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./User.module.scss";

export default function UserProfile() {
  const [selectedTab, setSelectedTab] = useState("posts");
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState([]);
  const [counter, setCounter] = useState(0);


  const { userId } = useParams();

  // Only when the user id change
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [userId]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/${selectedTab}`)
      .then((res) => res.json())
      .then((res) => setUserData(res));
  }, [userId, selectedTab]);


  const onTabChange = (eventKey) => {
    setSelectedTab(eventKey);
    setCounter(counter + 1);
  };

  return (
    <div>
      <div className={styles.userInfoContainer}>
        <div className={styles.imageContainer}>
          <Avatar className={styles.avatar} alt={user.name} src="" />
        </div>
        <div className={styles.infoWrapper}>
          <h2>{user.name}</h2>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.email}</p>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey={selectedTab} onSelect={onTabChange}>
        <Nav.Item>
          <Nav.Link eventKey="posts">Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="albums">Albums</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="todos">Todos</Nav.Link>
        </Nav.Item>
      </Nav>

      {selectedTab === "posts" && <h2>Posts</h2>}
      {selectedTab === "albums" && <h2>Albums</h2>}
      {selectedTab === "todos" && <h2>Todos</h2>}

      {JSON.stringify(userData)}
    </div>
  );
}
