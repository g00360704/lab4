import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    // Define a React component called 'Read' responsible for fetching and displaying book data.
    // Initialize a 'data' state variable using the 'useState' hook.
    const [data, setData] = useState([]);

    // Use the 'useEffect' hook to fetch book data from an external API when the component mounts.
    useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response) => {
                    // Update the 'data' state with the fetched book data.
                    setData(response.data.books);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    // Render a message and the 'Books' component, passing the fetched book data as a prop.
    return (
        <div>
            <h2>Hello from my Read Component</h2>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;

