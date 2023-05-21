import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'lib/common';

@Entity()
export class User extends BaseEntity {
  @Column()
  email: string;
  @Column()
  password: string;
}
export const UserSChema = SchemaFactory.createForClass(User);
