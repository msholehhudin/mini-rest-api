import app from "./app";

const PORT = 3000

if(process.env.NDOE_ENV != 'test'){
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}