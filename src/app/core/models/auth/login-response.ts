export interface LoginResponse {
    userId : string;
    role: string;
    email: string;
    fullname: string;
    permissions : Set<string>;
    isVerified: boolean;
    token : string;
};
