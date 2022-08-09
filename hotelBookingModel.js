// 2) Online hotel booking

// Requirements: You can book rooms for stay in your journey, make payment and get receipt of confirmation. You need to design database schema for storing all the data by this system.

// The system includes:

// City
// Hotel (there can be multiple Hotels in one city, hotel includes stays and other services)
// Stay (no of days, no of people, no of rooms, rooms type(ac/non ac), check in/out time, other service subscription(cab service, tourist guide, food))
// Payment

// Other:
// - Users can book hotel stays and can subscribe to specific additional services that the hotel is providing.

// Related task: Design rest api for this system


// Note ------> UserModel also be needed to validate, So, there should be a userModel.


const mongoose = require("mongoose")

const movieTicktModel = mongoose.Schema({
    user :{
        type : ObjectId
    },
    city:{
        type:String
    },
    hotel : {
        hotelName : {
            type:String
        },
        address :{
            type:String
        },
        theatreId : {
            type:Number
        },
        totalSeats :{
            type:Number
        },
        availableSeatLocation: [] 
    },
    stays:{
        numOfDays : {
            type : Number
        },
        numOfPeople: {
            type :Number
        },
        numOfRooms:{
            type : String
        },
        typeOfRoom :{
            enum : ["AC" , "Non-AC"]
        },
        amount:{
            type:Number
        },
        checkInTime :{
            type :String
        },
        outInTime : {
            type :String
        }
    },
    additionServices :[],
    totalAmount : {
        type:Number
    }
})

module.exports = mongoose.model("ticket" , movieTicktModel)