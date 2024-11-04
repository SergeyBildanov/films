import './App.css'

type Args = {
  count?: number,
}

function Star() {
  return (
    <li>
      <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
        <path d="M0 0h18v18H0z" fill="none" />
      </svg>
    </li>
  )
}
function Stars({count = 0}: Args) {
  if(typeof count !== "number" || count > 5){
    return null;
  }
  let list = [1, 2, 3, 4, 5];
  list = list.map(i => {
    return (i > count) ? 0 : i;
  })
  console.log(list);
  return (
    <ul className="card-body-stars u-clearfix">
      {list.map(i => {
        return i === 0 ? false : <Star key={i} />
      })}
    </ul>
  )
}

function App() {
  return (
    <>
    <Stars count={5} />
    </>
  )
}

export default App

