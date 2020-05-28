import { Query, Resolver, Parent, ResolveProperty, ResolveReference } from '@nestjs/graphql';

@Resolver('Post')
export class PostsResolvers {
  constructor() {}

  populatePosts() {
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

  @Query('getPosts')
  getPosts() {
    return this.populatePosts();
  }

  @ResolveProperty('user')
  getUser(@Parent() post) {
    return { __typename: 'User', id: post.userId };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.populatePosts()[0];
  }

  // @ResolveReference()
  // resolveReference(reference: { __typename: string; id: string }) {
  //   return this.populatePosts()[0];
  // }
}