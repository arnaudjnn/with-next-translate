import { allLanguages } from 'i18n.json'

export default function DynamicPage({ data }) {
  <p>{data.title}</p>
}

export async function getStaticPaths() {
  
  const paths = allLanguages.map(lng => (
    { params: { lang: lng, slug: [''] } }
  ))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const data = {
    title: 'Hello'
  }

  return { props: { data  } }
}