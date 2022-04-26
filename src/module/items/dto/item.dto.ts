export interface Item {
    id?: number;
    address: string;
    name: string;
    description: string;
    image: string;
    collection: string;
    tags: string;
    price: number;
    creator?: string;
    owner?: string;
    createdAt?: string
}

