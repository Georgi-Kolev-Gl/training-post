import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Input } from "@material-ui/core";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import styles from "./Search.module.scss";

export default function SearchContainer({
  onTitleInputChange,
  onBodyInputChange,
  onToggleView,

  inputValue,
  bodyValue,

  isGridView,
  posts,
}) {
  const toggleView = () => {
    onToggleView();
  };

  const inputTitleChange = (ev) => {
    onTitleInputChange(ev.target.value);
  };

  const inputBodyChange = (ev) => {
    onBodyInputChange(ev.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <Input
        placeholder="Search Posts"
        value={inputValue}
        onInput={inputTitleChange}
      />

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          {posts.map((post) => (
            <option key={post.id}>{post.title}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Input
        placeholder="Search Post Body"
        value={bodyValue}
        onInput={inputBodyChange}
      />

      <button>Filter</button>

      <div className={styles.butonki}>
        {isGridView ? (
          <BsList className={styles.icon} onClick={toggleView} />
        ) : (
          <BsGrid3X3GapFill className={styles.icon} onClick={toggleView} />
        )}
      </div>
    </div>
  );
}
