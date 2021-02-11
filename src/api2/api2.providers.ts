import { Connection } from 'typeorm';
import { Api2 } from './api2.entity';



export const api2Providers = [
  {
    provide: 'API2_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Api2),
    inject: ['2DATABASE_CONNECTION'],
  },

];

