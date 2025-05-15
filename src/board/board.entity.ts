import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BoardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  is_public: boolean;
}
