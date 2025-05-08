import { IColumnDef, IUser } from "../models/general.models";

export const COLUMN_DEFINITIONS: IColumnDef<IUser>[] = [
    {
        headerText: "Name",
        field: "name",
        sortable: true
    },
    {
        headerText: "Email",
        field: "email"
    },
    {
        headerText: "Action",
        columnType: "action",
        actions: [
            {
                action: "Edit",
                icon: "pi pi-pencil",
                tooltip: "Edit",
                actionParams: ["id"]
            },
            {
                action: "Delete",
                icon: "pi pi-trash",
                tooltip: "Delete",
                actionParams: ["id"],
                disabled: () => false
            }
        ]
    },
]