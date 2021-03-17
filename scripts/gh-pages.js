var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/corazonesymentes-web',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/username/corazonesymentes-web.git',
        user: {
            name: 'Mijail Cohen',
            email: 'mija@democracy.os'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
