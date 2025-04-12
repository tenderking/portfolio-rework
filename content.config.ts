import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogSchema = z.object({
  // Frontmatter fields
  title: z.string().optional(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  tags: z.array(z.string()).optional(),
  imgUrl: z.string().optional(),
  path: z.string().optional(),
  
})

const aboutSchema = z.object({
  title: z.string(),
  catchphrase: z.string(),
  description: z.string(),
  resume: z.object({
    education: z.array(z.object({
      degree: z.string().optional(),
      university: z.string().optional(),
      title: z.string().optional(),
      date: z.string().optional(),
    })),
    skills: z.array(z.string()),
    certifications: z.array(z.object({
      title: z.string(),
      from: z.string(),
      date: z.string()
    })),
    experience: z.array(z.object({
      title: z.string(),
      company: z.string(),
      date: z.string(),
      description: z.string()
    }))
  })
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**.md',
      schema: blogSchema,
    }),
    about: defineCollection({
      type: 'data',
      source: 'about.yml',
      schema: aboutSchema,
    }),
  },
});