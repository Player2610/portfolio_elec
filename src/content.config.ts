import { defineCollection } from 'astro:content';
import { z } from 'zod';

const proyectos = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      categoria: z.enum(['electronica', 'software']),
      fecha: z.coerce.date(),
      destacado: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      imagenPortada: image().optional(),
      galeria: z.array(image()).optional(),
      enlaces: z
        .object({
          repo: z.url().optional(),
          demo: z.url().optional(),
          video: z.url().optional(),
        })
        .optional(),
    }),
});

export const collections = { proyectos };
