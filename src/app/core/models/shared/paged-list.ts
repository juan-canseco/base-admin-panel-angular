export interface PagedList<T> {
    items : Array<T>;
    pageIndex: number;
    totalPages : number;
    rowsCount : number;
    hasPreviousPage: boolean;
    hasNextPage : boolean;
}