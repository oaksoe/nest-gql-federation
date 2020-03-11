import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { UsersResolvers } from './user.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [UsersResolvers],
})
export class AppModule {}
