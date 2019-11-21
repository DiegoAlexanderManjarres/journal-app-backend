import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './graphql/resolvers/index'
import { prisma } from './generated/prisma-client'

// instanciate a server with graphql-yoga GraphQLServer
const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context: req => ({ req, prisma })
})


export { server as default }
  