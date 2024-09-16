
import "./src/assets/Style.css"



function Book(props) {
    return (
        <div className="book-card">

            <img src={props.bookdata.Coverimg} alt="" width="200px" height="200px" className="book-cover" />
            <div >
                <h2 className="book-title">{props.bookdata.title}</h2>
                <p className="book-author">{props.bookdata.author}</p>
            </div>
        </div>
    )
}
export default Book;