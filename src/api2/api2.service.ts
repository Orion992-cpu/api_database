import { Injectable, Inject } from '@nestjs/common';
import { Api2Dto } from './dto.api/api2.dto';
import { Api2 } from './api2.entity';
import { Repository } from 'typeorm';
import { StatusDto } from './dto.api/status.dto';


@Injectable()
export class Api2Service {
  constructor(
    @Inject('API2_REPOSITORY')
    private api2Repository: Repository<Api2>,
    ) {}

  async getUser(): Promise<Api2[]> {
    return await this.api2Repository.find({
        select: ["id", "nome", "senha", "email", "createdAt", "updatedAt"]
        
    });
}

  async create(data: Api2Dto): Promise<StatusDto>{

  // Entity
    let api2 = new Api2()
    api2.id = data.id
    api2.nome = data.nome
    api2.senha = data.senha
    api2.createdAt = data.createdAt
    api2.updatedAt = data.updateAt
    api2.email = data.email
    
    return this.api2Repository.save(api2)
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