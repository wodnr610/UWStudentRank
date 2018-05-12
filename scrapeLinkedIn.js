const Nightmare = require('nightmare');
const nightmare = Nightmare({
    openDevTools: {},
    show: true
});
const cheerio = require('cheerio');

const LINKEDIN_URL = 'https://www.linkedin.com/';
const ALUMNI_PAGE = 'https://www.linkedin.com/school/uwaterloo/alumni/';

beginJob();

async function beginJob() {
    let page = await nightmare
        .goto(LINKEDIN_URL)
        .wait('#feed-tab-icon')
        .goto(ALUMNI_PAGE)
        .wait('#alumni-search-keywords')
        .evaluate(() => {
            var body = document.body,
                html = document.documentElement;

            var height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);
                return height
        });
    let scrollHeight = page;
    console.log(scrollHeight)

    await nightmare
    .wait('ul.org-alumni-profiles-module__profiles-list')
    .wait(3000)
    .type('body', '\u0020')
    .type('body', '\u0020')
    .type('body', '\u0020')
    .type('body', '\u0020');
    console.log('done!');
}