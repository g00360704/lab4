import BookItem from "./BookItem";

function Books(props){
    // This component takes a 'props' object as an argument.
  // It is intended to render a list of books passed in 'props.myBooks'.
    return props.myBooks.map(
         // Use the map() function to iterate over each book in 'props.myBooks' and generate a list of BookItem components.
        (book)=>{ 
            return <BookItem mybook={book} key={book.isbn}></BookItem>
        }
);
}
// Export the Books component for use in other parts of the application.
export default Books;
