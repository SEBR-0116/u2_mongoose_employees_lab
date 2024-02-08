const db = require('../db')
const { Company } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const companies = [ 
        { 
        company_name: "Dunder Mifflin",
        location: "Scranton, PA",
        product: "paper",
        type: "private",
        established: 2003
    },
    { 
        company_name: "HotDogs on a Stick",
        location: "Los Angeles, CA",
        product: "hotdogs",
        type: "public",
        established: 1989
    },
    { 
        company_name: "Toys R Us",
        location: "NewYork, NY",
        product: "toys",
        type: "private",
        established: 1979
    },
    { 
        company_name: "Levis",
        location: "Inglewood, CA",
        product: "jeans",
        type: "public",
        established: 1993
    }]

    await Company.insertMany(companies)
    console.log('inserted companies!')
}

const run = async () => {
    await main()
    db.close()
}

run()