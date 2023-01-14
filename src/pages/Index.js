import {Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const bookmarks = useLoaderData()

  return (
    <div>
      <h2>Create a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="bookmark name" />
        <input type="input" name="url" placeholder="add url" />
        

        <input type="submit" value="create bookmark" /> 
      </Form>


      <h2>Bookmark</h2>
      <div className="container">
  {bookmarks.map(bookmark => (
    <div className="card" key={bookmark._id}> 
      <Link to={`/${bookmark._id}`}className="bookmark">
        <h1>{bookmark.url}</h1>
      </Link>
    </div>
  ))}
  </div>
  </div>
  )
      }

export default Index