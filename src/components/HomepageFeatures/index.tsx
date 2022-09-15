import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
}

const FeatureList: FeatureItem[] = [
    {
        title: translate({
            id: 'pages.homepage.features.easyToUse',
            message: 'Easy to Use',
        }),
        Svg: require('@site/static/img/features-easy-to-use.svg').default,
        description: (
            <Translate
                id="pages.homepage.features.easyToUse.description"
            >Agros provides some extremely simple decorators and methods to help you get started with Agros quickly, and Agros is minimally invasive to existing projects, so there's no need to go through the trouble of refactoring your code.</Translate>
        ),
    },
    {
        title: translate({
            id: 'pages.homepage.features.frameworkUnrelated',
            message: 'Framework Unrelated',
        }),
        Svg: require('@site/static/img/features-framework-unrelated.svg').default,
        description: (
            <Translate
                id="pages.homepage.features.frameworkUnrelated.description"
            >Agros is a runtime for extensible web application architectures that does not contain any framework-related methods. Agros implements framework-specific abstractions based on platform technologies, so framework support can be implemented by introducing the corresponding platform. Agros currently has full support for React.js, Vue.js and Svelte.js respectively.</Translate>
        ),
    },
    {
        title: translate({
            message: 'Empower Efficiency',
            id: 'pages.homepage.features.empowerEfficiency',
        }),
        Svg: require('@site/static/img/features-empower-efficiency.svg').default,
        description: (
            <Translate
                id="pages.homepage.features.empowerEfficiency.description"
            >
                Agros provides a set of command line tools to help you quickly generate various modules of Agros applications. In addition, Agros uses a convention-over-configuration model, which allows you to quickly jump into development without having to pay too much attention to various configuration items.
            </Translate>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
