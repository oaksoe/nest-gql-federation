import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';

@Resolver('User')
export class UsersResolvers {
  constructor() {}

  @Query()
  getUser(@Args('id') id: string) {
    return {
        id: '123',
        name: 'Oak'
    };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
      console.log('yayyyyyyyyyyyyy 1')
    return {
        id: reference.id,
        name: 'Oak'
    };
  }
}