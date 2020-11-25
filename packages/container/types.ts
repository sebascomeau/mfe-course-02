export type User = {
    name: string;
    email: string;
}

export type OnSignInFunction = (user: User) => void;

export type OnSignOutFunction = () => void;