const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./trellodata.db");
const dayjs = require("dayjs");
const port = "5000";

db.serialize(function () {
  db.run(
    "CREATE TABLE projects (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, createdAt TEXT, status TEXT)"
  );
  db.run(
    "CREATE TABLE boards (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, projectId INT)"
  );
  db.run(
    "CREATE TABLE cards (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, boardId INT)"
  );
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/projects", (req, res) => {
  db.all("SELECT * FROM projects", (err, rows) => {
    res.json(rows);
  });
});

app.post("/projects", (req, res) => {
  const todo = req.body;
  db.run(
    "INSERT INTO projects (title, description, createdAt, status) VALUES (?, ?,?,?)",
    [
      todo.title,
      todo.description,
      dayjs().format("YYYY-MM-DD hh:mm"),
      todo.status || "active",
    ],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Todo created" });
    }
  );
});

app.put("/projects/:id", (req, res) => {
  const todo = req.body;
  db.run(
    "UPDATE projects SET title = ?, description = ? WHERE id = ?",
    [todo.title, todo.description, req.params.id],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Todo updated" });
    }
  );
});

app.patch("/projects/:id", (req, res) => {
  const todo = req.body;
  db.run(
    "UPDATE projects SET status = ? WHERE id = ?",
    [todo.status, req.params.id],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Project Status updated" });
    }
  );
});
app.delete("/projects/:id", (req, res) => {
  db.run("DELETE FROM projects WHERE id = ?", [req.params.id], function (err) {
    if (err) {
      return res.send(err.message);
    }
    res.json({ message: "Todo deleted" });
  });
});

// boards

app.get("/boards/:projectId", (req, res) => {
  db.all(
    "SELECT * FROM boards WHERE projectId = ?",
    [req.params.projectId],
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.post("/boards", (req, res) => {
  const board = req.body;
  db.run(
    "INSERT INTO boards (title, description, projectId) VALUES (?, ?, ?)",
    [board.title, board.description, board.projectId],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Board created" });
    }
  );
});

app.put("/boards/:id", (req, res) => {
  const board = req.body;
  db.run(
    "UPDATE boards SET title = ?, description = ? WHERE id = ?",
    [board.title, board.description, req.params.id],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Board updated" });
    }
  );
});

app.delete("/boards/:id", (req, res) => {
  db.run("DELETE FROM boards WHERE id = ?", [req.params.id], function (err) {
    if (err) {
      return res.send(err.message);
    }
    res.json({ message: "Board deleted" });
  });
});

// cards

app.get("/cards/:boardId", (req, res) => {
  db.all(
    "SELECT * FROM cards WHERE boardId = ?",
    [req.params.boardId],
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.post("/cards", (req, res) => {
  const card = req.body;
  db.run(
    "INSERT INTO cards (title, description, boardId) VALUES (?, ?, ?)",
    [card.title, card.description, card.boardId],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Card created" });
    }
  );
});

app.put("/cards/:id", (req, res) => {
  const card = req.body;
  db.run(
    "UPDATE cards SET title = ?, description = ? WHERE id = ?",
    [card.title, card.description, req.params.id],
    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.json({ message: "Card updated" });
    }
  );
});

app.delete("/cards/:id", (req, res) => {
  db.run("DELETE FROM cards WHERE id = ?", [req.params.id], function (err) {
    if (err) {
      return res.send(err.message);
    }
    res.json({ message: "Card deleted" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
