import { Injectable } from '@angular/core';
import { ExpensiveTypeModel } from './expensive-type.model';
import { ExpensivesTypeModel } from './expensives-type.model';
import { TransactionsMock } from '../mocks/transactions.mock';


@Injectable()
export class ExpensiveTypeRepository {
    private transactionsTypes: ExpensivesTypeModel[];

    constructor() {

        const rangesTransactionType = TransactionsMock.transfers.reduce((transferTypeAcc, transferType): {} => {
            if (!transferTypeAcc[transferType.transactionId]) {
                transferTypeAcc[transferType.transactionId] = [transferType];
            } else {
                transferTypeAcc[transferType.transactionId].push(transferType);
            }
            return transferTypeAcc;
        }, {});

        const transactionTypes = TransactionsMock.transfers.reduce((transferTypeAcc, transferType): ExpensivesTypeModel => {
            const transfer: ExpensivesTypeModel = {
                transactionId: transferType.transactionId,
                transactionName: transferType.transactionName,
                ranges: rangesTransactionType[transferType.transactionId]
            };

            if (!transferTypeAcc[transferType.transactionId]) {
                transferTypeAcc[transferType.transactionId] = transfer;
            } else {
                Object.values(transferTypeAcc[transferType.transactionId]).push(transfer);
            }

            return transferTypeAcc;
        }, {});

        this.transactionsTypes = transactionTypes;
    }

    getExpensivesType(): ExpensivesTypeModel[] {
        return this.transactionsTypes;
    }
}
