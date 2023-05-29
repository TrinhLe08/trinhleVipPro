import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState, createContext } from 'react'
import Header from './Componenst/Header'
import Vip from './Componenst/Vip'
import Img from './Componenst/ImgHand'
import ImgNotMain from './Componenst/ImgNotMain'
import MenuVip from './Componenst/MenuVip'
import Dot from './Componenst/Dot'



export const DowloadContext = createContext()

function App() {
 
   let WidthVip = 800
   let WidthImg = 372.4
   let X = 0
   let Y = 0 
   let Z = useRef(null)
   let A = useRef(null)
   let B = useRef(null)
  
  


    const [scroll,setScroll] = useState(-800)
    const [scrollV,setScrollV] = useState(800)
    const [img,setImg] = useState(-372.4)
    const [imgV,setImgV] = useState(372.4)
    // const [Z,setZ] = useState(0)


  //Click
    
   let div1 = useRef(null)
   let div2 = useRef(null)
   let VipP = useRef(null)
   let ImgNotMainVip = useRef(null)
   let ButtonDowload = useRef(null)


   //Dot

   let dotItem = useRef(null)



   useEffect(() => {
    
           div1.current = document.querySelector('.div1')
           div2.current = document.querySelector('.div2')
           VipP.current = document.querySelector('.Vip')
           ImgNotMainVip.current = document.querySelector('.ImgNotMainVip')
           ButtonDowload.current = document.querySelector('.Vip13')

           //Dot
           Z.current = 0

           A.current = 0
           B.current = 0

           dotItem.current = document.querySelectorAll('.dot')
          
          
   },[])

   function MenuIconVip() {

    const menuIcon = useRef(null);
    const dotItem = useRef(null);
    const MenuVip = useRef(null)
    
    useEffect(() => {
      menuIcon.current = document.querySelectorAll('.menuIcon');
      dotItem.current = document.querySelectorAll('.dot');
      MenuVip.current = document.querySelector('.MenuVip')
    }, []);
  
    useEffect(() => {

      // dotItem.current[0].classList.add('PRO');

      for (let i = 0; i < menuIcon.current.length; i++) {
        menuIcon.current[i].addEventListener('click', () => {

          dotItem.current[0].classList.remove('PRO')
          
          dotItem.current.forEach((temi) => temi.classList.remove('PRO'));


          dotItem.current[i].classList.add('PRO');

          const slideIndex = parseInt(menuIcon.current[i].dataset.index);
  
              Z.current = slideIndex;
      
              const X = -1 *(Z.current )* WidthVip;
            
              const Y = -1 *(Z.current  )* WidthImg;

              A.current = X
              B.current = Y
    
              MenuVip.current.style = 'margin-left : -250px'
    
              console.log(scroll,' ',scrollV,'', img, ' ',imgV,'Dot');
      
              VipP.current.style = `transform : translateY(${X}px)`;
              
              ImgNotMainVip.current.style = `transform: translateY(${Y}px);`
    

        })
        
      }
      
    }, [scroll]);
  
   
  }

  MenuIconVip()



   
 

  function DotVip() {

    const dotItem = useRef(null);
    
    useEffect(() => {
      dotItem.current = document.querySelectorAll('.dot');
    }, []);
  
    useEffect(() => {

      dotItem.current.forEach((item) => {
  
        item.addEventListener('click', (x) => {
  
          dotItem.current.forEach((temi) => temi.classList.remove('PRO'));
  
          x.target.classList.add('PRO');
        
          const slideIndex = parseInt(x.target.dataset.index);
  
          Z.current = slideIndex;
  
          const X = -1 *(Z.current )* WidthVip;
        
          const Y = -1 *(Z.current  )* WidthImg;

          console.log(X,' ',Y);

          A.current = X
          B.current = Y

          console.log(Z.current);

          console.log(scroll,' ',scrollV,'', img, ' ',imgV,'Dot');
  
          VipP.current.style = `transform : translateY(${X}px)`;
          
          ImgNotMainVip.current.style = `transform: translateY(${Y}px);`

        });
      });
      
    }, [scroll]);
  
   
  }

  DotVip()

  

    //Đặt điều kiện


  

  // Click đi lên

     const Click1 = () => { 

      // A.current = -WidthVip*6

      // B.current = -WidthImg*6
      
    dotItem.current[6].classList.remove('PRO');

    console.log( A.current , ' ', B.current, ' ',Z.current);

    if (Z.current < 0) {
      Z.current = 1
      return
    }

      Z.current --

      console.log(Z.current);

      console.log(Z.current , 'LÊN');

      console.log(A.current , ' ', B.current);

      A.current = A.current + WidthVip
      B.current = B.current + WidthImg

      if (A.current > 0 && B.current > 0  ) {
        console.log(12);
        A.current = 0
        B.current = 0
        Z.current = 0
        
        console.log( A.current , ' ', B.current, ' ',Z.current);
        return
       }
      console.log(A.current , ' ', B.current);
    
       
       VipP.current.style = `transform: translateY(${A.current}px);`
       
       ImgNotMainVip.current.style = `transform: translateY(${B.current}px);`

       if (Z.current < 0) {
        // setZ(1)
        Z.current = 0
        return
      }

     
      if (Z.current >=  0) {
        dotItem.current[Z.current].classList.add('PRO')
      }


       if (Z.current < 6) {
         dotItem.current[Z.current+1].classList.remove('PRO')
       }

      
     }




    //Đặt điều kiện
    
    


   //Click đi xuống

     const Click2 = () => {

       if (Z.current >= 6) {
        console.log(Z.current);
        return
       }
       Z.current++

       
       
       //  console.log(Z.current, 'XUỐNG');
       
       A.current = A.current - WidthVip
       B.current = B.current - WidthImg
       
       if (A.current < -4800 && B.current <  -2234.4 && Z.current > 6) {
         console.log(12);
         A.current = -3200
         B.current = -1862
         Z.current = 6
         
         console.log( A.current , ' ', B.current, ' ',Z.current);
         return
        }
       VipP.current.style = `transform: translateY(${A.current}px);`
       
       ImgNotMainVip.current.style = `transform: translateY(${B.current}px);`
       if (Z.current > 6) {
        // setZ.current(6)
        Z.current = 6
        return
      }

       
       if (Z.current <= 6) {
         dotItem.current[Z.current].classList.add('PRO')
       }

       if (Z.current > -1) {
        dotItem.current[Z.current-1].classList.remove('PRO')

       }
     }

     


     //Button Dowload

     const DowLoad = () => {

      dotItem.current[0].classList.remove('PRO');

      Z.current = 6

      A.current = -WidthVip*6

      B.current = -WidthImg*6

      

      console.log( A.current , ' ', B.current, ' ',Z.current);

      dotItem.current[6].classList.add('PRO');

      VipP.current.style = `transform: translateY(${A.current}px);`
       
       ImgNotMainVip.current.style = `transform: translateY(${B.current}px);`
       
  
 

   }


   const value = {
      DowLoad
     }

  

  return (
    <DowloadContext.Provider value = {value}>


      <div className="App">
       <Header></Header>
  
       <div class="Main">
        <MenuVip></MenuVip>
         <Dot></Dot>
         <Vip></Vip>
         <Img></Img>
         <ImgNotMain></ImgNotMain>
       </div>
       
       <div>
         <div className='div1' onClick = {Click1}/>
         <div className='div2' onClick = {Click2}/>
      </div>
       </div>

       
    </DowloadContext.Provider>
  );
}

export default App;
