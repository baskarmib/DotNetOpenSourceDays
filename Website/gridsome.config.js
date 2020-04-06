// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DotNet Open Source Days',  
  templates:{
    Session : '/content/sessions/:title',    
  },  
  plugins: [
    {
      use:'@gridsome/plugin-google-analytics',
      options:
      {
        id:'UA-154891562-2'
      }
    },     
    {
    use: '@gridsome/source-filesystem',
      options: {
        path: 'content/sessions/**/*.md',
        typeName: 'Session' ,
        remark: {
          autolinkClassName: "fas fa-hashtag",
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [['gridsome-plugin-remark-shiki', { theme: 'nord' }],
          ['gridsome-plugin-remark-twitter',{align:'center'}]
        ]
        }             
      }         
  },
]
}

