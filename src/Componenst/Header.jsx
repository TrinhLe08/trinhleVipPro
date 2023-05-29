import { useEffect, useRef } from 'react'

export default function Header(){

    let menuVip = useRef(null)

    useEffect(() => {
        menuVip.current = document.querySelector('.MenuVip')
    },[])

   const Click = () => {
    menuVip.current.style = 'margin-left : 0px'
   }


    return(
        <div className="Header">

        <div className="menu" onClick = {Click}>| | |</div>

        <div className="SloGen">
          <span className="SloGen1">App</span>
          <span className="SloGen2">speria</span>
        </div>
        <div></div>
        <div></div>

        </div>
    )
}