const db = require('./db')
const { Employee, Company } = require('./models')

const findEmployees = async (inputCompany) => {

    const company = await Company.findOne({company_name: inputCompany})
    console.log(company)
    const employees = await Employee.find({company_id: company._id})
    console.log(employees)
}

const updateCompanyType = async (inputCompany) => {
    const company = await Company.updateOne({company_name: inputCompany}, {type: "public"})
    console.log(company)
}

const increaseOneSalary = async (inputEmail, amount) => {
    const employee = await Employee.updateOne({ email: email}, {$inc: {salary_in_usd: amount}})
    console.log(employee)
}

async function main() {
  try {
    // await findEmployees('Levis')
    // await updateCompanyType ("Toys R Us")
    await increaseOneSalary("cgham@toysrus.com")


  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()