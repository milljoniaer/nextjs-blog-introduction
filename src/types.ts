export type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
    image: {
        src: string;
    }
}

export type Error = {
    message: string;
}