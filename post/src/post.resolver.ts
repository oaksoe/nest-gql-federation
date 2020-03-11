import { Query, Resolver, Parent, ResolveProperty } from '@nestjs/graphql';

@Resolver('Post')
export class PostsResolvers {
  constructor() {}

  @Query('getPosts')
  getPosts() {
    return [{
        id: '1',
        title: 'first post',
        body: 'about first post',
        userId: '1'
    }, {
        id: '2',
        title: 'second post',
        body: 'about second post',
        userId: '2'
    }];
  }

  @ResolveProperty('user')
  getUser(@Parent() post) {
    console.log('yayyyyyyyyyyyyy 0', post)
    return { __typename: 'User', id: post.userId };
  }
}