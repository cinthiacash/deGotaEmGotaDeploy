import { Subtema } from "./Subtema"
import { User } from "./User"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public foto: string
    public usuarios: User
    public subtemas: Subtema
}