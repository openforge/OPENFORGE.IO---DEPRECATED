import { Component, Prop, h } from '@stencil/core';
import { BlogPost } from '../../model/blog-post.model';
import { formatDate } from '../../shared/date-format';

@Component({
  tag: 'app-blog-card',
  styleUrl: 'app-blog-card.scss',
})
export class AppBlogCard {
  @Prop() blogPost: BlogPost;

  componentDidLoad() {
    console.log('blog data', this.blogPost);
    document.querySelectorAll('meta[property="og:image"]')[0].setAttribute('content', this.blogPost.featured_image); //set opengraph metadata to match Butter CMS featured image
  }

  render() {
    const publishDate = new Date(this.blogPost.published);
    return (
      <div class="blog-card">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="blog-card-image">
                <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                  <img src={this.blogPost.featured_image} />
                </stencil-route-link>
              </div>
              <div class="blog-title">
                <stencil-route-link url={`/blog/${this.blogPost.slug}`}>
                  <h2 id="blog-title">{this.blogPost.title}</h2>
                </stencil-route-link>
              </div>
              <div class="author">
                <img class="profile-image d-none d-md-block" src={this.blogPost.author.profile_image} />
                <div>
                  By &nbsp;
                  {this.blogPost.author.slug === 'jedidiah-weller' ? (
                    <a href="http://www.twitter.com/jedihacks" target="_blank" rel="noopener">{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</a>
                  ) : (
                    <stencil-route-link url={`/about/${this.blogPost.author.slug}`}>{`${this.blogPost.author.first_name} ${this.blogPost.author.last_name}`}</stencil-route-link>
                  )}
                  &nbsp; on {formatDate(publishDate)}
                </div>
              </div>
              <div class="summary">{this.blogPost.summary}</div>
              <stencil-route-link class="read-more" url={`/blog/${this.blogPost.slug}`}>
                Read More
              </stencil-route-link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
