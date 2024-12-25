import { getCollection } from 'astro:content';
import type { BlogWork } from '../types';

export async function getBlogWorks(): Promise<BlogWork[]> {
  const blogs = await getCollection('blog');
  return blogs.map((entry: any) => {
    return {
      id: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      img: entry.data.img,
      img_alt: entry.data.img_alt || '',
    };
  });
}