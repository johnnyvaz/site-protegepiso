import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Site Protege Piso',
  description: 'Site corpotativo da empresa protege piso.',
  author: {
    name: 'Protege Piso',
    Instagram: '@protegepiso',
    url: 'https://www.instagram.com/protegepiso ',
    email: 'contato@protegepiso.com.br',
    summary: 'Visite nossas redes sociais.'
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Somos a Protege Piso, uma empresa dedicada a fornecer soluções inovadoras e inteligentes para a proteção de pisos em ambientes de construção civil, reformas e obras. Com uma visão voltada para a excelência e a satisfação do cliente, destacamo-nos no mercado por nossa abordagem abrangente e pela qualidade incomparável de nossos produtos e serviços.'
  },
  location: ' Protege Piso, Edificio Spasse ,Número: 800, Sala:601, Ribeirão Preto-SP',
  latlng: [-21.2016748, -47.796152] as [number, number],
  repository: 'https://github.com/ProtegePiso',
  buildTime: new Date()
}

export { default as Logo } from './assets/logo-protege/logo01.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/capa1.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Página Inicial', href: '' },
  { name: 'Sobre Nós', href: 'about' },
  { name: 'Contatos', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Franquia', href: 'doc/introduction' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
