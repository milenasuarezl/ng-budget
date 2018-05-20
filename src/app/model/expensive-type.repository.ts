import { Injectable } from '@angular/core';
import { ExpensiveTypeModel } from './expensive-type.model';
import { ExpensivesTypeModel } from './expensives-type.model';
import { TransfersMock } from '../mocks/transactions.mock';


@Injectable()
export class ExpensiveTypeRepository {
    private transactionsTypes: ExpensivesTypeModel[];

    constructor() {

        const rangesTransactionType = TransfersMock.transfers.reduce((transferTypeAcc, transferType): {} => {
            if (!transferTypeAcc[transferType.transactionId]) {
                transferTypeAcc[transferType.transactionId] = [transferType];
            } else {
                transferTypeAcc[transferType.transactionId].push(transferType);
            }
            return transferTypeAcc;
        }, {});

        const transactionTypes = TransfersMock.transfers.reduce((transferTypeAcc, transferType): ExpensivesTypeModel => {
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

    getTransactionsType(): ExpensivesTypeModel[] {
        return this.transactionsTypes;
    }
}
