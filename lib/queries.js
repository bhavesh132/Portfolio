export const getBlogBySlugQuery = (slug) => `
  *[_type == \"blog\" && slug.current == \"${slug}\"][0]{
    title,
    excerpt,
    coverImage,
    createdAt,
    tags,
    \"slug\": slug.current,
    content
  }
`;
