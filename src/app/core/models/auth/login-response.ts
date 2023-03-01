export interface LoginResponse {
    userId : string;
    role: string;
    email: string;
    fullname: string;
    permissions : Array<string>;
    isVerified: boolean;
    token : string;
};
