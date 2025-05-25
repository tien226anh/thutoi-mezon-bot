import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { TABLENAME } from '../constants/tableName';

@Index(['id'])
@Entity(TABLENAME.USERS)
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  username: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'display_name',
  })
  displayName: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'clan_name',
  })
  clanName: string;

  avatar: string;

  bot: boolean;

  invitor: {
    [clanId: string]: string;
  };
}
