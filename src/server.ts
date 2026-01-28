import app from "./app";
const PORT: Number = 5000;

app.listen(PORT, () => {
  console.log(`server working at http://localhost:${PORT}`);
});
