import { useEffect, useRef } from 'react'

export default function MenuVip(){

    let menuVip = useRef(null)

    useEffect(() => {
             menuVip.current = document.querySelector('.MenuVip')
    },[])
       
    const Click = () => {
      menuVip.current.style = 'margin-left : -250px'
    }



    return(
    <div className = 'MenuVip'>

        <div className="navMenu" onClick = {Click}>| | |</div>

     <div className="imgMenu">
        <img src="https://appsperia.keydesign-themes.com/demo1/images/menu-logo.png" alt="" className="imgMenu" />
     </div>

     <p className="menuIcon" data-index  = '0'><i class="fa fa-home" ></i>Home</p>
     <p className="menuIcon" data-index  = '1'><i class="fa fa-globe" ></i>Features</p>
     <p className="menuIcon" data-index  = '2'><i class="fa fa-bolt" ></i>About</p>
     <p className="menuIcon" data-index  = '3'><i class="fa fa-bookmark-o" ></i>Clients</p>
     <p className="menuIcon" data-index  = '4'><i class="fa fa-camera-retro" ></i>Screenshots</p>
     <p className="menuIcon" data-index  = '5'><i class="	fa fa-check-circle-o" ></i>Pricing</p>
     <p className="menuIcon" data-index  = '6'><i class="fa fa-cloud-download" ></i>Download</p>

    </div>




    )
}