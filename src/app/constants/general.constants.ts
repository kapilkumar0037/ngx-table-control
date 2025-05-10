import { IColumnDef, IUser } from "../models/general.models";

export const COLUMN_DEFINITIONS: IColumnDef<IUser>[] = [
    {
        headerText: "Name",
        field: "name",
        sortable: true,
        sortDirection: "asc"
    },
    {
        headerText: "Email",
        field: "email"
    },
    {
        headerText: "Role",
        field: "role",
        sortable: true,
        sortDirection: ""
    },
    {
        headerText: "Status",
        field: "status",
        sortable: true,
        sortDirection: ""
    },
    {
        headerText: "Action",
        columnType: "action",
        actions: [
            {
                label: "Edit",
                icon: "pi pi-pencil",
                tooltip: "Edit",
                disabled: (data: IUser) => data.status=== "inactive"
            },
            {
                label: "Delete",
                icon: "pi pi-trash",
                tooltip: "Delete",
                disabled: (data: IUser) => data.role === "admin"
            }
        ]
    },
]