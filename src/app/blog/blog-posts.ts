import blogFeatured from '../../../public/assets/blog-featured.jpg';
import blogFragile from '../../../public/assets/blog-fragile.jpg';
import blogPets from '../../../public/assets/blog-pets.jpg';
import { StaticImageData } from 'next/image';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: StaticImageData;
}

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const generatePost = (postData: Omit<BlogPost, 'slug' | 'content'>): BlogPost => ({
  ...postData,
  slug: slugify(postData.title),
  content: `${postData.excerpt} This is some more detailed content for the blog post, expanding on the excerpt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
});

export const featuredPost: BlogPost = generatePost({
  title: "The Ultimate Moving Checklist: 8 Weeks Before to Moving Day",
  excerpt: "A comprehensive guide to planning your move with our expert timeline and tips to ensure nothing gets forgotten.",
  author: "Sarah Collins",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Moving Tips",
  image: blogFeatured
});

const rawBlogPosts: Omit<BlogPost, 'slug' | 'content'>[] = [
  {
    title: "The Ultimate Guide to Downsizing Your Home",
    excerpt: "Expert tips on how to declutter and downsize your home before a move, making the process smoother and more efficient.",
    author: "Jane Doe",
    date: "April 5, 2024",
    readTime: "7 min read",
    category: "Moving Tips",
    image: blogPets
  },
  {
    title: "How to Label Moving Boxes for an Organized Unpack",
    excerpt: "A simple, effective system for labeling your moving boxes to make unpacking a breeze.",
    author: "John Smith",
    date: "April 2, 2024",
    readTime: "4 min read",
    category: "Packing Tips",
    image: blogFragile
  },
  {
    title: "Eco-Friendly Moving: How to Reduce Your Carbon Footprint",
    excerpt: "Discover sustainable moving practices, from eco-friendly packing materials to reducing transportation emissions.",
    author: "Emily White",
    date: "March 28, 2024",
    readTime: "6 min read",
    category: "Moving Tips",
    image: blogPets
  },
  {
    title: "How to Pack Fragile Items: A Professional Guide",
    excerpt: "Learn the professional techniques our movers use to pack delicate items safely.",
    author: "James Mitchell",
    date: "March 12, 2024",
    readTime: "5 min read",
    category: "Packing Tips",
    image: blogFragile
  },
  {
    title: "The Essential Moving Day Survival Kit",
    excerpt: "Don't get caught unprepared. Here's what you need to pack in your essentials box for a smooth moving day.",
    author: "Michael Brown",
    date: "March 20, 2024",
    readTime: "5 min read",
    category: "Packing Tips",
    image: blogFragile
  },
  {
    title: "Moving with Pets: Everything You Need to Know",
    excerpt: "A complete guide to ensuring your furry friends have a stress-free moving experience.",
    author: "Akhter",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Moving Tips",
    image: blogPets
  },
  {
    title: "Storage Solutions: When and How to Use Them",
    excerpt: "Discover when storage solutions can simplify your move and how to choose the right option.",
    author: "James Mitchell",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Storage",
    image: blogPets
  },
  {
    title: "Office Relocation: Minimizing Business Disruption",
    excerpt: "Strategies for seamless commercial moves that keep your business running smoothly.",
    author: "Akhter",
    date: "March 3, 2024",
    readTime: "8 min read",
    category: "Commercial Moving",
    image: blogFragile
  },
  {
    title: "Moving Costs: What to Expect and How to Budget",
    excerpt: "Transparent breakdown of moving costs and tips for staying within budget.",
    author: "Sarah Collins",
    date: "March 1, 2024",
    readTime: "5 min read",
    category: "Budget Planning",
    image: blogPets
  },
  {
    title: "Packing Like a Pro: Essential Tips for Success",
    excerpt: "Master the art of packing with these professional techniques and time-saving tips.",
    author: "Junaid Asif",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Packing Tips",
    image: blogFragile
  },
  {
    title: "Long Distance Moving: What You Need to Know",
    excerpt: "Complete guide to planning and executing a successful long-distance relocation.",
    author: "Shahzaib Asif",
    date: "February 25, 2024",
    readTime: "9 min read",
    category: "Moving Tips",
    image: blogPets
  },
  {
    title: "Moving Insurance: Protecting Your Belongings",
    excerpt: "Understanding different types of moving insurance and choosing the right coverage.",
    author: "Akhter",
    date: "February 22, 2024",
    readTime: "7 min read",
    category: "Insurance",
    image: blogFragile
  }
];

export const blogPosts: BlogPost[] = rawBlogPosts.map(post => generatePost(post));
