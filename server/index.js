import express from "express";
import bodyParser from "body-parser";
import Pusher from "pusher";
import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

const pusher = new Pusher({
  // connect to pusher
  appId: process.env.APP_ID,
  key: process.env.APP_KEY,
  secret: process.env.APP_SECRET,
  cluster: process.env.APP_CLUSTER
});

app.get("/", function(req, res) {
  // for testing if the server is running
  res.send("all green...");
});

app.post("/pusher/auth", function(req, res) {
  console.log('in pusher auth')
  console.log(req.body)
  const username = req.body.username;
  const pokemonIds = req.body.pokemonIds;
  const teamMemberIds = req.body.teamMemberIds;

  console.log("pokemon ids: ", pokemonIds);
  console.log("team member ids: ", teamMemberIds);

  const userIndex = users.findIndex(item => {
    return item.username === username;
  });

  if (userIndex === -1) {
    // replace with find
    users.push({
      username,
      pokemonIds,
      teamMemberIds
    });

    if (users.length === 2) {
      const playerOneIndex = 0;
      const playerOne = users.splice(playerOneIndex, 1)[0];

      const playerTwoIndex = 0;
      const playerTwo = users.splice(playerTwoIndex, 1)[0];

      // trigger a message to each players. the message contains the IDs of the Pokemon of their opponent

      pusher.trigger("private-user-" + playerOne.username, "opponent-found", {
        playerOne,
        playerTwo
      });

      setTimeout(() => {
        pusher.trigger(
          "private-user-" + playerTwo.username,
          "opponent-found",
          {
            playerOne,
            playerTwo
          }
        );
      }, 3000);
    }

    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    // const auth = pusher.authenticate(socketId, channel);
    // const auth = pusher.authenticateUser(socketId, channel);
    const auth = pusher.authenticate(socketId, channel);

    res.send(auth);
  } else {
    res.status(400);
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
