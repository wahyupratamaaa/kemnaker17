const express = require("express");
const app = express();
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
const port = 3080;

dotenv.config();

app.use(cors());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.send("Hello Wahyu Pratama!");
});

app.get("/produk", async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      throw error;
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data produk." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
