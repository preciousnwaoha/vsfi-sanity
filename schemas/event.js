export default {
  title: 'Event',
    name: 'event',
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
        name: 'venue',
        title: 'venue',
        type: 'blockContent',
      },
      {
        name: 'views',
        title: 'Views',
        type: 'number',
      },
      {
        name: 'dateAndTime',
        title: 'Date And Time',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],

    initialValue: () => ( {
      views: 0,
    }),
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    },
  }