export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df871ca0d08945f01e60a38',
                  title: 'Sanity Studio',
                  name: 'gatsby-with-sanity-io-studio',
                  apiId: '01ea2603-6873-432d-9ec0-ad3e94c6db36'
                },
                {
                  buildHookId: '5df871caf6459b50705c0ea0',
                  title: 'Portfolio Website',
                  name: 'gatsby-with-sanity-io',
                  apiId: 'd2026493-cb71-4dc4-867a-80cbb8b10e86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LarsBehrenberg/gatsby-with-sanity-io',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-with-sanity-io.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
