import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola a todos, soy <GradientText>Alfredo Zuñiga</GradientText> 👋
        </>
      }
      description={
        <>
          Soy un desarrollador amante de la programación y el descubrimiento
          continuo. Me impulsa la{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            curiosidad
          </a>{' '}
          y el deseo de aprender constantemente. Me motiva resolver problemas y
          disfruto los{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            desafíos
          </a>{' '}
          combinando mi pasión por la{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            tecnología
          </a>{' '}
          con una mentalidad aventurera y creativa.
          {/* Ademas de mi amor por la ingenieria y la programación, soy una persona que disfruta de los{' '}
          <a className="text-cyan-500 hover:underline" href="/">
          desafios.
          </a>{' '}
          Mi{' '}
          <a className="text-cyan-500 hover:underline" href="/">
          familia
          </a>{' '}es mi mayor inspiracion, me ayudan a esforzarme para crecer a niver profesional como{' '}
          <a className="text-cyan-500 hover:underline" href="/">
          personal
          </a>{' '}. */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/myAvatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/frediiesp">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/fredii.esparza">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/jose-alfredo-zuniga-esparza-647801185/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
