import { useState } from "react";

function Create() {
    // Define a React component called 'Create' for adding new books with a form.

    // Initialize state variables for book title, cover, and author using the 'useState' hook.
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Define a function to handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log the entered book information (title, cover, author) when the form is submitted.
        console.log("Title: " + title +
            " Cover: " + cover +
            " Author: " + author);
    }

    // Render the create book form with input fields and a submit button.
    return (
        <div>
            <h2>This is my Create Component</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Create Book"
                    />
                </div>
            </form>
        </div>
    );
}

export default Create;
