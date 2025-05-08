export interface IColumnDef<T> {
    headerText: string;
    field?: keyof T;
    sortable?: boolean;
    filterable?: boolean;
    columnType?: string;
    actions?: IActions[];
}

export interface IActions {
    action: string;
    icon: string;
    tooltip: string;
    actionParams?: string[];
    disabled?: () => boolean;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}