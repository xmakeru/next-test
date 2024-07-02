export default function Card({children}) {
  const CardStyle = {
    padding: "100px",
    border: "1px solid #FFF",
  }
  return <div style={CardStyle}>{children}</div>
}

//Вариант для стилизации, то есть при импорте этого файла, компонент <Card /> будет иметь стили cardStyle