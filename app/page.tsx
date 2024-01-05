import { CarCard, Hero, SearchManufacturer } from '@/component';
import CustomFilter from '@/component/CustomFilter';
import { fetchCars } from '@/utilis';

export default async function Home() {
  const carsData = await fetchCars();
  console.log('carsData', carsData);

  return (
    <main className='overflow-hidden'>
      <Hero />
      {/* car catelogue */}
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catelogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          {/* <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          /> */}
          <div className='home__filter-container'>
            {/* <CustomFilter title='fuel' />
            <CustomFilter title='year' /> */}
          </div>
        </div>
        <section>
          {carsData && carsData.length > 0 && carsData ? (
            <div className='home__cars-wrapper'>
              {carsData.map((car: any) => (
                <CarCard car={car} />
              ))}
            </div>
          ) : (
            <>No data found</>
          )}
        </section>
      </div>
    </main>
  );
}
