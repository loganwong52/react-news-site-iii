import ArticleList from "../components/ArticleList"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import ArticleTeaser from "../components/ArticleTeaser"

function HomePage({ articles }) {

    return (
        <div>


            <h2>All Articles:</h2>
            <ArticleList articles={articles} />
        </div>
    )
}

export default HomePage