import { conn } from "../config/database.js";
import { Usuario } from "../models/user.js";

export class UsuarioRepository {

    static async findAll() {
        const [results] = await conn.query(
            'SELECT * FROM user'
        );

        return results.map(u =>
            new Usuario(u.id, u.nome, u.idade, u.telefone, u.email)
        );
    }

    static async findID(id) {
        const [results] = await conn.query(
            'SELECT * FROM user WHERE id = ?',
            [id]
        );

        if (results.length === 0) return null;

        const u = results[0];
        return new Usuario(u.id, u.nome, u.idade, u.telefone, u.email);
    }

    static async findName(nome) {
        const [results] = await conn.query(
            'SELECT * FROM user WHERE nome = ?',
            [nome]
        );

        if (results.length === 0) return null;

        const u = results[0];
        return new Usuario(u.id, u.nome, u.idade, u.telefone, u.email);
    }

    static async update(id, usuario) {
        const { nome, idade, telefone, email } = usuario;

        const [result] = await conn.query(
            `UPDATE user
             SET nome = ?, idade = ?, telefone = ?, email = ?
             WHERE id = ?`,
            [nome, idade, telefone, email, id]
        );

        return result.affectedRows > 0;
    }

    static async insert(usuario) {
        const { nome, idade, telefone, email, senha } = usuario;

        const [result] = await conn.query(
            `INSERT INTO user (nome, idade, telefone, email, senha)
             VALUES (?, ?, ?, ?, ?)`,
            [nome, idade, telefone, email, senha]
        );

        return new Usuario(
            result.insertId,
            nome,
            idade,
            telefone,
            email
        );
    }

    static async deleteById(id) {
        const [result] = await conn.query(
            'DELETE FROM user WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }
    
}

