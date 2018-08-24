const app = "I don't do much.";

const token = '7d7345792391189943a1344aa5e8797a6cc67fd5'
=======
const token = 'YOUR_TOKEN_HERE'
>>>>>>> 528867e67d61efe7bb2e1c77e9cf35022d4cce61
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
<<<<<<< HEAD
}).then(res => res.json()).then(json => console.log(json));
=======
}).then(res => res.json()).then(json => console.log(json));
>>>>>>> 528867e67d61efe7bb2e1c77e9cf35022d4cce61
