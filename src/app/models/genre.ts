export interface Genre {
    id: number;
    name: string;
}

export interface RootObjectGen {
    genres: Genre[];
}