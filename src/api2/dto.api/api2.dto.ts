import { Timestamp } from "typeorm";

export class Api2Dto {
    id: number;
    nome: string;
    senha: string;
    email: string;
    updateAt: Timestamp;
    createdAt: Timestamp;

    
  }