use("ecommerce")

// Update One
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $set: { price: 899 } }
)

// Update Many
db.products.updateMany(
{ category: "Electronics" },
{ $inc: { stock: 10 } }
)
