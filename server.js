const express = require('express');
const app = express();
const PORT = process.env.PORT || 3200
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get("/", (req,res) => {
    res.json({
      "slackUsername": "Samuel Fapohunda",
      "backend": true,
      "age": 20,
      "bio": "My name is Samuel Fapohunda. I am 20 years old and a student of the University of Lagos"
    })
})

app.get("*", (req,res) => {
    res.json({
       msg: 'Page not found'
    })
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});