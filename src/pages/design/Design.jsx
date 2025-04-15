import ItemCard from '../../components/ItemCard'
import { contentStrings } from '../../data/contentStrings'

export default function Design() {
  return (
    <div className='w-full sm:w-[1280px] h-full mx-auto'>
      <div className='text-[25px] mb-[60px] font-light'>설계품목</div>
      <div className='w-full h-[1200px] sm:h-[650px] grid grid-cols-1 gap-7 sm:grid-cols-4'>
        {contentStrings.design.items.map((item) => (
          <ItemCard key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  )
}
