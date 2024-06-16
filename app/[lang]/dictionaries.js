import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zhcn: () => import('./dictionaries/zhcn.json').then((module) => module.default),
  zhtw: () => import('./dictionaries/zhtw.json').then((module) => module.default)
}
 
export const getDictionary = async (locale) => dictionaries[locale]()