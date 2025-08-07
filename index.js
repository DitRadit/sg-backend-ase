const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json)


let cars = [
    {id:1, make: `Toyota`, model: `Fortuner`},
    {id:2, make: `Honda`, model: `WRV`},
]


app.listen(
    PORT,
    console.log(`API is running at http://localhost:${PORT}`)
)

app.get(`/`, (req, res) => {
    res.send("Hello World")
})

app.get('/cars', (req,res) => {
    res.json({
        success: true,
        data: cars
    })
})

app.get('/cars', (req,res) => {
    const search = req.query.search
    let result = cars

    if (search) {
       result = result.filter(c =>
    c.make.toLowerCase().includes(search.toLowerCase()) ||
    c.model.toLowerCase().includes(search.toLowerCase())
);

    }

    res.json({
        success: true,
        data: result,
        search: search
    })
})

app.get('/cars/:id', (req,res) =>{
    const id = parseInt(req.params.id) 
    const car = cars.find(c => c.id === id)

    if (!car) {
        return res.status(404).json({
            success : false,
            message: `Car with id ${id} not found`
        })
    }

    res.json({
        success: true,
        data: car
    })
})

app.post('/cars', (req,res) => {
    const make = req.body.make
    const model = req.body.model

    if (!make || !model){
        return res.status(400).json({
            success: false,
            message: `Make and model required`
        })
    }

    const newCar = {
        id: cars.length ? Math.max(...cars.map(c => c.id)) + 1 : 1,
        make: make,
        model: model
    }
    cars.push(newCar)
    res.status(201).json({
        success : true,
        message: `Car is success added`,
        data: newCar
    })
})

app.put('/cars/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const make = req.body.make
    const model = req.body.model
    const index = cars.findIndex(c => c.id === id)

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `car with id ${id} not found`
        })
    }

    if (!make || !model){
        return res.status(400).json({
            success: false,
            message: `Make and model required`
        })
    }

    cars[index] = { id, make, model }
    res.json({
        success: true,
        message: `Car with ${id} successfully updated`,
        data : cars[index]
    })
})

app.delete('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const originalLength = cars.length
    cars = cars.filter(c => c.id !== id)

    if (cars.length === originalLength) {
        return res.status(404).json({
            status : false,
            message: `Car with ${id} not found`
        })
    }

    res.json({
        success : true,
        message: `Car with id ${id} deleted`,
        length: cars.length
    })
})