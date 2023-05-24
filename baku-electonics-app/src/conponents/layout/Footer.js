import React from 'react'
import Image from '../../assets/img/visa.svg'
import Image2 from '../../assets/img/master.svg'

import '../../assets/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div>
            <div className='row'>
                <div className='col-8 ftr'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='footer'>
                                <div className='footer-title'>
                                    <h3>Məlumat</h3>
                                </div>
                                <div>
                                    <ul className='footer-menu'>
                                        <li>
                                            <a href='#'>Kampaniyalar</a>
                                        </li>
                                        <li>
                                            <a href='#'>Müştəri kartı</a>
                                        </li>
                                        <li>
                                            <a href='#'>Brendlər</a>
                                        </li>
                                        <li>
                                            <a href='#'>Blog</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className='footer-bottom'>
                                    <h3>Ödəniş:</h3>
                                </div>
                                <ul className='payment'>
                                    <li>
                                        <img src={Image} />
                                    </li>
                                    <li>
                                        <img src={Image2} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='footer'>
                                <div className='footer-title'>
                                    <h3>Şirkət</h3>
                                </div>
                                <div>
                                    <ul className='footer-menu'>
                                        <li>
                                            <a href='#'>Şirkət haqqında</a>
                                        </li>
                                        <li>
                                            <a href='#'>Mağazalar</a>
                                        </li>
                                        <li>
                                            <a href='#'>Vakansiyalar</a>
                                        </li>
                                        <li>
                                            <a href='#'>Korporativ satışlar</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className='footer-bottom'>
                                    <h3>Bizə qoşulun</h3>
                                </div>
                                <ul className='payment'>
                                    <li>
                                        <img src={Image} />
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='footer'>
                                <div className='footer-title'>
                                    <h3>Alıcılara</h3>
                                </div>
                                <div>
                                    <ul className='footer-menu'>
                                        <li>
                                            <a href='#'>Çatdırılma və ödəniş</a>
                                        </li>
                                        <li>
                                            <a href='#'>Zәmanәt</a>
                                        </li>
                                        <li>
                                            <a href='#'>Servis mərkəzləri</a>
                                        </li>
                                        <li>
                                            <a href='#'>Nisyə alış</a>
                                        </li>

                                    </ul>
                                </div>

                                <ul className='payment'>
                                    <li>
                                        © 2018 - 2023 bakuelectronics.az
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-4 ftr-right'>
                    <div className='center'>
                        <p>Məlumat Mərkəzi</p>
                        <div className='time'>
                            <span>9:00 - 20:00 (hər gün)</span>
                        </div>
                        <div className='phone'>
                            <FontAwesomeIcon icon={faPhone} />
                            <div className='number'>
                                <p>143</p>
                            </div>
                        </div>
                        <div className='info'>
                    <p>info@bakuelectronics.az</p>
                </div>
                <div className='owner'>
                    <p>Saytın hazırlanması</p>
                    <span>By Caho</span>
                </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Footer
