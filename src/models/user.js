const mongoose=require ('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/flight-check',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})
const validator=require('validator')

const ap=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        trim:true,
        required:true,
        validate(value)
        {
            if(!validator.isMobilePhone(value))
            {
                throw new Error('Enter valid phone number')
            }

    }},
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('Enter valid email')
            }
        }
    },
    travel:{
        type:String,
        required:true
    }    
},{
    timestamps:true
   

})

ap.pre('save',async function(op){

    const m=this
console.log('apple')
    op()
})


const User= mongoose.model('User',ap)

module.exports=User