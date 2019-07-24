import {GraphQLServer} from 'graphql-yoga'
import {prisma} from './generated/prisma-client'

const resolvers = {
    Query: {
        users(root, {email}, context) {
            return context.prisma.users()
        }
    },
    Mutation: {
        createUser(root, {email, name}, context) {
            return context.prisma.createUser({
                name,
                email
            })
        }
    },
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
        prisma
    },
})
server.start(() => console.log("running on port 4000?")).catch((e) => console.error(e))