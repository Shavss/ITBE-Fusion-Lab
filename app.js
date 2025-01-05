const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('3D City Web Viewer API');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
