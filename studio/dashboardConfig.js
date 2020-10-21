export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9088338120681a504c427f',
                  title: 'Sanity Studio',
                  name: 'gucalcutta-studio',
                  apiId: 'b855b482-f615-49a1-97f7-687d987cebe2'
                },
                {
                  buildHookId: '5f908833812068197b4c3fe1',
                  title: 'Blog Website',
                  name: 'gucalcutta',
                  apiId: '4d5044b8-f98b-4df4-ad0c-178799a24e7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uvineet53/gucalcutta',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gucalcutta.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
