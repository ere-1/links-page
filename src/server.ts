import app from "./app";
import connectDB from "./config/db";
const PORT: Number = 5000;

connectDB();
app.listen(PORT, () => {
  console.log(`server working at http://localhost:${PORT}`);
});
