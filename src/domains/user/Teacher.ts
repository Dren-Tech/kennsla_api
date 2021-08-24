import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public username?: string;

  @Column()
  public firstname?: string;

  @Column()
  public lastname?: string;
}
