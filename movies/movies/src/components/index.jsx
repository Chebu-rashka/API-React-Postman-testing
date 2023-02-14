import React, { useEffect, useState } from "react";
import Details from "./Detail";
import Movie from "./movie";
export const accessToken = "d488d127c2msh825d019c44d33ecp12549cjsn5cd3eb736b01";
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
export default function SwiftKanban() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const dInput = useDebounce(input, 300);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "90e3748dedmshb648a361e42e785p1f5b80jsn865a9a0b2215",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  const fetchMovies = (query) => {
    setLoading(true);
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.d);
        setMovies(response.d);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies(dInput);
  }, [dInput]);

  const [...results] = movies;
  // o element=type uldsen 7g n items ruu hadgalna

  return (
    <>
      {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
      <div className="bg-gray-200 p-4 rounded-xl">
        IMDb Movies
        <input
          className="w-full px-4 py-4 rounded-2xl shadow-xl border-none"
          type="text"
          placeholder="search by title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {loading ? (
          <p>
            Loading <span className="animate-spin inline-block">-</span>
          </p>
        ) : (
          results?.map((movie, movieId) => {
            return (
              <Movie
                item={movie}
                key={movieId}
                itemId={movieId}
                onClick={() => {
                  setVisible(true);
                  setCurrent(movie);
                }}
              />
            );
          })
        )}
      </div>
      <div
        className={` transition-all fixed h-screen bg-black/60 flex items-center justify-center
      z-50 top-0 bottom-0 right-0 left-0 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      >
        <button
          className="w-16 h-16 border rounded-full absolute top-5 right-5 "
          onClick={() => {
            setVisible(false);
          }}
        >
          Close
        </button>
        <div
          className={`bg-white w-1/2 h-[800px] rounded-2xl shadow
         transform duration-1000 transition-all ${
           visible ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"
         }`}
        >
          <Details {...current} />
        </div>
      </div>
    </>
  );
}
