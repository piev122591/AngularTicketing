export interface Account {
    id?: number;
    name: string;
    accountType: string;
    status: string;
    company: {
        id: number;
        name: string;
    };
    vendor: {
        id: number;
        name: string;
    }
}