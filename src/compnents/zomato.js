import './zomato.css';
import phone from './img/veggie food.jpg'
import food from './img/cupcakes.jpg'
import cafes from './img/cappaccino.jpg'
import buffet from './img/buffets.jpg'

export function Collection () {

    return(
        <div>
            <div className='collection-container'>
                <div className='collection'>
                    <h1>Collections</h1>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Tirunelveli, based on trends</p>
                </div>
            </div>
            <div className='collection-container'>
            <div className='collection-cards'>
                <div>
                      <a href='#'><img src={phone}width={226}height={290}></img></a>
                      <p><b>Veggie Friendly</b></p>
                </div>
                  <div>
                        <a href='#'><img src={food}width={226}height={290}></img></a>
                        <p><b>Sweet Tooth</b></p>
                </div>
               <div>
               <a href='#'><img src={cafes}width={226}height={290}></img></a>
                        <p><b>Great Cafes</b></p>
               </div>

               <div>
                <a href='#'><img src={buffet}width={226}height={290}></img></a>
                        <p><b>Great Buffets</b></p>
               </div>
            </div>
            </div>
        </div>
    );
    
}

export const Zomato = () => {
  return (
    <div>
        <div className='Zomato-container'>
        <div className='Zomato-img'>

        </div>
        <div className='Zomato-content'>
            <h3>Get the Zomato app</h3>
            <p>We will send you a link, open it on your phone to download the app</p>
            
        </div>
        </div>
    </div>
  )
}

