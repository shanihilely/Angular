const express = require("express");
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require("body-parser")

//Load in the mongoose models
const { List, Task } = require("./db/models");
const res = require("express/lib/response");


//load middleware
app.use(bodyParser.json());



// routh handles

/*
GET /lists
purpose:get all liists
*/

app.get("/lists", (req, res) => {
  //returnn an array of all the lists in the database
    //in find- the condition is empy cuz we want all of the lists
    List.find().then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})

/*
POST /lists
purpose:create a list
*/
app.post("/lists", (req, res) => {
    //create a new list and return the new list document back to the user(which includes the id)
    //the list information (fields) will be passed in via the JSON bodt

    //1st get the list info in JSOn body
    //to do that we install in the command lime:
    //npm install body-parser --save
    let title = req.body.title;

    let newList = new List({
        title
    });

    newList.save().then((listDoc) => {
        //the full list document is returned include id
        res.send(listDoc);
    })

});

/*
PATCH /lists/:id
purpose:update a specified list
*/
app.patch("/lists/:id", (req, res) => {
    //update the specified list(list document with id in the url)with the new values specified in the JSON body of the request
    List.findOneAndUpdate({ _id: req.params.id }, {
        $set:req.body
    }).then(() => {
        res.sendStatus(200);
    })

})
  
/*
DELETE /lists/:id
purpose:delete a specified list
*/
app.delete("/lists/:id", (req, res) => {
    //delete the specified list( document with id in the url)
    List.findOneAndRemove({
        _id:req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc)
    })
})
  
/*
POST /lists/:listId/tasks
purpose:create a new task in a specipic list
*/
app.post("/lists/:listId/tasks", (req,res) => {
    //creae a new task in the list specified by the listID
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    })
    
})

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId:req.params.listId
    },
        {
        $set:req.body
    }
    ).then(() => {
        res.sendStatus(200);
    })
})


app.listen(3001, () => {
    console.log("Server is listening on port 3001")
})