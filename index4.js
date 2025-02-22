const zod = require("zod")

function validateInput(obj) {
     const Schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
     })

     const response = Schema.safeParse(obj)
     console.log(response)
}

validateInput({
    email: "soharwardiandco27@gmail.com",
    password: "passsaqib"
})