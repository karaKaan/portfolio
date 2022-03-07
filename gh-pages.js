let ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/karaKaan/portfolio.git',
        user: {
            name: 'Kaan Kara',
            email: 'kara.kaan1995@gmail.com'
        }
    },
    () => {
        console.log("Deployed!!!");
    }
)