const express = require("express"); //calling express from node_mdules
const bodyParser = require("body-parser");
const app = express(); //creating instance of express
const port = process.env.PORT || 3300;

app.use(express.json()); //allows us to use the json libraries in express(using bodies for POST and PUT)data

//----------------------------------
//this is the connection to my database
// const { Pool } = require("pg"); //pool allows local device to connect to your server asynchronously
// const pool = new Pool({
//   host: "localhost",
//   database: "eventonica"
// });
new Pool({
  // Make sure you swap out <user> and <password>
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/eventonica',
  // Use SSL but only in production
  ssl: process.env.NODE_ENV === 'production'
});
//~~~~~~~~~~~~~~~~~~~~RESTful routes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//---------index of events---------
app.get("/events", async (req, res) => {
  const client = await pool.connect();
  let eventsData = await client.query("SELECT * FROM events");
  client.release();
  res.json(eventsData.rows);
  // await client.end();
});
//---------index of event by ID ---------
app.get("/events/:id", async (req, res) => {
  const client = await pool.connect();
  var eventData = await client.query("SELECT * FROM events WHERE id=$1", [
    req.params.id
  ]);
  client.release();
  res.json(eventData.rows[0]); //event is data inputed by user in the url bar
});
//---------add one new event to events---------
app.post("/events", async (req, res) => {
  const client = await pool.connect();
  await client.query(
    "INSERT INTO events(name, type, location, date) VALUES($1, $2, $3, $4) RETURNING *",
    [req.body.name, req.body.type, req.body.location, req.body.date]
  );
  client.release();
  res.json([req.body]);
});

//---------edit one event from events---------
app.put("/events/:id", async (req, res) => {
  const client = await pool.connect();
  var oldEvent = client.query(function (eventsFunc) {
    return req.params.id == eventsFunc.id;
  });
  oldEvent.location = req.body.location;
  oldEvent.date = req.body.date;
  res.json(oldEvent);
  var found = await client.query("SELECT * FROM events WHERE id=$1", [
    req.params.id
  ]);
  await client.query(
    "UPDATE events SET location = ($1),date = ($2) WHERE id = ($3)",
    [req.body.location, req.body.date, req.params.id]
  );
  client.release();
});

//---------delete one event from events---------
app.delete("/events/:id", async (req, res) => {
  const client = await pool.connect();
  var eventToDelete = client.query(function (eventsFunc) {
    return req.params.id == eventsFunc.id;
  });
  res.json(eventToDelete);
  var found = await client.query("DELETE FROM events WHERE id = $1", [
    req.params.id
  ]);
  client.release();
});

app.listen(port, () => {
  console.log(`Running server on port ${port}!`);
});

// Add this below all your other routes
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}