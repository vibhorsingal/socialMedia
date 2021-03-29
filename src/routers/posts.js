const route=require('express').Router()
const PostsModel=require('../models/posts')

route.get('/',async (req,res)=>{
    const posts=await PostsModel.find({})
    res.send(posts)
})

route.post('/',async (req,res)=>{
    const post=new PostsModel({
        username:req.user.username,
        title:req.body.title,
        body:req.body.body
    })
    console.log(post)
    const insertPost=await post.save()
    res.redirect('/')
})
module.exports=route