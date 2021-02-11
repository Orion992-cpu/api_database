import { Injectable, Inject } from '@nestjs/common';
import { ApiDto } from './dto.api/api.dto';
import { Api } from './api.entity';
import { Repository } from 'typeorm';
import { StatusDto } from './dto.api/status.dto';


@Injectable()
export class ApiService {
  constructor(
    @Inject('API_REPOSITORY')
    private apiRepository: Repository<Api>,
    ) {}

  async getUser(): Promise<Api[]> {
    return await this.apiRepository.find({
        select: ["id", "nome", "senha", "email", "createdAt", "updatedAt"]
        
    });
}

  async create(data: ApiDto): Promise<StatusDto>{

  // Entity
    let api = new Api()
    api.id = data.id
    api.nome = data.nome
    api.senha = data.senha
    api.createdAt = data.createdAt
    api.updatedAt = data.updateAt
    api.email = data.email
    
    return this.apiRepository.save(api)
    .then((result) => {
        return <StatusDto>{
            status: true,  
            mensagem: "Usuário cadastrado com sucesso"
    }
  })
    .catch((error) => {
        return <StatusDto>{
            status: false,  
            mensagem: error
            
    }
  })

    
  }
}