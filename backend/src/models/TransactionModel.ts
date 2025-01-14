import { DataTypes, Model, Sequelize } from 'sequelize';

// Define a Transaction model
export class TransactionModel extends Model {
  public id!: number;
  public type!: string;
  public amount!: number;
  public costBasis!: number | null; // Optional
  public timestamp!: Date;
}

// Function to initialize the Transaction model
export function initTransactionModel(sequelize: Sequelize): void {
  TransactionModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      costBasis: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'transactions',
    }
  );
}
