import Book from "../book";
import "./assets/Style.css"

function Bookdetail(props) {
    return (
        <div className="book-list">
            {props.booksdata.map((data) => (

                <Book key={data.id} bookdata={data}></Book>
            ))}

        </div>
    )
}

export default Bookdetail;
