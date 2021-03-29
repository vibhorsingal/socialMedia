const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const UserSignup=require('../models/signup')
const verifyUser=require('../utils/passportUtil').verifyUser

const verifyCallback=(username,password,done)=>{
    UserSignup.findOne({username:username})
        .then((user)=>{
            if(!user){
                return done(null,false)
            }
            else{
                if(verifyUser(password,user.hash,user.salt)){
                    return done(null,user)
                }
                else{
                    return done(null,false)
                }
            }
        }).catch((err)=>{
            done(err)
        })
}

const strategy=new LocalStrategy(verifyCallback);

passport.use(strategy)

passport.serializeUser((user,done)=>{
    return done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    UserSignup.findById(id)
        .then((user)=>{
            done(null,user) 
        })
        .catch((err)=>{
            done(err)
        })
})
