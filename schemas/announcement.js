export default {
  title: 'Announcement',
    name: 'announcement',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
    initialValue: () => ( {
      publishedAt: (new Date()).toISOString()
    }),
  
    preview: {
      select: {
        title: 'title',
        publishedAt: 'publishedAt',
        media: 'mainImage',
      },
    },
  }