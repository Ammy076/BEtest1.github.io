const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case

    const habitSchema = new Schema({

        title: { type: String, required: true },
        
        userId: { type: Schema.Types.ObjectID, ref: "User" },
        
        description: String,
        
        datesCompleted: [Date],
        
        groupOfUsers: [{ type: Schema.Types.ObjectId, ref: "User" }], //the 
        
        private: Boolean
        });

const Habit = model("Habit", habitSchema);

module.exports = Habit;
