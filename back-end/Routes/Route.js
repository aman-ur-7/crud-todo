const express = require('express')
const router = express.Router();
const User = require('../models/User');

router.post('/create' , async (req, res)=>{

    // const userAdded = await new user();
    // userAdded.name = req.body.name
    // userAdded.email = req.body.email
    // userAdded.age = req.body.age
    // const userData = userAdded.save();
    // res.status(201).json({message:'its working'})


    const {name , age , email} = req.body;

    try {
        const userAdded = await new User({
            name:name,
            email:email,
            age:age
        })
        const userCreate = await userAdded.save()
    } catch (error) {
        console.error(error)
    }

})


/*read */

router.get('/read' , async (req , res)=>{

    
    try {
        const userRead = await User.find({})
        res.status(200).json(userRead)
    } catch (error) {
        console.log(error)
    }
})

/*get single uer */
router.get('/user/:id' ,async(req, res)=>{
    
    const {id} = req.params
    try {
        const singleUser = await User.findById({_id:id})
        res.status(200).json(singleUser)
    } catch (error) {
        console.log(error)
    }
});

/*delete */

router.delete('/:id' ,async(req, res)=>{
    
    const {id} = req.params
    try {
        const deleteUser = await User.findByIdAndDelete({_id:id})
        res.status(200).json('it was deleted')
    } catch (error) {
        console.log(error)
    }
});

/*updata */
router.patch('/:id' ,async(req, res)=>{
    
    const {id} = req.params
    const {name , email , age} = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id , req.body , {
            new:true,
        })
        res.status(200).json(updateUser)
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;