import express from "express";
import bodyParser from "body-parser";
import recipeJSON from './recipe.json' assert { type: 'json' };
const app = express();
const port = 3000;



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;
app.get("/", (req, res) => {
  res.render("index.ejs", { choice: data })

});

app.post("/recipe", (req, res) => {
  var choice = req.body.choice
  var cap_choice = choice.charAt(0).toUpperCase() + choice.slice(1)
  for (var i in recipeJSON) {
    if (recipeJSON[i].name.includes(cap_choice)) {
       data = recipeJSON[i]
      break;
    }
  }
  // }
  res.redirect("/");

});



app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
