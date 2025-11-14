import Rating from './components/Rating'
import { useState } from 'react'

// const Counter = () => {
//   const [count, setCount] = useState(() => {
//     console.log('init count state ...')
//     return 0
//   })

//   const increment = () => {
//     setCount(prevCount => {
//       console.log(prevCount)
//       return prevCount + 1
//     })
//   }

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//     </>
//   )
//}

const App = () => {
  return (
    <div>
      <Rating
        heading="How do you feel about React?"
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it'
        ]}
      />

      {/* <Counter /> */}
    </div>
  )
}

export default App
