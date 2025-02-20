import { Express } from "express";
import { validaUsuario } from "./src/validacao/valida";

const app = express();
app.use(express.json());

app.post('/usuarios', async (req,res) => {
    const {nome,email} = req.body;

    const usuarioValido = validaUsuario(nome, email);
    if (usuarioValido.status) {
        await cadastra.usuario(nome, email);
                
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem})
    }
})

app.listen(9000, async () => {
    const data = new Date();
})