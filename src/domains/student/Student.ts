import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public username: string;

  @Column()
  public firstname?: string;

  @Column()
  public lastname?: string;

  public constructor (username = '') {
    this.username = username;
  }
}
