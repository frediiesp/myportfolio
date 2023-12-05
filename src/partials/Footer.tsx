import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    {/* <FooterCopyright site_name={AppConfig.site_name} /> */}
    <div className="mr-1 h-10 text-sm">
      <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <p>© Copyright 2023 by Portafolio AlfredoZ.</p>
    </div>
  </Section>
);

export { Footer };
