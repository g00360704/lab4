import Card from 'react-bootstrap/Card';
// Create a functional component called BookItem that takes 'props' as its argument.
function BookItem(props){
return(
    <div>
            <card>
      <Card.Header>{props.mybook.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <img src={props.mybook. thumbnailUrl}></img>
          <footer>
          {props.mybook.authors[0]}
          </footer>
        </blockquote>
    </Card.Body>.
    </card>
</div>
);
}
// Export the BookItem component to make it available for use in other parts of the application.
export default BookItem;
