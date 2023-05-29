import { DowloadContext } from '../App'
import { useContext,useState,useRef,useEffect } from 'react'

export default function Vip(){

    const ClickDowLoad = useContext(DowloadContext)

    const [menu,setMenu] = useState(1)

    let A = useRef(null)
    let B = useRef(null)
    let C = useRef(null)
    let D = useRef(null)

    
    let SlideVip3 = useRef(null)

    let WidthSlide = useRef(null)

    

    useEffect(() => {
      A.current = document.querySelector('.Vip231A')
      B.current = document.querySelector('.Vip231B')
      C.current = document.querySelector('.Vip231C')
      D.current = document.querySelector('.Vip231D')
      SlideVip3.current = document.querySelector('.SlideVip3')
      WidthSlide.current = 610

    
    },[])

    const Click1 = () => {
        setMenu(1)
         SlideVip3.current.style = `transform: translateX(${WidthSlide.current*0}px);`
    }

    const Click2 = () => {
        setMenu(2)
        SlideVip3.current.style = `transform: translateX(-${WidthSlide.current*1}px);`
      
    }

    const Click3 = () => {
        setMenu(3)
        SlideVip3.current.style = `transform: translateX(-${WidthSlide.current*2}px);`
      
    }

    const Click4 = () => {
        setMenu(4)
        SlideVip3.current.style = `transform: translateX(-${WidthSlide.current*3}px);`
      
    }

    


    function DotVip() {

    let X = useRef(null)
    let Index = useRef(null)

    let Vip42 = useRef(null)

    let WidthOfSlideNotMain = useRef(null)

    let DotNotMain = useRef(null)
        
        useEffect(() => {
             Vip42.current = document.querySelector('.Vip42')
             WidthOfSlideNotMain.current = 600
             DotNotMain.current = document.querySelectorAll('.DotNotMainV')
             X.current = 0
             Index.current = 0
      
        }, []);
      
        useEffect(() => {
    
         DotNotMain.current.forEach(item => item.addEventListener('click',(x)=>{
         DotNotMain.current.forEach(temi => temi.classList.remove('PRO'))
    
         x.target.classList.add('PRO')
       
        console.log(item);
        var slideIndex = parseInt(x.target.dataset.index)
        console.log(slideIndex)
        Index.current = slideIndex
    
        X.current = -1*Index.current* WidthOfSlideNotMain.current
      
        Vip42.current.style = `transform : translateX(${X.current}px)`
          
      }))
          
        }, [X]);
      
       
      }

      DotVip()
    


    
   
   return(
        <div className="SupperVipPro">

            <div className="VipPro">

                <div className="Vip">

                    <div className="Vip01">
                        <div className="Vip1">
                        
                                           <p className="Vip11">Create your app page with Appsperia</p>
                                           <p className="Vip12">A better way to present your app using fully featured appsperia template.
                                             Now available on the App Store and Play Store!</p>
                                           <button className="Vip13" onClick = {ClickDowLoad.DowLoad}>⭳ Download App</button>
                        </div>
                    </div>


                    <div className="Vip02">
                        <div className="Vip2">
                            <p className="Vip21">Amazing Features</p>
                            <p className="Vip22">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Tempora similique excepturi obcaecati, maiores nostrum esse illo in soluta at
                             saepe perspiciatis eos quasi laudantium sunt ad quaerat?</p>
                            <div className="Vip23">
                                <p className="Vip231"><span className="Vip2311">+</span>Clear Design</p>
                                <p className="Vip231"><span className="Vip2311">+</span>Well Documented</p>
                                <p className="Vip231"><span className="Vip2311">+</span>Dedicated Support</p>
                                <p className="Vip231"><span className="Vip2311">+</span>Multiple Demos</p>
                                <p className="Vip231"><span className="Vip2311">+</span>Very Custommizable</p>
                                <p className="Vip231"><span className="Vip2311">+</span>Amazing Features</p>
                            </div>
                        </div>
                    </div>

                    <div className="Vip03">
    
                        <div className="Vip3">
    
                            <p className="Vip30">About Appsperia</p>
    
                            <div className="Vip31">
                                <p className="Vip231A" id = 'Vip231' onClick = {Click1} style = {menu == 1 ? {'border-bottom': '5px solid red'}: {}}>Design</p>
                                <p className="Vip231B" id = 'Vip231' onClick = {Click2} style = {menu == 2 ? {'border-bottom': '5px solid red'}: {}}>Features</p>
                                <p className="Vip231C" id = 'Vip231' onClick = {Click3} style = {menu == 3 ? {'border-bottom': '5px solid red'}: {}}>Demons</p>
                                <p className="Vip231D" id = 'Vip231' onClick = {Click4} style = {menu == 4 ? {'border-bottom': '5px solid red'}: {}}>Elememt</p>
                            </div>


<div className="SlideSupperVipPro3">
    <div className="SlideVipPro3">
        <div className="SlideVip3">
    
                                        <div className="Vip32L">
                                            <p className="Vip32"><span className="Vip2311">+</span>Good design doesn't date!</p>
                                                 <p className="Vip33">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                  Tempora similique excepturi obcaecati, maiores nostrum esse illo in soluta at
                                                  saepe perspiciatis eos quasi laudantium sunt ad quaerat ipsum dolor sit amet,
                                                  consectetur adipisicing elit?</p>
                                        </div>
    
                                       <p className="Vip33L">
                                           <p className="Vip32L">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                           Tempora similique excepturi obcaecati, aiores nostrum esse illo in soluta.</p>
    
                                                  <p className="Vip331">
                                                      <p className="Vip332"><span className="Vip2311">+</span> Unique Design</p>
                                                      <p className="Vip332"><span className="Vip2311">+</span> Multiple Demos</p>
                                                      <p className="Vip332"><span className="Vip2311">+</span> Well Documented</p>
                                                      <p className="Vip332"><span className="Vip2311">+</span> Amazing Features</p>
    
                                                  </p>
                                       </p>
    
                                      <div className="Vip32L">
                                          <p className="Vip32"><span className="Vip2311">+</span>Check out Appsperia's multiple demos!</p>
                                                  <p className="Vip33">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                  Tempora similique excepturi obcaecati, maiores nostrum esse illo in soluta at
                                                  saepe perspiciatis eos quasi laudantium sunt ad quaerat ipsum dolor sit amet,
                                                  consectetur adipisicing elit?</p>
                                      </div>
    
    
    
    
                                      <p className="Vip33L">
                                           <p className="Vip32L">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                           Tempora similique excepturi obcaecati, aiores nostrum esse illo in soluta.</p>
    
                                                  <p className="Vip331">
                                                      <p className="Vip332"><span className="Vip2311">+</span> Unique Design</p>
                                                      <p className="Vip332"><span className="Vip2311">+</span> Multiple Demos</p>
                                                      <p className="Vip332"><span className="Vip2311">+</span> Well Documented</p>
                                                      <p className="Vip332"><span className="Vip2311">+</span> Amazing Features</p>
    
                                                  </p>
                                       </p>
        </div>
    
    </div>
</div>



    
                        </div>
                   </div>
                    
                    <div className="Vip04">
                        <div className="Vip4">
                            <p className="Vip41">
                            Clients feedbacks
                            </p>
                            <div className="SupperVipPro42">
                                <div className="VipPro42">
                                    <div className="Vip42">
                                        <div className="Vip421">
                                            <p className="Vip422">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Libero dolores omnis illum, voluptates fugiat incidunt, consectetur aspernatur
                                              rerum. Consequatur obcaecati, facere iusto alias nostrum officiis modi eum
                                              perspiciatis.</p>
                                              <p className="Vip423">
                                                <span className="Vip424">Mark Williams</span>- Developer
                                              </p>
                                        </div>
                                        <div className="Vip421">
                                            <p className="Vip422">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Libero dolores omnis illum, voluptates fugiat incidunt, consectetur aspernatur
                                              rerum. Consequatur obcaecati, facere iusto alias nostrum officiis modi eum
                                              perspiciatis.</p>
                                              <p className="Vip423">
                                                <span className="Vip424">Andreas Bosch</span>- CEO
                                              </p>
                                        </div>
                                        <div className="Vip421">
                                            <p className="Vip422">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Libero dolores omnis illum, voluptates fugiat incidunt, consectetur aspernatur
                                              rerum. Consequatur obcaecati, facere iusto alias nostrum officiis modi eum
                                              perspiciatis.</p>
                                              <p className="Vip423">
                                                <span className="Vip424">Michael Speria</span>- Manager
                                              </p>
                                        </div>
                                    </div>
                                    <div className="DotNotMain">
                                        <div className="DotNotMainV PRO" data-index  = '0'></div>
                                        <div className="DotNotMainV" data-index  = '1'></div>
                                        <div className="DotNotMainV" data-index  = '2'></div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>


                    <div className="Vip05">
                        <div className="Vip5">
                            <p className="Vip51">
                            Screenshots
                            </p>
                            <div className="p Vip52"><span className="Vip53">+</span>Present your app with AppSperia screenshots</div>
                            <div className="p Vip52"><span className="Vip53">+</span>Change images using side arrows or caption bullets</div>
                            <div className="p Vip52"><span className="Vip53">+</span> Navigate using keyboard arrows to change screenshots</div>
                        </div>
                    </div>

                    <div className="Vip06">
        <div className="Vip6">
            <p className="Vip60">Pricing Packages</p>
            <div className="Vip600">
                <div className="Vip61">
                    <p className="Vip621">Starter</p>
        
                    <div className="Vip622">
                        <p className="Vip623">
                           $ 5.99
                        </p>
                        <p className="Vip624"><span className="Vip53">+</span>free support</p>
                        <p className="Vip624"><span className="Vip53">+</span>100 features</p>
                        <p className="Vip624"><span className="Vip53">+</span>15 accounts</p>
                    </div>
                    <p className="Vip625">Buy now</p>
                </div>
                <div className="Vip61">
                    <div className="Vip621">Normal</div>
        
                    <div className="Vip622">
                        <div className="Vip623">
                          $ 9.99
                        </div>
                        <div className="Vip624"><span className="Vip53">+</span>free support</div>
                        <div className="Vip624"><span className="Vip53">+</span>120  features</div>
                        <div className="Vip624"><span className="Vip53">+</span>25  accounts</div>
                    </div>
                    <div className="Vip625">Buy now</div>
                </div>
                <div className="Vip61">
                    <div className="Vip621">Premium</div>
        
                    <div className="Vip622">
                        <div className="Vip623">
                        $ 12.99
                        </div>
                        <div className="Vip624"><span className="Vip53">+</span>free support</div>
                        <div className="Vip624"><span className="Vip53">+</span>150  features</div>
                        <div className="Vip624"><span className="Vip53">+</span>45  accounts</div>
                    </div>
                    <div className="Vip625">Buy now</div>
                </div>
            </div>
        </div>
    </div>


                    <div className="Vip07">
                        <div className="div Vip7">
                            <p className="Vip71">Download the app</p>
                            <p className="Vip72">A better way to present
                             your app using fully featured appsperia template.
                             Now available on the App Store and Play Store!</p>
                             <div className="button">
                                <button className="AppStore"><img src="https://appsperia.keydesign-themes.com/demo1/images/appstore.png" alt="" className="img1" />App Store</button>
                                <button className="PlayStore"><img src="https://appsperia.keydesign-themes.com/demo1/images/playstore.png" alt="" className="img1" />Play Store</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   )
}