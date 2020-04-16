import React, { useState } from "react";
import axios from "axios";
import ShowSearch from "./ShowSearchResult";

import { Button, Container } from "react-bootstrap";

export default function SearchNewBook() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function searchBook() {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    console.log(response.data.items);
    setResults(response.data.items);
  }

  return (
    <main>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <Button onClick={searchBook}>Search</Button>
      </div>
      <Container>
        {results.map((result) => {
          return (
            <ShowSearch
              key={result.id}
              id={result.id}
              title={result.volumeInfo.title}
              imageUrl={result.volumeInfo.imageLinks.thumbnail}
            />
          );
        })}
      </Container>
    </main>
  );
}
