import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Proyectos</GradientText> recientes
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-maps.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Ejercicios de JavaScript"
        description="Portafolio de pequeños ejercicios de JavaScript donde entre ellos se encuentra
        Palindromo, FizzBuzz, un Scramble para el cubo de rubik y un Timer con milisegundos."
        link="https://github.com/frediiesp/exercises/tree/main/Desde%200"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Maps',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
