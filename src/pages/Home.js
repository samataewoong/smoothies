import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'
import SmoothieCard from '../components/SmoothieCard';

const Home = () => {
  //에러 발생 시 화면에 표시
  const [fetchError, setfetchError] = useState(null);
  //supabse에서 데이터 읽어와서 저장
  const [smoothies, setSmoothies] = useState(null);
  //정렬
  const [orderBy, setOrderBy] = useState('created_at');

  const handleDelete = (id) => {
    setSmoothies(prevSmoothies => {
      return prevSmoothies.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchSmoothies = async () => {//슈퍼베이스 작업
      const { data, error } = await supabase.from('smoothies').select().order(orderBy, { ascending: false });
      if (error) {
        setfetchError('Could not fetch the smoothies');
        setSmoothies(null);
      }
      if (data) {
        setSmoothies(data);
        setfetchError(null);
      }
    }
    fetchSmoothies();
  }, [orderBy]);

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order By:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Create1</button>
            <button onClick={() => setOrderBy('title')}>Title Create</button>
            <button onClick={() => setOrderBy('rating')}>Rating Create</button>
          </div>
          <div className="smoothie-grid">
            {smoothies.map(smoothie => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
