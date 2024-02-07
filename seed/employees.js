const db = require('../db')
const { Company, Employee } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const dunderMifflin = await Company.find({ company_name: 'Dunder Mifflin' })
    const HotDogsOnAStick = await Company.find({ company_name: 'HotDogs on a Stick' })
    const ToysRUs = await Company.find({ company_name: 'Toys R Us' })
    const Levis = await Company.find({ company_name:'Levis' })

    const employees = [ 
        {
            company_id: dunderMifflin[0]._id, 
            first_name: "Dwight",
            last_name: "Shrute",
            email: "DShrute@dm.com",
            salary_in_usd: 65000,
            address: {
                street: "123 Beet St",
                city: "Scranton",
                state: "PA",
                zip: 20010
            }
        },
        {
            company_id: HotDogsOnAStick[0]._id, 
            first_name: "John",
            last_name: "Sweet",
            email: "JSweet@hdoas.com",
            salary_in_usd: 35000,
            address: {
                 street: "706 Eastside St",
                 city: "Los Angeles",
                 state: "CA",
                 zip: 90036
            }
        },
        {
            company_id: ToysRUs[0]._id, 
            first_name: "Carl",
            last_name: "Graham",
            email: "cgham@toysrus.com",
            salary_in_usd: 85000,
            address: {
                 street: "9 Melville Ln",
                 city: "New York",
                 state: "NY",
                 zip: 10012
        }
    },
    {
        company_id: Levis[0]._id, 
            first_name: "Sally",
            last_name: "Richardson",
            email: "sallyrt@levis.com",
            salary_in_usd: 78000,
            address: {
                 street: "3546 Gramercy Pl",
                 city: "Inglewood",
                 state: "CA",
                 zip: 90245
            }
        }
    ]
    await Employee.insertMany(employees)
    console.log('Created employees with companies!')

}


  const run = async () => {
    await main()
    db.close()
  }
  
  run()
    