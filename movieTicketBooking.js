// 1) Online movie ticket booking


// Requirements: You can book a movie ticket, select seats, make payment and get the ticket. You need to design a database schema for storing all the data by this ticket booking system.


// The system includes:


// City
// Movie theatres (there can be multiple theatres in one city)
// Movie halls (there can be multiple halls in one theatre)


// movie (movie can be in different languages)
// Ticket
// Payment


// Other:
// - User can book multiple tickets at a time and select available seats.

// Related task: Design rest api for this system.

const mongoose = require("mongoose")

const movieTicktModel = mongoose.Schema({
    city:{
        type:String
    },
    theatre : {
        theatreName : {
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
    booking:{
        userId : {
            type : Id (ref)
        },
        transactionId : {
            type : Id
        },
        seatId : {
            type :Id
        },
        date:{
            type : String
        },
        amount:{
            type:Number
        }
    }
})

module.exports = mongoose.model("ticket" , movieTicktModel)