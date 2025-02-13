const URL = "https://jsonplaceholder.typicode.com/posts";

const allPosts = document.getElementById("all-posts");

document.getElementById("fetch-button").addEventListener("click", fetchPosts);

async function fetchPosts() {
  try {
    const response = await fetch(URL);
    const posts = await response.json();
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.classList.add("post");

      const postTitle = document.createElement("h2");
      postTitle.classList.add("post-title");
      postTitle.innerText = post.title;

      const postBody = document.createElement("p");
      postBody.classList.add("post-body");
      postBody.innerText = post.body;

      listItem.appendChild(postTitle);
      listItem.appendChild(postBody);

      const editLink = document.createElement("a");
      editLink.classList.add("button", "edit-button");
      editLink.textContent = "Edit";
      editLink.href = `./editPost/index.html?postId=${post.id}`;

      listItem.appendChild(editLink);

      allPosts.appendChild(listItem);
    });
  } catch (error) {
    console.error("There is an error: ", error);
    throw error;
  }
}

document.getElementById("clear-button").addEventListener("click", clearPosts);

function clearPosts() {
  while (allPosts.firstElementChild !== null) {
    allPosts.removeChild(allPosts.firstElementChild);
  }
}
