const getMongoDbURI = (): string => {
    return process.env.MONGODB_URI?.replace('<username>', process.env.MONGODB_USER ?? '').replace('<password>', process.env.MONGODB_PASSWORD ?? '') ?? '';
}

export default getMongoDbURI;
