// const inquirer = require("inquirer");
// //connection available to all
// const connection = require("./index");

// const app = {};

// app.startQuestion = closeConnectionCallback => {
//   inquirer
//     .prompt({
//       type: "list",
//       message: "What action would you like to do?",
//       choices: [
//         "See all events",
//         "Look up event by ID",
//         "Add new event",
//         "Edit an event",
//         "Delete an event",
//         // "Find event by category", //will add these later
//         // "Find event by location",
//         "Exit"
//       ],
//       name: "action"
//     })
//     .then(res => {
//       const continueCallback = () => app.startQuestion(closeConnectionCallback);

//       if (res.action === "See all events") app.get(continueCallback);
//       if (res.action === "Create a new user")
//         app.createNewUser(continueCallback);
//       if (
//         res.action ===
//         "Find one event of a particular type in San Francisco next week"
//       )
//         app.searchEventful(continueCallback);
//       if (res.action === "Mark an existing user to attend an event in database")
//         app.matchUserWithEvent(continueCallback);
//       if (res.action === "See all events that a particular user is going to")
//         app.seeEventsOfOneUser(continueCallback);
//       if (
//         res.action === "See all the users that are going to a particular event"
//       )
//         app.seeUsersOfOneEvent(continueCallback);
//       if (res.action === "Exit") {
//         closeConnectionCallback();
//         return;
//       }
//     });
// };

// app.completeSentence = continueCallback => {
//   //YOUR WORK HERE
//   const questions = [
//     {
//       type: "input",
//       name: "eventType",
//       message: "What kind of event would you like to attend?",
//       default: "concert"
//       // choices: ["Concert", "Comedy Show", "Museum", "Tech Conference"]
//     },
//     {
//       type: "input",
//       name: "eventLocation",
//       message: "And where would you like to attend the event?",
//       default: "San Francisco"
//       // choices: [
//       //   "San Francisco",
//       //   "Los Angeles",
//       //   "San Diego",
//       //   "Oakland",
//       //   "Sacramento"
//       // ]
//     }
//   ];
//   inquirer.prompt(questions).then(answers => {
//     console.log(
//       "You want to go to a " +
//         answers.eventType +
//         " in " +
//         answers.eventLocation
//     );
//   });
//   //End of your work

//   continueCallback();
// };

// app.createNewUser = continueCallback => {
//   //YOUR WORK HERE

//   console.log("Please write code for this function");
//   //End of your work
//   continueCallback();
// };

// app.searchEventful = continueCallback => {
//   //YOUR WORK HERE

//   console.log("Please write code for this function");
//   //End of your work
//   continueCallback();
// };

// app.matchUserWithEvent = continueCallback => {
//   //YOUR WORK HERE

//   console.log("Please write code for this function");
//   //End of your work
//   continueCallback();
// };

// app.seeEventsOfOneUser = continueCallback => {
//   //YOUR WORK HERE

//   console.log("Please write code for this function");
//   //End of your work
//   continueCallback();
// };

// app.seeUsersOfOneEvent = continueCallback => {
//   //YOUR WORK HERE

//   console.log("Please write code for this function");
//   //End of your work
//   continueCallback();
// };

// module.exports = app;
