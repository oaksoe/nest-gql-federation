import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PostsResolvers } from './post.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [PostsResolvers],
})
export class AppModule {}
