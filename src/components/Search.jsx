import ArticleList from "../components/ArticleList"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import ArticleTeaser from "../components/ArticleTeaser"


function Search({ articles }) {
    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults] = useState([])


    const handleChange = (event) => {
        let value = event.target.value
        console.log(`${value} is the new value`)

        setSearchTitle(value)
    }

    useEffect(() => {
        console.log(searchTitle === '')
        if (searchTitle !== '') {
            const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
            setResults(filteredArticles)
        }

    }, [searchTitle])


    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(event) => (handleChange(event))}
                />
                {/* <Button variant="outline-success">Search</Button> */}
            </Form>

            <div>
                {results
                    ? <div>

                        <h2>Search results:</h2>
                        {results.map((article) => (
                            <ArticleTeaser key={article.id} {...article} />
                        ))}

                    </div>

                    : ''
                }
            </div>

            <hr />
        </div>
    )
}

export default Search