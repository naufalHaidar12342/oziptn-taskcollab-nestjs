import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ColumnEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
}
