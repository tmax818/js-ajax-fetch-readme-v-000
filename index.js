const app = "I don't do much.";

const token = '7d7345792391189943a1344aa5e8797a6cc67fd5';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }

}).then(res => res.json()).then(json => console.log(json));

