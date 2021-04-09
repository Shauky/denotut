import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';
import bodyParser from 'body-parser';
const serverless = require("serverless-http");

const functionName = 'serverless'

const app = express(functionName);
const data = {
  posts: [
      { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
      { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
  ],
  users: [
      { id: 123, name: "John Doe" },
      { id: 456, name: "Jane Doe" }
  ],
  comments: [
      { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
      { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ]
};

app.use(bodyParser.json());
app.use('/graphql', jsonGraphqlExpress(data));

var msg = `GraphQL server running with your data at Netlify`;
//
//
//
// import bodyParser from 'body-parser';
// const path = require('path');
// const cors = require('cors');
// const serverless = require("serverless-http");
//
// var dataFilePath = process.argv.length > 2 ? process.argv[2] : '../public/data.js';
// var data = require(path.join(process.cwd(), dataFilePath));
// var PORT = process.env.NODE_PORT || 3000;
// var app = express()
//
// const PORT = 3000;
// const app = express();
// const data = data;
// app.use('/graphql', jsonGraphqlExpress(data));
// app.listen(PORT);

// module.exports = app;
module.exports.handler = serverless(app);
