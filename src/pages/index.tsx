import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <h1 className={clsx('hero__title', styles['main-title'])}>
                    <img className={styles.logo} src="/img/logo.svg" />
                    {siteConfig.title.toLowerCase()}
                </h1>
                <p className="hero__subtitle">
                    {
                        translate({
                            message: siteConfig.tagline,
                            id: 'pages.common.subTitle',
                        })
                    }
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/introduction"
                    ><Translate id="pages.common.documentation">Documentation</Translate></Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} | ${translate({
                message: siteConfig.tagline,
                id: 'pages.common.subTitle',
            })}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
