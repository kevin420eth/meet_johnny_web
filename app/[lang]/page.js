import './page.css'
import { getDictionary } from './dictionaries';

import { redirect } from 'next/navigation'

export default async function Home({ params }) {
  let locale = ''

  if (params.lang == 'zh-CN') {
    locale = 'zhcn'
  } else if (params.lang == 'zh-TW') {
    locale = 'zhtw'
  } else if (params.lang == 'en'){
    locale = 'en'
  } else{
    redirect('/en')
    return
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
