
export interface ModuleItem {
    name : string;
    permissions : Array<PermissionItem>;
};

export interface PermissionItem {
    name: string;
    permission: string;
    selected : boolean;
    isView : boolean;
};

export class Modules {
    public static readonly Dashbaord : string = "Dashboard";
    public static readonly Roles : string = "Roles";
    public static readonly Users : string = "Users";
    public static readonly Products : string = "Products";
    public static readonly All : string = "All";
};

export class RolePermissions {
    public static readonly View : string = "Permissions.Users.View";
    public static readonly Create : string = "Permissions.Users.Create";
    public static readonly Delete : string = "Permissions.Users.Delete";
    public static readonly Edit : string = "Permissions.Users.Edit";
};

export class UserPermissions {
    public static readonly View : string = "Permissions.Roles.View";
    public static readonly Create : string = "Permissions.Roles.Create";
    public static readonly Delete : string = "Permissions.Roles.Delete";
    public static readonly Edit : string = "Permissions.Roles.Edit";
};

export class ProductPermissions {

    public static readonly View : string = "Permissions.Products.View";
    public static readonly Create : string = "Permissions.Products.Create";
    public static readonly Delete : string = "Permissions.Products.Delete";
    public static readonly Edit : string = "Permissions.Products.Edit";
};

export class DashboardPermissions {
    public static readonly View : string = "Permissions.Dashboard.View";
};



