var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/DemocraciaEnRed/corazonesymentes-web.git',
        user: {
            name: 'Mijail Cohen',
            email: 'mija@democracy.os'
        }
    },
    (message) => {
        console.log(message)
    }
)
