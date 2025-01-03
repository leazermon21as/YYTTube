import './Libary.css'
import Data from '../Data/DataJsonYT.json'
export default function libary () {
    return (
        <>
        <div className="videos">
            {Data.map((item) => {
                return(
                <div className="vids" key={item.id}>
                    <img src={item.img} alt={item.title} width={"400px"}/>
                    <h4>{item.title}</h4>
                    <p>{item.user}</p>
                </div>
            )
            })}
        </div>
        </>
    )
}