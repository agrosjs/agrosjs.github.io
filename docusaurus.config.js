// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const semver = require('semver');
const fs = require('fs-extra');
const path = require('path');

let versions = Array.from(fs.readJsonSync(path.resolve(__dirname, './versions.json')));

versions = versions.sort((a, b) => {
    return semver.lt(
        a.split('.').slice(0, 2).concat('0').join('.'),
        a.split('.').slice(0, 2).concat('0').join('.'),
    )
        ? -1
        : 1;
});

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Agros.js',
    tagline: 'Yet another powerful framework to enhance web front-end efficient and experience',
    url: 'https://agros.js.org',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'agrosjs', // Usually your GitHub org/user name.
    projectName: 'agrosjs.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
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
                    editUrl: 'https://github.com/agrosjs/agrosjs.github.io/tree/master/',
                    lastVersion: versions[0],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/agrosjs/agrosjs.github.io/tree/master/',
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
                height: '100%',
                style: {
                    marginRight: 0,
                },
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
                    label: 'FAQ',
                    to: '/faq',
                },
                {
                    position: 'left',
                    label: 'Support Us',
                    to: '/support-us',
                },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                    dropdownActiveClassDisabled: true,
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
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
                            label: 'FAQ',
                            to: '/faq',
                        },
                        {
                            label: 'CLI',
                            to: '/docs/cli-commands',
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
                            href: 'https://github.com/agrosjs/agros',
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
