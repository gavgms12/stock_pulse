"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const BaseController_1 = require("./BaseController");
const Usuario_1 = require("../classes/Usuario");
class UsuarioController extends BaseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.usuarios = [];
    }
    criarUsuario(dados) {
        try {
            const errors = this.validateRequired(dados, ['nome', 'email', 'senha']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }
            // Verificar se email já existe
            const emailExiste = this.usuarios.some(u => u.email === dados.email);
            if (emailExiste) {
                return this.error('Email já cadastrado');
            }
            const usuario = new Usuario_1.Usuario(Date.now().toString(), dados.nome, dados.email, dados.senha);
            this.usuarios.push(usuario);
            return this.success(usuario, 'Usuário criado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    obterUsuario(id) {
        try {
            const usuario = this.usuarios.find(u => u.id === id);
            if (!usuario) {
                return this.error('Usuário não encontrado');
            }
            return this.success(usuario);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    listarUsuarios() {
        try {
            return this.success(this.usuarios);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    atualizarUsuario(id, dados) {
        try {
            const usuario = this.usuarios.find(u => u.id === id);
            if (!usuario) {
                return this.error('Usuário não encontrado');
            }
            if (dados.nome)
                usuario.nome = dados.nome;
            if (dados.email)
                usuario.email = dados.email;
            return this.success(usuario, 'Usuário atualizado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    deletarUsuario(id) {
        try {
            const index = this.usuarios.findIndex(u => u.id === id);
            if (index === -1) {
                return this.error('Usuário não encontrado');
            }
            this.usuarios.splice(index, 1);
            return this.success(null, 'Usuário deletado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    autenticar(email, senha) {
        try {
            const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
            if (!usuario) {
                return this.error('Credenciais inválidas');
            }
            return this.success(usuario, 'Login realizado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
}
exports.UsuarioController = UsuarioController;
