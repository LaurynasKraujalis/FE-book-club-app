import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { selectNewBook } from "../../store/newBook/selectors";
import { clearNewBook } from "../../store/newBook/actions";
import ShowSearch from "./ShowSearchResult";
import SelectedBook from "./SelectedBook";

import { Button, Container } from "react-bootstrap";

export default function SearchNewBook() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const newBook = useSelector(selectNewBook);

  async function searchBook() {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    console.log(response.data.items);
    setResults(response.data.items);
    dispatch(clearNewBook());
  }

  return (
    <main>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <Button variant="danger" onClick={searchBook}>
          Search
        </Button>
      </div>
      {newBook.id ? (
        <SelectedBook
          key={newBook.id}
          id={newBook.id}
          author={newBook.author}
          title={newBook.title}
          imageUrl={newBook.imageUrl}
          description={newBook.description}
        />
      ) : (
        <Container>
          {results.map((result) => {
            return (
              <ShowSearch
                key={result.id}
                id={result.id}
                author={result.volumeInfo.authors}
                title={result.volumeInfo.title}
                imageUrl={result.volumeInfo.imageLinks.thumbnail}
                description={result.volumeInfo.description}
              />
            );
          })}
        </Container>
      )}
    </main>
  );
}
