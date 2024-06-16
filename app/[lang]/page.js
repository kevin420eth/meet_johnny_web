import './page.css'
import { getDictionary } from './dictionaries';

export default async function Home({ params }) {
  let locale = 'en'

  if (params.lang == 'zh-CN') {
    locale = 'zhcn'
  } else if (params.lang == 'zh-TW') {
    locale = 'zhtw'
  }

  const dict = await getDictionary(locale)

  return (
    <>
      <main>
        <section className="landing_page">
          <h1>{dict.greeting}</h1>
          <a href={`/${params.lang}/home`} className="enter_button">{dict.buttons.enter}</a>
        </section>
      </main>
    </>

  );
}
