export interface IColumnDef<T> {
    headerText: string;
    field?: keyof T;    
    columnType?: string;
    actions?: IActions<T>[];
    sortable?: boolean;
    sortDirection?: 'asc' | 'desc' | '';
}

export interface IActions<T> {
    label: string;
    icon: string;
    tooltip: string;
    actionParams?: string[];
    disabled?: (data: T) => boolean;
}

export interface IUser {    
    name: string;
    email: string;
    role: string;
    status: string;
}