import { ExpensiveTypeModel } from './expensive-type.model';

export interface ExpensivesTypeModel {
    transactionId: number;
    transactionName: string;
    ranges: ExpensiveTypeModel[];
}
