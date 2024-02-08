const mongoose = require('mongoose')
const CompanySchema = require('./company')
const EmployeeSchema = require('./employee')

const Company = mongoose.model('Company', CompanySchema)
const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = {
    Company,
    Employee
}
