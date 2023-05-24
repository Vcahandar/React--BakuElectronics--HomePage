import React from 'react'
import '../../assets/css/Home.css';
import background from "../../assets/img/28may-news.jpg";
import Image from '../../assets/img/card1.jpg'
import Image2 from '../../assets/img/card2.jpg'
import Image3 from '../../assets/img/card3.jpg'
import Image4 from '../../assets/img/card4.jpg'
import Image7 from '../../assets/img/card7.jpg'
import Image9 from '../../assets/img/card9.jpg'
import Image10 from '../../assets/img/card10.jpg'
import Image11 from '../../assets/img/card11.jpg'
import Image12 from '../../assets/img/card12.jpg'
import Image13 from '../../assets/img/card14.jpg'
import Image15 from '../../assets/img/card15.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'




function MainInfo() {
    return (
        <>
            <div className='container'>
                <section id='info-discount'>
                    <div className='row my-3'>
                        <div className='col-6'>
                            <div className='bck-img' style={{ backgroundImage: `url(${background})` }}>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='description-info'>
                                <div className='dscrptn-header'>
                                    <a className=''>
                                        Bütün kampaniyalar
                                    </a>
                                </div>

                                <div className='info-text'>
                                    <h4>
                                        Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!
                                    </h4>
                                    <p>15-31 may tarixləri arasında alış-verişlərdə müstəqilsən!
                                        Nağd alışda 50 %-dək endirim!
                                        Məişət texnikası, TV və kondisioner 0 0 0 18 AY
                                        Smart-saat və aksesuarlar 0 0 18 AY</p>
                                    <a className='a-class'>Ətraflı</a>
                                </div>
                                <div className='time-text'>
                                    <p>Kampaniyanın sonuna qalıb</p>
                                    <h5>08gün : 03saat : 57dəq</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='products'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='category'>
                                <p>Kampaniyada iştirak edən məhsullar</p>
                                <ul>
                                    <li><span>Kondisionerlər</span><span className='num-ctg'> (32)</span></li>
                                    <li><span>Kombi</span><span className='num-ctg'> (19)</span></li>
                                    <li><span>Soyuducular</span><span className='num-ctg'> (71)</span></li>
                                    <li><span>Paltaryuyan maşınlar</span><span className='num-ctg'> (61)</span></li>
                                    <li><span>Qabyuyan maşınlar</span><span className='num-ctg'> (28)</span></li>
                                    <li><span>Tozsoranlar</span><span className='num-ctg'> (46)</span></li>
                                    <li><span>Bişirmə panelləri</span><span className='num-ctg'> (31)</span></li>
                                    <li><span>Quraşdırılan sobalar</span><span className='num-ctg'> (29)</span></li>
                                    <li><span>Quraşdırılan sobalar</span><span className='num-ctg'> (35)</span></li>
                                    <li><span>Mətbəx plitələri</span><span className='num-ctg'> (3)</span></li>
                                    <li><span>Qəhvə dəmləyən, qəhvə maşınları</span><span className='num-ctg'> (34)</span></li>
                                    <li><span>Tosterlər</span><span className='num-ctg'>(32)</span></li>
                                    <li><span>Blenderlər</span><span className='num-ctg'> (95)</span></li>
                                    <li><span>Mikserlər</span><span className='num-ctg'>(32)</span></li>
                                    <li><span>Elektrik çaydanlar və termopotlar</span><span className='num-ctg'> (64)</span></li>
                                    <li><span>Qəhvə üyüdücüləri</span><span className='num-ctg'> (3)</span></li>
                                    <li><span>Ətçəkən maşınlar</span><span className='num-ctg'> (29)</span></li>
                                    <li><span>Fenlər</span><span className='num-ctg'> (10)</span></li>
                                    <li><span>Ütülər və buxar generatorları</span><span className='num-ctg'> (79)</span></li>
                                    <li><span>Mətbəx kombaynları</span><span className='num-ctg'> (42)</span></li>
                                    <li><span>Çörək bişirən</span><span className='num-ctg'> (8)</span></li>
                                    <li><span>Buxarlı bişiricilər</span><span className='num-ctg'> (1)</span></li>
                                    <li><span>Şirəçəkənlər</span><span className='num-ctg'> (24)</span></li>
                                    <li><span>Saç qırxan</span><span className='num-ctg'> (8)</span></li>
                                    <li><span>Trimmerlər</span><span className='num-ctg'> (15)</span></li>
                                    <li><span>Epilyatorlar</span><span className='num-ctg'> (7)</span></li>
                                    <li><span>Mikroiqlim</span><span className='num-ctg'> (9)</span></li>
                                    <li><span>Ev və ofis telefonları</span><span className='num-ctg'> (17)</span></li>
                                    <li><span>Smartfonlar, mobil telefonlar</span><span className='num-ctg'> (256)</span></li>
                                    <li><span>Qapaqlar</span><span className='num-ctg'> (25)</span></li>
                                    <li><span>Mətbəx aksesuarları</span><span className='num-ctg'> (35)</span></li>
                                    <li><span>Tavalar</span><span className='num-ctg'> (125)</span></li>
                                    <li><span>Qazanlar</span><span className='num-ctg'> (44)</span></li>
                                    <li><span>Tava qazan dəstləri</span><span className='num-ctg'> (29  )</span></li>
                                    <li><span>Boşqablar və salat qabları </span><span className='num-ctg'> (14)</span></li>
                                    <li><span>Kronşteyn və divar asılqanları</span><span className='num-ctg'> (15)</span></li>
                                    <li><span>Mətbəx plitələri</span><span className='num-ctg'> (3)</span></li>
                                    <li><span>Qəhvə dəmləyən, qəhvə maşınları</span><span className='num-ctg'> (34)</span></li>
                                    <li><span>Tosterlər</span><span className='num-ctg'> (44)</span></li>
                                    <li><span>Blenderlər</span><span className='num-ctg'> (32)</span></li>
                                    <li><span>Mətbəx tərəziləri </span><span className='num-ctg'> (3)</span></li>
                                    <li><span>Döşəmə tərəziləri</span><span className='num-ctg'> (2)</span></li>
                                    <li><span>Yemək dəstləri</span><span className='num-ctg'> (5)</span></li>
                                    <li><span>Televizorlar</span><span className='num-ctg'> (52)</span></li>
                                    <li><span>Bişirmə üçün qablar</span><span className='num-ctg'> (19)</span></li>
                                    <li><span>Multistayler</span><span className='num-ctg'> (1)</span></li>
                                    <li><span>Notbuklar</span><span className='num-ctg'> (113)</span></li>
                                    <li><span>Fotoaparatlar</span><span className='num-ctg'> (5)</span></li>
                                    <li><span>Dondurucu kameralar</span><span className='num-ctg'> (1)</span></li>
                                    <li><span>Elektrik üzqırxan</span><span className='num-ctg'> (11)</span></li>
                                    <li><span>Printerlər</span><span className='num-ctg'> (9)</span></li>
                                    <li><span>Kartriclər</span><span className='num-ctg'> (3)</span></li>
                                    <li><span>Buxar dolabı</span><span className='num-ctg'> (1)</span></li>
                                    <li><span>Çəngəl-bıçaq dəstləri</span><span className='num-ctg'> (7)</span></li>
                                    <li><span>Planşetlər</span><span className='num-ctg'> (37)</span></li>
                                    <li><span>Qulaqlıqlar</span><span className='num-ctg'> (54)</span></li>
                                    <li><span>Adapterlər</span><span className='num-ctg'> (12)</span></li>
                                    <li><span>Klaviatura və kompüter siçanları</span><span className='num-ctg'> (16)</span></li>
                                    <li><span>Vitrin</span><span className='num-ctg'> (11)</span></li>
                                    <li><span>Masa</span><span className='num-ctg'> (24)</span></li>
                                    <li><span>Kitab dolabı</span><span className='num-ctg'> (4)</span></li>
                                    <li><span>Velosipedlər</span><span className='num-ctg'> (17)</span></li>
                                    <li><span>Dispenserlər</span><span className='num-ctg'> (1)</span></li>
                                    <li><span>Elektroskuter</span><span className='num-ctg'> (2)</span></li>
                                    <li><span>Müxtəlif</span><span className='num-ctg'> (4)</span></li>
                                    <li><span>Masaüstü kompüterlər</span><span className='num-ctg'> (1)</span></li>

                                </ul>

                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image2} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>250₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Soyuducu BOSCH KGN33NW21U</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1499.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 84 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image3} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>1 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kombi DemirDöküm Atron 28 SM-KITr</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1699.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 95 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image4} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>450₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1749.99  ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 98 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image4} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>400₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>1 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG I12CGH.NGGF-KIT, 12000 BTU</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1649.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 92 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image4} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>550₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG I24CGH.NGGF-KIT, 24000 BTU, Invertor</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>2399.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image7} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>400₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kombi DemirDöküm Nitron Plus 24 SM-KIT</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1599.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 89 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image9} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>270₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>1 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Soyuducu HAIER C2F636CWRG</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1519.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 85 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image10} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>600₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>3 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Soyuducu LG GR-X257CSAV Side by Side Refrigerator</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>5999.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 334 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>250₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image11} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Soyuducu BOSCH KGN33NW21U</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1499.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 84 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image12} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>1 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Soyuducu BOSCH KGN36XL30U</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image13} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image15} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-4'>
                                    <div className='prod-card mt-1'>
                                        <div className='card-img'>
                                            <img src={Image} />
                                        </div>
                                        <div className='discount-card'>
                                            <span>300₼</span>
                                            <p>Nağd alışa</p>
                                            <div className='dscnt'>
                                                <p>ENDIRIM</p>
                                            </div>
                                        </div>
                                        <div className='star-icon'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <div className='comment'>0 rəy</div>
                                        </div>
                                        <div className='card-name'>
                                            <p>Kondisioner LG A12CMH.NGGF-KIT,
                                                12000 BTU / 30-40 m2,
                                                inverter</p>
                                        </div>
                                        <div className='price-credit'>
                                            <div className='price'>
                                                <p>Qiymet</p>
                                                <div className='manat'>
                                                    <span>1899.99 ₼</span>
                                                </div>
                                            </div>
                                            <div className='credit'>
                                                <p>Hissə-hissə ödəniş</p>
                                                <div className='crdt'>
                                                    <span>18 ay 106 ₼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div>

                            <ul className='paging'>
                            <li className='li-radius-color'>1</li>
                            <li className='li-radius'>2</li>
                            <li className='li-radius'>3</li>
                            <li className='li-radius'>4</li>
                            <li className='li-radius'>5</li>

                        </ul>

                        </div>



                    </div>
                </section>
            </div>
        </>
    )
}

export default MainInfo
