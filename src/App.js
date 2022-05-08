import Customer from './components/Customer';

import './App.css';

const customers = [
  {
    'id' : 1,
    'image': 'https://placeimg.com/64/64/1',
    'name' : '홍길1',
    'birthday': '730606',
    'gender' : '남자',
    'job' : '회사원'
  },
  {
    'id' : 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '홍길2',
    'birthday': '730607',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '홍길3',
    'birthday': '900608',
    'gender' : '여자',
    'job' : '디자이너'
  }    
]

function App() {
  return (

    <div>

      {
        customers.map(c => {

          return (
            <Customer 
              key={c.id}
              id={c.id}
              name={c.name} 
              image={c.image}
              birthday={c.birthday}
              job={c.job}
              gender={c.gender}
            />
          )

        })
      }

    </div>

  );
}

export default App;
