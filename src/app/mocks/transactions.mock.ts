export class TransactionsMock {
    static transfers: any[] = [
        {
            idRank: 1,
            transactionId: 1,
            transactionName: 'PAGO FACTURAS TC',
            frequency: 1,
            amountFloor: '200',
            amountCeil: '300',
            transactionRegisterRequired: false,
            deviceRegisterRequired: true,
            deviceRegisterLock: false,
            notificationrequired: true,
            factors: [
                {
                    id: 1,
                    name: 'USUARIO Y CONTRASEÑA',
                    frecuency: 'CADA VEZ'
                }
            ],
            userName: 'System'
        },
        {
            idRank: 2,
            transactionId: 1,
            transactionName: 'PAGO FACTURAS TC',
            frequency: 1,
            amountFloor: '0',
            amountCeil: '99',
            transactionRegisterRequired: false,
            deviceRegisterRequired: true,
            deviceRegisterLock: false,
            notificationrequired: true,
            factors: [
                {
                    id: 1,
                    name: 'USUARIO Y CONTRASEÑA',
                    frecuency: 'CADA VEZ'
                },
                {
                    id: 2,
                    name: 'OTP',
                    frecuency: 'CADA VEZ'
                }
            ],
            userName: 'System'
        },
        {
            idRank: 3,
            transactionId: 1,
            transactionName: 'PAGO FACTURAS TC',
            frequency: 1,
            amountFloor: '100',
            amountCeil: '199',
            transactionRegisterRequired: false,
            deviceRegisterRequired: true,
            deviceRegisterLock: false,
            notificationrequired: true,
            factors: [
                {
                    id: 1,
                    name: 'USUARIO Y CONTRASEÑA',
                    frecuency: 'CADA VEZ'
                },
                {
                    id: 2,
                    name: 'OTP',
                    frecuency: 'CADA VEZ'
                }
            ],
            userName: 'System'
        },
        {
            idRank: 4,
            transactionId: 3,
            transactionName: 'PAGO IMPUESTOS TC',
            frequency: 1,
            amountFloor: '0',
            amountCeil: '999999999999999999',
            transactionRegisterRequired: false,
            deviceRegisterRequired: true,
            deviceRegisterLock: false,
            notificationrequired: true,
            factors: [
                {
                    id: 1,
                    name: 'USUARIO Y CONTRASEÑA',
                    frecuency: 'CADA VEZ'
                },
                {
                    id: 2,
                    name: 'OTP',
                    frecuency: 'CADA VEZ'
                }
            ],
            userName: 'System'
        }
    ];
}
