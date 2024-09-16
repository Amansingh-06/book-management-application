import Book from "../book";
import "./assets/Style.css"

function Bookdetail(props) {
    return (
        <div className="book-list">
            {props.booksdata.map((data) => (
                <Book bookdata={data}></Book>
            ))}

        </div>
    )
}

export default Bookdetail;
