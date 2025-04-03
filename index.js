const express = require("express");
const moment = require("moment-timezone");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/time", (req, res) => {
    const currentTime = moment().tz("Europe/Istanbul").format("YYYY-MM-DD HH:mm:ss");
    res.json({ timezone: "Europe/Istanbul", time: currentTime });
});

app.listen(PORT, () => console.log(`TimeZone API running on port ${PORT}`));