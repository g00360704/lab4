import BookItem from "./BookItem";

function Books(props){
    return props.myBooks.map(
        (book)=>{ 
            return <BookItem mybook={book} key={book.isbn}></BookItem>
        }
);
}

export default Books;