import Layout from '../components/app/Layout'
import CarouselIndicators from '../components/header/Carosoul'
import NewProduct from '../components/NewProduct/NewProduct'
import API from '../lib/api/fetcher'
import { Make } from '../types/common'

type Props = {
  popularMakes: {
    makeList: Make[]
    total: number
    currentPage: number
    pageSize: number
  }
}

const Home = (props: Props) => {
  const { popularMakes } = props
  return (
    <Layout title={'Home'} description={'Some Description'}>
      <main
        className=" flex h-full w-full !flex-1 flex-col"
        style={{ height: '100%' }}
      >
        <CarouselIndicators />
        {popularMakes ? (
          <NewProduct popularMakes={popularMakes} />
        ) : (
          <h1>Loading</h1>
        )}
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const res = await API.get(
      'https://api.staging.myautochek.com/v1/inventory/make?popular=true'
    )

    const popularMakes = res.data
    // console.log(popularMakes, ' is popular')
    return { props: { popularMakes } }
  } catch (error) {
    // console.log(error, ' is error popular')
    return { props: { popularMakes: null } }
  }
}

export default Home
