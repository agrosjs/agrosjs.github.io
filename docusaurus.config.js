// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Agros.js',
    tagline: 'Yet another powerful framework to enhance web front-end efficient and experience',
    url: 'https://agros.js.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'agrosjs', // Usually your GitHub org/user name.
    projectName: 'agrosjs.github.io', // Usually your repo name.
    deploymentBranch: 'publish',
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    lastVersion: '0.x',
                    versions: {
                        current: {
                            label: '0.x',
                            path: '0.x',
                        },
                    },
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: 'agros',
            logo: {
                alt: 'logo',
                src: 'img/logo.svg',
                width: '70%',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'introduction',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    position: 'left',
                    label: 'Developing',
                    to: '/developing',
                },
                {
                    position: 'left',
                    label: 'API',
                    to: '/api',
                },
                {
                    position: 'left',
                    label: 'Support Us',
                    to: '/support-us',
                },
                {
                    href: 'https://github.com/agrosjs/agros',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/introduction',
                        },
                        {
                            label: 'Developing',
                            to: '/developing',
                        },
                        {
                            label: 'API',
                            to: '/api',
                        },
                        {
                            label: 'CLI',
                            to: '/docs/category/cli',
                        },
                        {
                            label: 'Support Us',
                            to: '/support-us',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Agros.js and all its developers. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
