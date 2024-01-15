// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenAI 中文文档（社区版）',
  tagline: '探索人工智能的无限可能：OpenAI 中文社区指南',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docsopen.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thlz998', // Usually your GitHub org/user name.
  projectName: 'opendocs-cn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-QSFWWXV70B',
        anonymizeIP: true,
      },
    ],
  ],
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6643394715292541',
      async: true,
      defer: true,
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cn-logo.png',
      navbar: {
        title: 'Open AI 中文文档（社区版）',
        logo: {
          alt: 'Logo',
          src: 'img/cn-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: '文档',
          },
          {
            type: 'doc',
            docId: 'plan',
            position: 'left',
            label: '翻译计划',
          },
          {
            href: 'https://github.com/thlz998/opendocs-cn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '官方文档',
                to: 'https://platform.openai.com/docs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'AIGC 用例库',
                to: 'https://www.aigcmoments.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} opendocs-cn, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {name: 'keywords', content: 'OpenAI, ChatGPT, 中文文档, 翻译, 中文, 文档, 说明, 教程, 用例'},
        {name: 'description', content: '本网站是OpenAI和ChatGPT的中文文档翻译，提供全面详细的使用说明和实例教程'}
      ],
    }),
};

module.exports = config;
