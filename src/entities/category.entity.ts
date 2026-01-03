import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

@Entity('categories')
@Index(['user_id', 'is_delete'])
export class Category {
  @PrimaryGeneratedColumn('uuid')
  category_id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'varchar' })
  category_name: string;

  @Column({ type: 'varchar', nullable: true })
  category_icon: string;

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.EXPENSE,
  })
  type: TransactionType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'boolean', default: false })
  is_delete: boolean;

  // Relationships
  @ManyToOne(() => User, (user) => user.categories, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
