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
    createdAt?: string;
}


export interface ItemDTO {
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
    auctionLider?: string;
    auctionPrice?: string;
    onSale?: boolean;
    onAuction?: boolean;
    endAuctionTimestamp?: number;

    createdAt?: string;
    typeOfMedia?: string;
    typeCell?: string;

}

