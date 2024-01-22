import express from "express";
import cors from "cors";


// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-7725781667080467-012118-b65dfd61887cca6c19720ceca5cd8fb2-647396149'});

const app = express()
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req,res)=> {
    res.send("Sou el server :)");
});

app.post("/create_preference", async (req,res)=> {
    try{
        const body = {
            items: [
            {
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price:Number(req.body.price),
                currency_id: " MXN",
            },
            ],
            back_urls:{
                success:"https://www.youtube.com/@onthecode",
                failure:"https://www.youtube.com/@onthecode",
                pending:"https://www.youtube.com/@onthecode",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });
    }
});
app.listen(port, ()=> {
console.log(`El servidor esta corriendo en el puerto ${port}`);
});