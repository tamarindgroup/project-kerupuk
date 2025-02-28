import React, {useEffect, useState, useRef} from "react";
import Textra from 'react-textra'
import { Grid, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoPusatKerupuk from '../../Image/logo pusat kerupuk.webp';
import Call from '../../Image/phone-call.png';
import Email from '../../Image/message.png';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import Location from '../../Image/location.png';
import ReactWhatsapp from 'react-whatsapp';
import IconWhatsapp from '../../Image/icon-whatsapp.png'
import Kerupuk1 from '../../Image/kerupuk_1.png';
import Card from '@mui/material/Card';
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import ArrowUp from '../../Image/arrow-up.gif';
import { useTranslation } from 'react-i18next';
import { useScrollContext } from "../../Context";
import ShoppingCart from '../../Image/shopping-cart.gif';
import Shopee from '../../Image/shopee.png';
import Tokped from '../../Image/tokped.png';


export function About() {

    const theme = useTheme();
    const [language, setLanguage] = useState('');
    const { t, i18n } = useTranslation("global");
    const { isShaking } = useScrollContext();

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const handleClick = () => {
        setIsOptionsVisible(!isOptionsVisible);
      };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

  const [showIcons, setShowIcons] = useState(false);

  const handleCartClick = () => {
    setShowIcons(!showIcons);
  };
      

    const [open, setOpen] = React.useState(false);

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });


    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [count1000, setCount1000] = useState(0);

    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Ketika elemen masuk ke dalam viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Berhenti mengamati setelah elemen terlihat
                }
            },
            { threshold: 0.5 } // Ambil tindakan ketika elemen terlihat 50% di dalam viewport
        );

        // Mulai mengamati elemen ketika komponen dimuat
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current); // Berhenti mengamati saat komponen dibongkar
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            let currentCount = 0;
            const interval = setInterval(() => {
                if (currentCount < 500) {
                    currentCount += 10;
                    setCount(currentCount);
                } else {
                    clearInterval(interval);
                }
            }, 1); // interval 10ms untuk memberikan efek animasi

            let currentCount1000 = 0;
            const interval1000 = setInterval(() => {
                if (currentCount1000 < 1000) {
                    currentCount1000 += 10;
                    setCount1000(currentCount1000);
                } else {
                    clearInterval(interval1000);
                }
            }, 0.5); // interval 5ms untuk memberikan efek animasi

            return () => {
                clearInterval(interval);
                clearInterval(interval1000);
            };
        }
    }, [isVisible]);


    return (
        <>
         {/* <Header /> */}

         {/* <div style={{ display: 'flex', top: !isDesktop ? '250px' : '200px', position: 'relative', marginBottom: isDesktop ? '500px' : '300px' }}>
            <img src={Waisak} style={{ width: isDesktop ? '30%' : '80%', margin: !isDesktop ? 'auto' : 'auto', borderRadius: '20px' }}  /> 
           </div>  */}

          <div id="get" style={{ 
            width: isDesktop ? '100%' : '100%',
            marginTop: isDesktop ? '100px' : '220px',
            display: isDesktop ? 'flex' : 'block',
            justifyContent: 'center'
            }}>
             
             <div style={{ position: isDesktop ? 'relative' : 'relative', width: isDesktop ? '40%' : '100%', height: isDesktop ? '440px' : '500px' }}>
                <div
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(227, 34, 34, 0.5)', // Warna #e32222 dengan tingkat transparansi 0.5
                    }}
                ></div>
                <img loading="lazy"
                    src={Kerupuk1}
                    style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 1, // Menempatkan gambar di atas lapisan
                    }}
                />
                 <div style={{ 
                    position: 'absolute', 
                    top: isDesktop ? '50%' : '48%', 
                    left: isDesktop ? '60%' : '47%', 
                    transform: 'translate(-50%, -50%)', 
                    textAlign: 'left', 
                    width: isDesktop ? '100%' : '80%',
                    color: 'white', 
                    }}>
                    <label id="deskripsi_kerupuk" style={{ margin: 0, fontSize: '40px' }}>{t("gerakan-hebat.text")}</label>
                    <br/>
                    <label id="deskripsi_kerupuk" style={{ margin: 0, fontSize: '30px' }}>{t("produk.text")}</label>
                    <p id="deskripsi_kerupuk" style={{ paddingTop: isDesktop ? '5px' : 0, width: isDesktop ? '300px' : '250px', fontSize: '20px' }}>{t("deskripsi-gerakan.text")}</p>
                    <label id="deskripsi_kerupuk" style={{ fontSize: '40px' }}>{t("hubungi-kami.text")}</label>
                    <h4>082160904267</h4>
                    <label style={{ paddingLeft: isDesktop ? '80px' : '90px' }}>{t("atau.text")}</label>
                    <br />
                    <Button href="#button_contact" style={{ 
                        backgroundColor: '#ff9c00', 
                        color: 'white', 
                        margin: isDesktop ? '-11px' : '-3px',
                        width: '220px',
                        height: '50px',
                        borderRadius: '20px',
                        marginTop: isDesktop ? '10px' : '20px' 
                        }}>{t("kontak-kami.text")}</Button>
                </div>
                </div>

                <div style={{ 
                    height: '440px', // Tetapkan tinggi yang sesuai
                    width: '100px',
                    backgroundColor: '#e8041f',
                    opacity: 0.7, // Mengatur opasitas latar belakang
                    zIndex: 0, // Menempatkan di bawah gambar
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, -1120% 1280%, 0% 100%)',
                }}>
                    {/* Garis atau tulisan di sini */}
                </div>
          
                <div style={{ 
                    display: 'block', 
                    width: isDesktop ? '60%' : '89%', 
                    marginLeft: isDesktop ? '-97px' : 0, 
                    backgroundColor: '#ff9c00', 
                    color: 'white',
                    height: isDesktop ? '400px' : '450px',
                    textAlign: 'center', // Mengatur konten secara horizontal di tengah
                    padding: '20px', // Memberikan ruang di sekitar konten
                    fontSize: '18px',
                    zIndex: -2
                }}>
                <div style={{ paddingLeft: isDesktop ?  '100px' : 0 }}>
                <h2 style={{ textAlign: 'left' }}>{t("tentang-kami.text")}</h2>
                <p id="deskripsi_kerupuk" style={{ textAlign: 'left' }}> {t("deskripsi-tentang.text")} </p>
        
                    <div style={{ display: 'flex' }}>
                        <div className="about-1" style={{ fontSize: isDesktop ? '19px' : '13px', width: isDesktop ? '200px' : '138px' }}>
                            <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-1.text")}</label>
                            </div>
                        </div>
                        <div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-2.text")}</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-3.text")}</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-4.text")}</label>
                            </div>
                        </div>
                        </div>
                    </div> 

                    <div className="about-2" style={{ marginLeft: isDesktop ? '100px' : '15px', fontSize: isDesktop ? '19px' : '13px' }}>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-5.text")}</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-6.text")}</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-7.text")}</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: isDesktop ? '10px' : '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label id="deskripsi_kerupuk">{t("point-8.text")}</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>

        <div style={{
            position: 'relative',
            height: '100vh',
            display: isDesktop ? 'flex' : 'block',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: isDesktop ? 0 : '100px'
        }}>
            <Card style={{  
                height: '500px',
                width: '400px',
                borderRadius: '20px',
                margin: isDesktop ? '50px' : '-20px',
                position: 'relative',
                overflow: 'hidden', // Untuk memastikan bayangan tetap di dalam kartu
                boxShadow: '0px 0px 20px rgba(128, 128, 128, 0.2), 0px 10px 20px rgba(128, 128, 128, 0.2), 10px 0px 20px rgba(128, 128, 128, 0.2), 10px 10px 20px rgba(128, 128, 128, 0.2)' // Bayangan dari berbagai arah
            }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', // Menengahkan secara horizontal
                    alignItems: 'center', // Menengahkan secara vertikal
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', marginTop: '40px' }}>
                            <img loading="lazy" style={{ width: '100px' }} decoding="async" src="https://gracethemesdemo.com/shifters/wp-content/themes/shifters-pro/images/counter-icon-1.png" />
                            <div style={{ marginLeft: '40px' }} ref={counterRef}>
                                <label style={{ fontSize: '58px', fontWeight: 800, LineWeight: '100%' }}>{count}+</label>
                                <br />
                                <label style={{ marginTop: '5px', color: '#3d3d3d', fontWeight: 600, fontSize: '17px' }}>Happy Customer</label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                             <img loading="lazy" style={{ width: '100px', marginBottom: '10px' }} decoding="async" src="https://gracethemesdemo.com/shifters/wp-content/themes/shifters-pro/images/counter-icon-2.png" />
                             <div style={{ marginLeft: '40px' }}>
                             <label style={{ fontSize: '58px', fontWeight: 800, LineWeight: '100%' }}>{count1000}+</label>
                                <br />
                                <label style={{ marginTop: '5px', color: '#3d3d3d', fontWeight: 600, fontSize: '17px' }}>Running Products</label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                             <img loading="lazy" style={{ width: '100px' }} decoding="async" src="https://gracethemesdemo.com/shifters/wp-content/themes/shifters-pro/images/counter-icon-3.png" />
                             <div style={{ marginLeft: '40px' }}>
                                <label style={{ fontSize: '58px', fontWeight: 800, LineWeight: '100%' }}>35+</label>
                                <br />
                                <label style={{ marginTop: '5px', color: '#3d3d3d', fontWeight: 600, fontSize: '17px' }}>Years of Serving</label>
                            </div>
                        </div>
                    </div>
                 </div>
            </Card>

            <div style={{ width: isDesktop ? '600px' : '300px', marginLeft: isDesktop ? 0 : '20px', marginTop: isDesktop ? 0 : '50px' }}>
                <label style={{ textAlign: 'left', fontWeight: 800, color: '#353535', width: '180px', fontSize: '34px' }}>{t("prencanaan.text")}</label>
                <p id="deskripsi_kerupuk">
                {t("deskripsi-perencanaan-1.text")}
                <br />
                <br />
                {t("deskripsi-perencanaan-2.text")}
                </p>
                <Button href="#get" style={{ backgroundColor: '#ff9c00', color: 'white', borderRadius: '20px', width: '170px', marginTop: '20px' }}>{t("memulai.text")}</Button>
            </div>
        </div>


        <img 
        src={ShoppingCart}
        style={{
          cursor: 'pointer',
          color: 'gray',
          maxWidth: '100%',
          width: '85px',
          height: '85px',
          position: 'fixed',
          bottom: isDesktop ? '100px' : '100px',
          left: !isDesktop ? '8px' : '10px',
          zIndex: 3,
        }}
        onClick={handleCartClick}
      />

      <div style={{
        position: 'fixed',
        bottom: isDesktop ? '200px' : '200px', // Adjusted based on ShoppingCart height and desired space
        left: !isDesktop ? '25px' : '30px',
        zIndex: 2,
        transition: 'opacity 0.5s ease-in-out',
        opacity: showIcons ? 1 : 0,
        // transform: `translateY(${showIcons ? '0px' : '20px'})`,
      }}>
        <a href="https://id.shp.ee/qFRcxzb" target="_blank">
        <img 
        id="shopee"
          src={Shopee}
          style={{
            cursor: 'pointer',
            color: 'gray',
            maxWidth: '100%',
            width: '45px',
            height: '45px',
            position: 'relative',
            display: 'block',
            marginBottom: '10px', // Space between Shopee and Tokped
          }}
        />
        </a>
        <a href="https://tokopedia.link/LvsFHThQNLb" target="_blank">
        <img 
        id="tokped"
          src={Tokped}
          style={{
            cursor: 'pointer',
            color: 'gray',
            maxWidth: '100%',
            width: '45px',
            height: '45px',
            position: 'relative',
          }}
        />
        </a>
      </div>

        <img src={ArrowUp} 
         style={{
            cursor: 'pointer',
            color: 'gray',
            maxWidth: '100%', // Tambahkan ini
            width: '55px',
            height: '55px',
            position: 'fixed', // Tetapkan posisi elemen
            bottom: '25px',    // Atur jarak dari bawah
            left: !isDesktop ? '20px' : '20px',     // Atur jarak dari kanan
            // zIndex: '9999',   
          }}
          onClick={scrollToTop}
         />


<div>
      {/* Ikon WhatsApp */}
      <img 
        id="whatsapp" 
        loading="lazy" 
        src={IconWhatsapp} 
        onClick={handleClick} // Toggle visibility saat diklik
        style={{
          maxWidth: '100%',
          width: '70px',
          height: '70px',
          position: 'fixed',
          bottom: '20px',
          right: isDesktop ? '20px' : '20px',
          zIndex: 3,
          cursor: 'pointer'
        }}
      />

      {/* Opsi dengan posisi vertikal dan jarak */}
      <div 
        className={`options ${isOptionsVisible ? 'visible' : ''}`} 
        style={{ position: 'fixed', bottom: '100px', right: '30px', zIndex: 4 }}
      >
        {/* Tombol Agen */}
        {isOptionsVisible && (
          <ReactWhatsapp
          number="+6282160904267" 
          message={"Halo Pusat Kerupuk Indonesia, boleh tau kerupuk apa saja yang ada ?"}
          style={{ textDecoration: 'none', padding: 0, border: 'none', background: 'none' }}
        >
          <h4 id="agen" className="option-item agen">Agen</h4>
        </ReactWhatsapp>
      )}

      {/* Tombol Sales */}
      {isOptionsVisible && (
        <ReactWhatsapp 
          number="+6282189018400" 
          message={"Halo Pusat Kerupuk Indonesia, boleh tau kerupuk apa saja yang ada ?"}
          style={{ textDecoration: 'none', padding: 0, border: 'none', background: 'none' }}
        >
          <h4 id="sales" className="option-item sales">Sales</h4>
        </ReactWhatsapp>
        )}
      </div>

      {/* CSS */}
      <style jsx>{`
    .options {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      pointer-events: none;
    }

    .options.visible {
      opacity: 1;
      pointer-events: all;
    }

    .option-item {
      background: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      margin: 3px 0; /* Jarak antara tombol Agen dan Sales */
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .option-item:hover {
      transform: scale(1.1);
    }

    /* Posisi Agen dan Sales untuk jarak vertikal */
    .agen {
      transform: translateY(-20px); /* Geser Agen lebih ke atas */
    }

    /* Efek saat di hover pada Agen */
    .agen:hover {
      transform: translateY(-30px); /* Geser lebih ke atas saat dihover */
    }

    .sales {
      transform: translateY(-10px); /* Geser Sales sedikit lebih ke atas dari posisi sebelumnya */
    }
  `}</style>
    </div>

        <div id="button_contact" style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 0 : '700px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img loading="lazy" src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("telepon.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}><Textra effect="rightLeft" data={['082160904267', '085935331734']} /></span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img loading="lazy" src={Location} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("alamat.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>Jalan Veteran no 4A Medan Pusat Pasar, Medan, Sumatera Utara 20231</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img loading="lazy" src={Email} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("email.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>pusatkerupukindonesia@gmail.com</span>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </div>`

            <div style={{ width: '100%', backgroundColor: '#2b292c', height: isDesktop ? '520px' : '1000px', marginTop:  isDesktop ? '-30px' : '-30px' }}>
                <Grid container spacing={2} display={isDesktop ? 0 : 'block'} justifyContent={'center'} alignItems={'center'} pt={8} pl={isDesktop ? 0 : 4}>
                    <Grid item xs={4}>
                        <img loading="lazy" src={LogoPusatKerupuk} width={100} height={100} />
                        <p id="deskripsi_kerupuk" style={{ width: '280px', color: 'white', marginTop: '40px' }}>
                            {t("deskripsi-footer.text")}
                        </p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <FaFacebookF color="white" />
                            </div>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <BsTwitterX color="white" />
                            </div>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <BsInstagram color="white" />
                            </div>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <SiGooglemybusiness color="white" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                    <div style={{ marginTop: isDesktop ? 0 : 60, width: '100%' }}>
                            <label style={{ color: 'white', fontSize: '20px' }}>{t("jam-layanan.text")}</label>
                            <br />
                            <br />
                            <div style={{ width: isDesktop ? '100%' : '80%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("senin1.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Selasa.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Rabu.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Kamis.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Jumat.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("sabtu1.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '100%', backgroundColor: '#1f1e21', height: isDesktop ? '90px' : '200px', marginTop:  isDesktop ? '-10px' : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white' }}><label style={{ color:  "#ff9c00"}}>@2024</label>{t("pusat-kerupuk-indonesia.text")}</span>
            </div>
        </>
    )
}