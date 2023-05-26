import { Loading, Cocktail } from '../components'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  console.log(cocktails)
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h1 className='section-title'>no cocktails match your search</h1>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
