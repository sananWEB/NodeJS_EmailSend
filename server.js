const express=require("express");
const nodemiler=require("nodemailer")
require("dotenv").config();
const app=express();

//step 1
 let trans=nodemiler.createTransport({
     service:"gmail",
     auth:{
         user:process.env.ID,
         pass:process.env.PASS
     }
 })

 //step2
 let mailOptions={
     from:"muhammad.sanan.bsse-2018a@cecosian.edu.pk",
     to:"sanankhan16@gmail.com, muhommaddaniyal1@gmail.com",
     cc:"sanankhan16@gmail.com",
     bcc:"sanankhan16@gmail.com",
     subject:"testing nodemiler to send mail",
     text:"its work! now you can send email from nodeJS"
 };

 //step 3

 trans.sendMail(mailOptions,(err,data)=>{
     if(err){
         console.log("something is wrong email does not send !",err)
     }
     else{
         console.log("Hurry! Email Send!!!!!")
     }
 });


app.listen(5000,()=>{console.log("server works!")})