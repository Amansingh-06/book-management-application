import { list } from "./mook"
import Bookdetail from "./Bookdetail"
import "./assets/Style.css"
import { useState } from "react"

function App() {
  const [searchtext, setsearchtext] = useState("");
  const [filteredbooks, setfilteredbooks] = useState(list);
  const [noBooksFound, setNoBooksFound] = useState(false);

  function handlesearch() {
    const filterbook = list.filter((book) =>
      book.title.toLowerCase().includes(searchtext.toLowerCase())
    );

    if (filterbook.length > 0) {
      setfilteredbooks(filterbook);
      setNoBooksFound(false);
    } else {
      setfilteredbooks([]);  // Clear the list when no books are found
      setNoBooksFound(true); // Set noBooksFound to true
    }
  }

  return (
    <>
      <div className="mainheading">
        <h2 className="Heading">Book Management Application</h2>
        <div className="searchbox">
          <input
            type="text"
            className="inputbox"
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button className="btn" onClick={handlesearch}>Search</button>
        </div>
      </div>

      {noBooksFound ? (
        <h2 className="nobooksfound">No Books Found</h2>
      ) : (
        <Bookdetail booksdata={filteredbooks} />
      )}
    </>
  )
}

export default App;
