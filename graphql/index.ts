export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: {email: $email}){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
`;

export const createUserMutation = `
    mutation createUser($input: UserCreateInput!) {
        userCreate(input: $input){
            user {
                name
                email
                avatarUrl
                description
                githubUrl 
                linkedInUrl
                id
            }
        }
    }
`;
export const createProjectMutation = `
    mutation createUser($input: UserCreateInput!) {
        userCreate(input: $input){
            user {
                name
                email
                avatarUrl
                description
                githubUrl 
                linkedInUrl
                id
            }
        }
    }
`;
