
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  nombre: any;

  @Column()
  precio: any;

}