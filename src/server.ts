import { creatApp } from "./app.js";

const PORT = 3000
const app = creatApp();

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}/db-health`)
})