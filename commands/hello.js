module.exports = (args) => {
  const replies = ["Hello!", "Hi", "Hey there!"];
  return random(replies);
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
