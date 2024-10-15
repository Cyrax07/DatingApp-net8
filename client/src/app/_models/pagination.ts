export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedRsult<T> {
    items?: T;
    pagination?: Pagination
}