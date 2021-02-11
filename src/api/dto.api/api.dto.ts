import { Timestamp } from "typeorm";

export class ApiDto {
    id: number;
    nome: string;
    senha: string;
    email: string;
    updateAt: Timestamp;
    createdAt: Timestamp;

    
  }