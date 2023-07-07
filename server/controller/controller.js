const User = require('../database/users')


async function signup(req,res){

    try{
        const {password,email, userName,profileUrl} = req.body

        let user = await User.findOne({
            email:email 
        })


        if(user){
            return res.status(403).send({
                message: "User with this email already exists"
            })
        }

        let userByUserName = await User.findOne({
            userName: userName
        })

        if(userByUserName){
            return res.status(403).send({
                message: "User with this username already exists"
            })
        }

        user = await User.create({
            password,email,userName,profileUrl
        })
        
        return res.send({
            message: "Registration successful"
        })
    }
    catch(err){
        return res.status(404).send({
            error: err.message
        })
    }
}

async function logIn(req,res){
    try{
        const {email, password} = req.body

        const user = await User.findOne({
            email
        })

        if(!user){
            return res.status(403).send({
                message: "User with this email does not exist",
            })
        }
        if(user.password !== password){
            return res.status(403).send({
                message: 'Wrong password'
            })
        }

        var {userName,profileUrl} = user
        return res.send({
            message: "Login successful",
            userName,email,profileUrl
        })
    }
    catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
}

module.exports  = {signup, logIn}