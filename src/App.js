import './scss/pages/App.scss'
import Footer from './components/Footer.js'
import GridGallery from './components/GridGallery';

function App() {
  return (
    <>
      <div className="App">
        <div className='logo-container'>
          <img src="logo.png" alt="" />
        </div>
        <div className="navigation-container homepage-padding">
          <nav className="nav">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='homepage-padding'>
          <div className='landingpage-image-container'>
            <img className='landingpage-image' src="/architect1.png" alt="" />
            <div className='landingpage-image-container-overlay'>
              <h2 className='quote'>“I thought the scale and the composition were quite well done and that indoor-outdoor space-making was quite well done.”— Juror Kai-Uwe Bergmann, FAIA</h2>
            </div>
          </div>
        </div>
        
        
       
        
        <section className='homepage-padding'>
          <h1>Header</h1>
          <h3>Subheader</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eos autem dicta impedit. Ipsa ex ipsum deserunt ad excepturi possimus amet pariatur quas, tenetur distinctio odio vitae tempore dignissimos consequuntur ullam. Illo voluptates, ullam commodi aliquid nulla ad ducimus, reprehenderit dolores sapiente dicta nihil obcaecati, facere accusantium quia eos. Assumenda, mollitia velit beatae deserunt accusantium asperiores amet quam eos quod corporis, dolore repudiandae, labore sed a aspernatur fugit suscipit! Laudantium eos veniam nulla odit et ratione at ipsum animi expedita doloremque. Perspiciatis nihil tempora ratione ullam facere sapiente, mollitia, nesciunt assumenda necessitatibus accusamus similique placeat laudantium. Hic tenetur, sunt optio sit culpa laudantium adipisci cumque unde voluptas temporibus molestiae similique natus saepe! Quis omnis sed vero ut reprehenderit, labore quae quos nemo nam. Ullam sint optio consectetur. Repudiandae provident unde dignissimos quisquam quis, eum temporibus soluta debitis aspernatur mollitia. Natus recusandae id quod temporibus voluptatum, quae culpa ipsa dolores ex, sunt minima vero accusamus cumque aut sit modi doloribus saepe commodi, nesciunt explicabo eum. Numquam placeat et eveniet laudantium, rem aliquid tempora nam non expedita. In ex quos distinctio quis maxime voluptatibus vero, amet inventore iste blanditiis quas sed rerum, repellendus adipisci sunt impedit voluptates praesentium ab dignissimos, tempore eveniet.</p>
          <h3>Subheader</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum similique delectus ullam excepturi aliquid necessitatibus quidem quod! Ipsa voluptas voluptate consequuntur voluptates molestiae magni natus doloribus inventore sit. Reiciendis necessitatibus, quidem sint ea consequuntur vero natus iure laudantium sapiente numquam corporis ullam et expedita praesentium aperiam vitae veritatis quia?</p>
        </section>
        <GridGallery/>
        <section className='homepage-padding'>
            <h1>Header</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dignissimos eum ducimus architecto quasi voluptas fugiat tempore corporis voluptates harum, laudantium qui voluptatem beatae fugit nesciunt itaque nobis repellat nostrum impedit debitis ad a non. Totam delectus necessitatibus dolorem voluptates pariatur in ipsum ea laboriosam vero at libero culpa quidem quisquam aut fugit, nemo omnis officiis ut adipisci impedit voluptatibus consequuntur porro nam sunt! Reiciendis, omnis ullam enim laborum rerum commodi corrupti quam totam quod, molestias, ab dolorum accusamus suscipit.</p>
            <img src="/architect2.jpeg" alt="" />
        </section>
        </div>
       
      <Footer/>
     </>
  );
}

export default App;
