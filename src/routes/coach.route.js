module.exports = app => {
    const tutorials = require("../controllers/coachController");
  
    var router = require("express").Router();
  
   
    router.post("/", tutorials.create);
  
  
    router.get("/", tutorials.findAll);
  
  
    router.get("/:id", tutorials.findOne);
  
  
    router.put("/:id", tutorials.update);
  

    router.delete("/:id", tutorials.delete);
  

    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/coaches', router);
  };