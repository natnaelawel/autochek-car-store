import Layout from '../../components/app/Layout'
import CarDetail from '../../components/CarDetail/CarDetail'
import API from '../../lib/api/fetcher'
import { Make } from '../../types/common'

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
        <CarDetail popularMakes={popularMakes} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await API.get('/inventory/make?popular=true')
  const popularMakes: Make[] = res.data
  console.log(popularMakes, 'is popularMakes')
  return { props: { popularMakes } }
}

export default Home
