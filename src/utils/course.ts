import { getCollection } from 'astro:content';

export async function getCourseWorks(): Promise<any[]> {
  const courses = await getCollection('course');
  return courses.map((entry: any) => {
    return {
      id: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      img: entry.data.img,
      img_alt: entry.data.img_alt || '',
    };
  });
}