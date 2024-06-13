import Tarefa from './tarefa';
import Cliente from './Cliente';

const app = express();
app.use(express.json());

const tarefas = [];
const usuarios = [];
const clientes = [];

// Rota POST para cadastrar uma tarefa
app.post('/tarefa', (req, res) => {
    const { id, titulo } = req.body;
    const tarefa = new Tarefa(id, titulo);
    tarefas.push(tarefa);
    res.status(201).send(tarefa);
});

// Classe Usuario
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

// Rota POST para cadastrar um usuario
app.post('/usuario', (req, res) => {
    const { id, nome, email } = req.body;
    const usuario = new Usuario(id, nome, email);
    usuarios.push(usuario);
    res.status(201).send(usuario);
});

// Rota POST para cadastrar um cliente
app.post('/cliente', (req, res) => {
    const { id, nome, cnpj } = req.body;
    const cliente = new Cliente(id, nome, cnpj);
    clientes.push(cliente);
    res.status(201).send(cliente);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
