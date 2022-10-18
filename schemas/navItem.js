export default {
    
    title: 'Nav Item',
    name: 'navItem',
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
      
    ],
  
    preview: {
      select: {
        title: 'title',
        slug: 'slug',
      },
    },
  }