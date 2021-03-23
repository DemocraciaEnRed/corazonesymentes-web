var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/DemocraciaEnRed/corazonesymentes-web',
    },
    (message) => {
        console.log(message)
    }
)
