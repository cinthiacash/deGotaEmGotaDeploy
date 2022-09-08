import { Postagem } from "./Postagem"

export class User{
public id: number
public nome: string
public usuario: string
public senha: string
public foto: string
public usuarioCpf: string
public usuarioCnpj: string
public postagens: Postagem[]

}