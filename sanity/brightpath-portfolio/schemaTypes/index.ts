import {defineArrayMember, defineField, defineType} from 'sanity'

// Rebuilt to match the documents already in the production dataset.
const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [defineField({name: 'title', type: 'string'})],
})

const stack = defineType({
  name: 'stack',
  title: 'Stack',
  type: 'document',
  fields: [defineField({name: 'title', type: 'string'})],
})

const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'createdAt', type: 'date'}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'poster', type: 'image', options: {hotspot: true}}),
    defineField({name: 'images', type: 'array', of: [defineArrayMember({type: 'image', options: {hotspot: true}})]}),
    defineField({name: 'category', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})]}),
    defineField({name: 'stack', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'stack'}]})]}),
  ],
})

const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'excerpt', type: 'text'}),
    defineField({name: 'coverImage', type: 'image', options: {hotspot: true}}),
    defineField({name: 'createdAt', type: 'datetime'}),
    defineField({name: 'tags', type: 'array', of: [defineArrayMember({type: 'string'})], options: {layout: 'tags'}}),
    defineField({
      name: 'content',
      type: 'array',
      of: [defineArrayMember({type: 'block'}), defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
  ],
})

export const schemaTypes = [blog, projects, category, stack]
