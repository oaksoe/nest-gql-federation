import { Args, Query, Resolver, ResolveReference, ResolveProperty, Parent } from '@nestjs/graphql';

@Resolver('User')
export class UsersResolvers {
  constructor() {}

  @Query()
  getUser(@Args('id') id: string) {
    return {
        id: '123',
        name: 'Oak',
        postIds: ['1', '2']
    };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return {
        id: reference.id,
        name: 'Oak',
        postIds: ['1', '2']
    };
  }

  @ResolveProperty('posts')
  getPosts(@Parent() user) {
    return user.postIds.map(postId => ({ __typename: 'Post', id: postId }));
  }

  // @ResolveProperty('post')
  // getPost(@Parent() user) {
  //   return { __typename: 'Post', id: user.postId };
  // }
}