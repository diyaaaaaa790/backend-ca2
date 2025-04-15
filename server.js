const express=require('express');
const app=express();
const PORT=3000;

const users=[
    {username:"alice",age:25, email:"alice@example.com"},
    {username:"bob",age:30, email:"bob@example.com"},
    {username:"charlie",age:28, email:"charlie@example.com"},

]

app.get('/user',(req,res)=>{
    const user=req.query.user;
    if(!user){
        return res.status(400).json({message:"User parameter cannot be empty"});
    };
    
    const newUser={
        id:users.length+1,
        username,
        age,
        email
    };

    const message= users[user];
    if(!message){
        return res.status(404).json({message:"User not found"});
    }

    users.push(newUser);
    res.status(200).json({messsage:"User found", data:{users}});
    
});

app.get('/',(req,res)=>{
    <h1>Hello World</h1>
})



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});