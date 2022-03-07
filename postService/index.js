const express      = require('express');
const app          = express();
const cors         = require("cors");
const bodyparser   = require("body-parser");
const port         = process.env.PORT || 3015;


app.use(bodyparser.json());


//Een post aanmaken
app.post('/posts',async (req,res)=>{
    try{
        let ts = new Date().toTimeString();
        let value = req.body.waarde;
        console.log('uitkomst : ' + value);
        
        let result = 0;//3/0;
        //Voor de demo even geen response laten zien.
        //res.send(result);
        
    }catch(e){
       throw e;
    }
    
    
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
    


