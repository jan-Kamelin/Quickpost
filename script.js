// Store posts in an array
let posts = [];

// Get references to HTML elements
const input = document.getElementById("pokiPana");
const button = document.getElementById("oPana");
const postList = document.getElementById("panaAle");

// Function to add a post
function addPost(content) {
  const post = {
    id: posts.length + 1,
    content: content,
    timestamp: Date.now()
  };
  
  posts.push(post)
  displayPost(post);
}

// Function to show the post on the screen
function displayPost(post) {
  const li = document.createElement("li");
  li.textContent = post.content;
  panaAle.appendChild(li);
}

// When button is clicked
button.addEventListener("click", () => {
  const content = input.value;
  if (content.trim() === "") {
    alert("o pana e sitelen a!");
    return;
  }
  addPost(content);
  input.value = "";
});
