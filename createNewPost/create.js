const URL = "https://jsonplaceholder.typicode.com/posts";

const newForm = document.getElementById("new-post");
const newTitle = document.getElementById("new-title");
const newBody = document.getElementById("new-body");

newForm.addEventListener("submit", (e) => createNewPost(e));

async function createNewPost(e) {
  e.preventDefault();

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        title: newTitle.value,
        body: newBody.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const posts = await response.json();
    // console.log('Post has been created successfully', posts);
    alert("Post has been created");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
