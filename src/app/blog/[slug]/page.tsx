import { blogPosts, featuredPost } from '../blog-posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, Clock } from 'lucide-react';
type Params = Promise<{ slug: string }>

export default async function BlogPostPage(props: {params: Params}) {
  const allPosts = [featuredPost, ...blogPosts];
  const params = await props.params;
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="container mx-auto px-4 py-12 sm:py-20 max-w-4xl">
        <header className="mb-8 text-center">
          <div className="mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center sm:gap-6 gap-3 text-sm text-muted-foreground mt-4">
            <div className="flex items-center sm:gap-2 gap-1">
              <User className="h-4 w-4" />
              <span className="whitespace-nowrap">{post.author}</span>
            </div>
            <div className="flex items-center sm:gap-2 gap-1">
              <Calendar className="h-4 w-4" />
              <span className="whitespace-nowrap">{post.date}</span>
            </div>
            <div className="flex items-center sm:gap-2 gap-1">
              <Clock className="h-4 w-4" />
              <span className="truncate">{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
          <p className="text-xl text-foreground font-semibold">{post.excerpt}</p>
          <div className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>

      </article>
    </main>
  );
}