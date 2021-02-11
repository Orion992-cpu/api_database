import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Timestamp,
  } from 'typeorm';
  
  @Entity()
  export class Api extends BaseEntity {
  @PrimaryColumn({
    type: "int4",
    name: "id",
    unique: true
  })
    id: number;
    
    @Column({ nullable: true, type: 'varchar', length: 200 })
    nome: string;
  
    @Column({ nullable: true, type: 'varchar', length: 255 })
    email: string;
  
    @Column({ nullable: true, type: 'varchar', length: 200 })
    senha: string;
  
    @CreateDateColumn()
    createdAt: Timestamp;
  
    @UpdateDateColumn()
    updatedAt: Timestamp;
  }
