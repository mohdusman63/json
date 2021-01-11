import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  let [score, setScore] = useState(0);
  // let [redo, setRedo] = useState(0);
  // let [undo, setUndo] = useState(0);
  let [ball, setBall] = useState(6);
  let [lastClicked, setLastClicked] = useState([]);

  const clickHandler = (e) => {
    if (ball === 0) {
      alert("Over is ended");
      return;
    }
    ball--;
    let value = parseInt(e.target.value);
    //setLastClicked(value)
    setScore(score + value);
    setBall(ball);
    setLastClicked((preValue) => {
      return [...preValue, value];
    });
    //console.log(ball)
  };
  const redoHandler = (e) => {};
  const undoHandler = () => {
    let countBall = parseInt(ball);
    let getScore = parseInt(score);
    //console.log(countBall,getScore,lastClicked)
    //setBall(parseInt(countBall) + 1);
    //setScore(getScore-lastClicked.pop() );
    console.log(lastClicked);
    //console.log(lastClicked.pop());
    let lastValue = lastClicked.pop();
    console.log(lastValue);
    setScore(getScore - lastValue);
    //console.log(countBall,getScore,lastClicked)
  };

  return (
    <>
      <div className="col-md-5 mt-3 mx-auto">
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={score} readOnly />
          <div className="input-group-prepend">
            <span className="input-group-text">BallLeft</span>
            <span className="input-group-text">{ball}</span>
          </div>
        </div>

        <table className="table">
          <tbody>
            <tr></tr>
            <tr>
              <td>
                <button
                  type="button"
                  className="btn btn-info p-2"
                  value="1"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  value="2"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  value="3"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  value="4"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  value="6"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  6
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  value=""
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  out
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  value="1"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  wide
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  value="1"
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  no ball
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  value=""
                  onClick={(e) => {
                    redoHandler(e);
                  }}
                >
                  Redo
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  value=""
                  onClick={() => {
                    undoHandler();
                  }}
                >
                  Undo
                </button>
              </td>
            </tr>
            {ball ? null : 
              <tr className="text-center">
                <td>
                  <button type="button" className="btn btn-info" value="">
                    Submit
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
export default App;



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
const CricketModel = require("./cricket");


//console.log(getData)

app.post("/home", (req, res) => {
  // console.log(CricketModel)
  var InsertData = new CricketModel({
    team_name: req.body.team_name,
    players: req.body.players,
  });
  console.log(InsertData);
  InsertData.save((err, data) => {
    console.log(data);
    res.json(data);
  });
});

app.post('/fetch',async(req,res)=>{
  var getModel = await CricketModel.aggregate([
    {$match:{"team_name":"india"}},
    
    
  ]);
  console.log(getModel)
  // var k =getModel.map(obj=>obj['_id'])
         res.json({'message':getModel});
  
})
app.listen(3000);





const mongoose=require('mongoose');
var ObjectId = require('mongodb').ObjectID;
mongoose.connect('mongodb://localhost:27017/teams', {useUnifiedTopology: true});
var conn=mongoose.connection;
var CricketSchema=new mongoose.Schema({
   team_name:
   {
      type:String,
      required:true
   },
   players:[
       {
         playerName:{
            type:String,
            required:true
                    },
         status:{
            type:String,
            required:true
         }
      }
   ]
    

})
var CricketModel=new mongoose.model('crickets',CricketSchema);
module.exports=CricketModel;












