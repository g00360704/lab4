import Card from 'react-bootstrap/Card';
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
export default BookItem;