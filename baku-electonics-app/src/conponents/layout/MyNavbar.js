import React from 'react'
import '../../assets/css/MyNavbar.css';
import logo from '../../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faUser,faHeart,faScaleUnbalancedFlip,faCartShopping ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'




function MyNavbar() {
    return (
        <div>
            <div className='my-navbar'>
                <div className='nav-up'>
                    <p>İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>
                </div>
                <div className='nav-down'>
                    <div className='img-logo'>
                        <img src={logo} />
                    </div>
                    <div className='search'>
                        <input className='text' type='text' />
                    </div>
                    <div className='option'>
                        <ul>
                            <li className='color-li'>Kampaniyalar</li>
                            <li>Mağazalar</li>
                            <li>Digər</li>
                        </ul>
                    </div>
                    <div className='call-num'>
                        <h1 >143</h1>
                        <FontAwesomeIcon icon={faPhoneVolume} className='tel-icon' size='lg' />
                    </div>
                    <div className='icons'>
                        <div className='brdr-radius'><FontAwesomeIcon className='icn' icon={faUser} size="lg" /></div>
                        <div className='brdr-radius'><FontAwesomeIcon className='icn' icon={faHeart} size="lg" /></div>
                        <div className='brdr-radius'><FontAwesomeIcon className='icn' icon={faScaleUnbalancedFlip} size="lg" /></div>
                        <div className='brdr-radius'><FontAwesomeIcon className='icn' icon={faCartShopping} size="lg" /></div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default MyNavbar
