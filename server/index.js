import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import connectDB from './config/db.js';
import cors from 'cors';
import colors from 'colors';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

app.listen(port, console.log(`Server running on port ${port}`));
