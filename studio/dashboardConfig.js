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
                  buildHookId: '5d8d1e351a023ad0dc82bdb0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kdzmo2ov',
                  apiId: 'cec26d88-0357-4f7b-97e5-62d94b3f1679'
                },
                {
                  buildHookId: '5d8d1e35ce833fca75715747',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n3yrzrqw',
                  apiId: '16388150-6429-4b71-b713-48bb069e3e62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pstonier/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n3yrzrqw.netlify.com', category: 'apps'}
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
