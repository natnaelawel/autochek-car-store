import Layout from '../../components/app/Layout'
import CarDetail from '../../components/CarDetail/CarDetail'
import API from '../../lib/api/fetcher'
import { carMedia, Make } from '../../types/common'

type Props = {
  carMediaList: carMedia[]
  total: number
  currentPage: number
  pageSize: number
}

const CarDetailPage = (props: Props) => {
  return (
    <Layout title={'Detail'} description={'Some Description'}>
      <main
        className=" flex h-full w-full !flex-1 flex-col"
        style={{ height: '100%' }}
      >
        <CarDetail cardetail={props} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const res = await API.get('https://api-prod.autochek.africa/v1/inventory/car_media?carId=R1nVTV4Mj')
    const carMedia = res.data
    return { props: carMedia }
  } catch (error) {
    console.log(error)
    return { props: { carMedia: null } }
  }
}

export default CarDetailPage
