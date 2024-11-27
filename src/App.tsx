import './App.css'

type Args = {
  count?: number,
}

function Star(){
  return (
    <>
      <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
        <path d="M0 0h18v18H0z" fill="none" />
      </svg>
    </>
  )
}
function Stars({count = 0}: Args) {
  if(typeof count !== "number" || count > 5 || count < 5){
    return null;
  }
  let list: Array<JSX.Element> = []
  for(let i=0; i<count; i++){
    let element = <li><Star key={i}/></li>
    list.push(element)
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {list.map(item => {
        return item
      })}
    </ul>
  )
}

function App() {
  return (
    <Stars count={5} />
  )
}

export default App

