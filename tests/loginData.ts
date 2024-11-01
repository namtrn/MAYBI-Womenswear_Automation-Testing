export interface IUser {
    username: string;
    password: string;
    name: string
}

export const loginData = {
    standardUser: {
        username: "11111111111@gmail.com" as const,
        password: "1111111111",
        name: 'so mot'
    },
    lockedOutUser: {
        username: "locked_out_user" as const,
        password: "secret_sauce"
    },
    problemUser: {
        username: "problem_user" as const,
        password: "secret_sauce"
    }

}