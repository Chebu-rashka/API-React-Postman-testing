// console.log("Helsssslo");

// // number :Int float double
// let a = 10;
// a = 20.334678;
// console.log(a.toFixed(2));
// // .-ees hoish heden orong taslah be?

// // string: char
// // ABC - String
// // A - Char
// // B - Char
// // C - Char

// let b = "abckjdbwkbf";
// console.log(b.charAt(2));
// console.log(b.toUpperCase());
// console.log(b.replace("abc", "t"));
// console.log(b.substring(4, 8));
// console.log(b.concat("ddd", "eee"));
// console.log(b.concat(["ddd", "eee", "dfds"]));
// console.log(b.slice(0, 4) + "bar");
// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// fetch("http://localhost:3000/todos", requestOptions)
//   .then((response) => response.json())
//   .then((result) => console.log(result)
//   .catch((error) => console.log("error", error));
const todosContainer = document.getElementById("todos");

const config = {
  method: "get",
  url: "http://localhost:3000/todos",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(response.data);
    // todosContainer.innerHTML = JSON.stringify(response.data);
    todosContainer.innerHTML = response.data
      ?.map(
        (todo) =>
          `<h1>${todo.id}.${todo.task}<code>${
            todo.status ? " 1 " : "0"
          }</code><h1/>`
      )
      .join(" ");
  })
  .catch(function (error) {
    console.log(error);
  });

// arrayg hello worldiin door renderle
