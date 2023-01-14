import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const bookmark = useLoaderData();

  return (
    <div className="bookmark">
      <h1>{bookmark.title}</h1>
      <h2>{bookmark.url}</h2>
      
      <h2>Update {bookmark.title}</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input defaultValue={bookmark.title} type="input" name="title" placeholder="bookmark name" />
        <input type="input" name="title" placeholder="bookmarks title" />
        <input type="submit" value={`update ${bookmark.title}`} />
      </Form>

      <h2>Delete Bookmark</h2>
      <Form action={`/delete/${bookmark._id}`} method="post">
      <input type="submit" value={`delete ${bookmark.title}`} />
      </Form>

    </div>
  );
}

export default Show;