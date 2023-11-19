const mongoose=require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        required:[true,"Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product Price"],
        maxLength:[6,"price cannot exceed 6 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
    {
        
        url:{
            type:String,
            required:true
        }
    }
],
    category:{
        type:String,
        required:[true,"Please enter product category"],

        },
   
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports=mongoose.model('Product',productSchema)