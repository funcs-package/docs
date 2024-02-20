import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        By always taking feedback from various sources, we strive our best to make everything easier in the process of usage.
      </>
    ),
  },
  {
    title: 'Supports both ESM and CJS',
    description: (
      <>
        We understand that many people find libraries they need that do not support ESM or CJS. So we created a library that supports both so everyone can use them.
      </>
    ),
  },
  {
    title: 'Continuously upgrade',
    description: (
      <>
        The more users there are, the more we have to update additional functions so that everyone can use it when needed.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
