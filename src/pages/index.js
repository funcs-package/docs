import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  async function download() {
    if (typeof window == 'undefined') return;
    if (!navigator) return;
    const permissionStatus = await navigator.permissions?.query({ name: 'clipboard-read' });
    if (!permissionStatus || permissionStatus?.state === 'denied') {
      return alert('Permission to read from the clipboard is denied');
    }
    navigator.clipboard.writeText('npm i @khaidev1012/funcs');
  }
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            onclick={download()}>
            npm i @khaidev1012/funcs
          </button>
        </div>
        <br />
        <a href="https://npmjs.org/package/@khaidev1012/funcs"><img src="https://img.shields.io/npm/v/@khaidev1012/funcs"></img></a>
        <a href="https://npmjs.org/package/@khaidev1012/funcs"><img src="https://img.shields.io/bundlephobia/min/@khaidev1012/funcs"></img></a>
        <a href="https://npmjs.org/package/@khaidev1012/funcs"><img src="https://img.shields.io/npm/dt/@khaidev1012/funcs"></img></a>
        <a href="https://libraries.io/github/funcs-package/funcs"><img src="https://img.shields.io/librariesio/release/npm/@khaidev1012/funcs"></img></a>
        <a href="https://libraries.io/npm/@khaidev1012%2Ffuncs"><img src="https://img.shields.io/librariesio/sourcerank/npm/@khaidev1012/funcs"></img></a>
        <a href="https://github.com/funcs-package/funcs/releases"><img src="https://img.shields.io/github/release-date/funcs-package/funcs"></img></a>
        <a href="https://npmjs.org/package/@khaidev1012/funcs"><img src="https://img.shields.io/npm/l/@khaidev1012/funcs"></img></a>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
