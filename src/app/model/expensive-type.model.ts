import { FactorModel } from './factor.model';

export interface ExpensiveTypeModel {
    transactionId: number;
    transactionName: string;
    transactionRegisterRequired: number;
    factors: FactorModel[];
    userName: string;
    idRank: number;
    frequency: number;
    amountFloor: string;
    amountCeil: string;
    deviceRegisterLock: boolean;
    deviceRegisterRequired: boolean;
    notificationRequired: false;
}
