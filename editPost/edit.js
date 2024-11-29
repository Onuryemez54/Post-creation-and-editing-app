const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");

const editTitle = document.getElementById("edit-title");
const editBody = document.getElementById("edit-body");
const editForm = document.getElementById("edit-form");

if (postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      editTitle.value = post.title;
      editBody.value = post.body;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const updatedTitle = editTitle.value;
  const updatedBody = editBody.value;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify({
          title: updatedTitle,
          body: updatedBody,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    alert("Post has been updated.");
    // console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
});
