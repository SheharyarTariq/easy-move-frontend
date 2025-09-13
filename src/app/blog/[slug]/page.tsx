import { blogPosts, featuredPost } from '../blog-posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, Clock } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const allPosts = [featuredPost, ...blogPosts];
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
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
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
          <p>{post.content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">A Deeper Dive</h2>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>First point of discussion.</li>
            <li>Second point to consider.</li>
            <li>A third, very important point.</li>
          </ul>
          <p>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </article>
    </main>
  );
}