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
            <Translate>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </Translate>
        ),
    },
    {
        title: 'Framework Unrelated',
        Svg: require('@site/static/img/features-framework-unrelated.svg').default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Empower Efficiency',
        Svg: require('@site/static/img/features-empower-efficiency.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
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
