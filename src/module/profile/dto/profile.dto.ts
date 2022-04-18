export interface Profile {
    id?: number;
    wallet_id: string;
    profile_picture?: string;
    country?: string;
    document_type?: string;
    passport_number?: string;
    name?: string;
    surname?: string;
    patronymic_name?: string;
}