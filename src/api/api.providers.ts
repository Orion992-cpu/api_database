import { Connection } from 'typeorm';
import { Api } from './api.entity';



export const apiProviders = [
  {
    provide: 'API_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Api),
    inject: ['DATABASE_CONNECTION'],
  },

];

