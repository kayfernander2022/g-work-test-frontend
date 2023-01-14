

const URL = "https://g-work-test-backend.onrender.com" 

//bookmarks loader function 
export const bookmarksLoader = async () => {
  const response = await fetch(URL + "/bookmarks")
  const bookmarks = await response.json()
  return bookmarks
}

export const bookmarkLoader = async ({params}) => {
  const response = await fetch(URL + "/bookmarks/" + params.id )
  const bookmarks = await response.json()
  return bookmarks
}