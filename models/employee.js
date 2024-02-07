const { Schema, default: mongoose } = require ('mongoose')

const Employee = new Schema (
    {
        company_id: { type: Schema.Types.ObjectId, ref: 'company_id'},
        first_name: { type: String, required: true},
        last_name: { type: String, required: true},
        email: { type: String, required: true},
        salary_in_usd: { type: String, required: true}
    })
const subdocumentScheme = new mongoose.Schema({
            address: new mongoose.Schema({street: String, city: String, state: String, zip: Number}),
},
    { timestamps: true }
)


module.exports = Employee