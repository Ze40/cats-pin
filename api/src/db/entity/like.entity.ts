import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Like {
  @PrimaryColumn({ unique: true })
  cat_id: string;

  @CreateDateColumn()
  created_at;
}
