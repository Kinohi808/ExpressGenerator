const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the partnerSchema
const partnerSchema = new Schema(
{
    name: {
    type: String,
    required: true,
    unique: true,
    },
    image: {
    type: String,
    required: true,
    },
    featured: {
    type: Boolean,
    default: false,
    },
    description: {
    type: String,
    required: true,
    },
},
{
    timestamps: true, // Automatically add createdAt and updatedAt fields
}
);

// Create the Partner model from the partnerSchema
const Partner = mongoose.model('Partner', partnerSchema);

// Export the Partner model
module.exports = Partner;
