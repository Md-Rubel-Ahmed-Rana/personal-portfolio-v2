import app from "./app";
import { connectDb } from "./config/database";

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`The portfolio server is running on port: ${port}`);
  await connectDb();
});
