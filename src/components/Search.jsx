import { useEffect, useState } from "react";
import List from "./List";

function Search() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  const [error, setError] = useState(false)

  const emojiFinder = async () => {
    setError(false)

    try {
        if(input.length <= 1)   {
            setLists([])
            return;
        }

        const url = import.meta.env.VITE_EMOJI_URL + import.meta.env.VITE_EMOJI_KEY + `&search=${input}`;

        const response = await fetch(url);
        const data = await response.json();

        if(typeof data === 'object' &&
        !Array.isArray(data) &&
        data !== null){
            setError(true)
            return;
        }

        setLists(data); 
    } catch (error) {
        console.error("Error fetching emoji data:", error);
    }
  };

  useEffect(() => {
    emojiFinder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-white text-4xl"> ✨ Emoji Finder ✨ </h1>
      <input
        type="text"
        className="w-1/2 rounded-md py-2 px-3 outline-none border-none
            font-bold text-red-500 tracking-widest capitalize selection:bg-red-500 selection:text-white
            focus:ring-2 focus:ring-red-500 focus:border-red-500"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for emojis..."
      />

        {
            error ? <p className="text-red-500 text-2xl">No results found</p> : <List lists={lists} />
        }
    </div>
  );
}

export default Search;
