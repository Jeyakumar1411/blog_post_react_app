import axios from "axios"

export default axios.create({

    //npx json-server -p 3500 -w data/db.json (server lanch)

    baseURL: "http://localhost:3500"
})
