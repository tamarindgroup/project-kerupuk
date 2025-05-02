import React, {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import Textra from 'react-textra'
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
import { useTranslation } from "react-i18next";
import dataArtikel from "../../data/artikel";
import ArrowUp from '../../Image/arrow-up.gif';
import { useScrollContext } from "../../Context";
import ShoppingCart from '../../Image/shopping-cart.gif';
import Shopee from '../../Image/shopee.png';
import Tokped from '../../Image/tokped.png';


export const Artikel =  () => {

    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [Artikel, setArtikel] = useState(dataArtikel);
    const [language, setLanguage] = useState('');
    const activeLanguage = i18n.language;
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


    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });


    return (
        <>

         {/* <div style={{ display: 'flex', top: !isDesktop ? '250px' : '200px', position: 'relative', marginBottom: isDesktop ? '500px' : '300px' }}>
            <img src={Waisak} style={{ width: isDesktop ? '30%' : '80%', margin: !isDesktop ? 'auto' : 'auto', borderRadius: '20px' }}  /> 
           </div>  */}

          <Grid container display={ !isDesktop ? 'block' : 'flex'} spacing={1} justifyContent="center" style={{ marginTop: !isDesktop ? '250px' : '300px' }}>
               <Grid item xs={ !isDesktop ? 10 : 12}>
                <div style={{ paddingLeft: !isDesktop ? '25px' : '22px' }}>
                <h1 id="title-top-artikel" style={{ textAlign: 'left', color: 'gray' }}>{t("seputar.text")}</h1>
                <p id="deskripsi_kerupuk" style={{ width: isDesktop ? '100%' : '80%', fontSize: isDesktop ? '23px' : '16px' }}>
                 {t("deskripsi-seputar.text")}
                </p>
                </div>
                </Grid>
                {Artikel.map(data => (
                    <Grid item key={data.id} xs={10} sm={6} md={4} mt={isDesktop ? '60px' : '60px'}>
                      <div style={{ paddingLeft: !isDesktop ? '3px' : 0 }}>
                        <a target="_blank" style={{ textDecoration: 'none', color: 'black' }} href={data[activeLanguage].link}>
                            <div style={{ padding: '16px', width: '100%' }}>
                                <img loading="lazy" src={data[activeLanguage].image} 
                                style={{ 
                                    height: isDesktop ? '400px' : '190px', 
                                    width: isDesktop ? '100%' : '100%',
                                    borderRadius: '20px' 
                                    }} />
                                <h2 id="title-artikel" style={{ width: isDesktop ? '100%' : '90%' }}>{data[activeLanguage].nama}</h2>
                                <label id='sub-artikel' level={4}>{data[activeLanguage].sub_nama}</label>
                            </div>
                          </a>
                      </div>
                    </Grid>
                  ))}
              </Grid>

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

        <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 150 : '100px' }}>
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
                    <div style={{ marginTop: isDesktop ? 0 : 60 }}>
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

export default Artikel;