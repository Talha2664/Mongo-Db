use("ecommerce")

db.products.find({}, { name: 1, price: 1, _id: 0 })

// Filter by Field
db.products.find({ category: "Electronics" })

// Using Comparison Operators
db.products.find({ price: { $gt: 1000 } }) // greater than 1000
db.products.find({ price: { $gte: 1000, $lte: 50000 } })