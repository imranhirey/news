const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/news',require('./routes/news'));
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
)