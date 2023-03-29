import { Scroll } from "@react-three/drei"

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-transparent rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

export const Overlay = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="font-serif font-semibold text-7xl">Hello I'm Ángel</h1>
          <p className="text-gray-500">Welcome to Scroll Animation Test</p>
          <p className="mt-4">I know:</p>
          <ul className="leading-9">
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right>
          <h1 className="font-serif font-semibold text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="mt-3">↓</p>
        </Section>
        <Section>
          <h1 className="font-serif text-2xl">Hello World P3</h1>
        </Section>
      </div>
    </Scroll>
  )
}
