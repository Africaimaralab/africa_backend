export interface Profile {
    id?: number;
    walletId: string;
    profilePicture?: string;
    country?: string;
    documentType?: string;
    passportNumber?: string;
    name?: string;
    surname?: string;
    patronymicName?: string;
    description?: string;
    completed?: boolean;
}