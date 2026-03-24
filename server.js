// Polyfill DOMMatrix for Node.js (required by pdf-parse/pdfjs)
if (typeof globalThis.DOMMatrix === "undefined") {
  const { DOMMatrix } = require("@napi-rs/canvas")
  globalThis.DOMMatrix = DOMMatrix
}

require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})