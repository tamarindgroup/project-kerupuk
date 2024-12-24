import React, {useEffect, useState, useContext} from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography, Button, Container } from "@mui/material";
import Kerupuk1 from '../../Image/kerupuk_1.png';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Layanan24 from '../../Image/2633.png_860.png';
import Produksi from '../../Image/training-dan-sertifikasi-operator-forklift-pelatihan-operator-forklift-training-operator-forklift.jpg';
import ImgKerupuk from '../../Image/istockphoto-874515358-612x612.jpg';
import AOS from 'aos';
import Textra from 'react-textra'
import 'aos/dist/aos.css';
import PublicIcon from '@mui/icons-material/Public';
import Call from '../../Image/phone-call.png';
import Location from '../../Image/location.png';
import Email from '../../Image/message.png';
import Process from '../../Image/process.jpg';
import Lingkaran from '../../Image/lingkaran.png';
import Optimasi from '../../Image/optimasi.png';
import Inovasi from '../../Image/inovasi.png';
import Pengemasan from '../../Image/pengemasan.png';
import Penyimpanan from '../../Image/penyimpanan.png';
import Barang from '../../Image/barang.jpg';
import Produk1 from '../../Image/kerupuk-kapal/kerupuk-jengkol-bulat-hitam.jpg';
import Produk2 from '../../Image/kerupuk-shinjuku/mawar-putih.jpg';
import Produk3 from '../../Image/kerupuk-napoleon/kelabang-cream.jpg';
import LogoPusatKerupuk from '../../Image/logo pusat kerupuk.webp';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import ReactWhatsapp from 'react-whatsapp';
import IconWhatsapp from '../../Image/icon-whatsapp.png'
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineAudit } from "react-icons/ai";
import { FaPeopleLine } from "react-icons/fa6";
import Shopping from '../../Image/shopping.gif';
import { useTranslation } from "react-i18next";
import ArrowUp from '../../Image/arrow-up.gif';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollContext } from "../../Context";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Gambar1 from '../../Image/gambar1.jpeg';
import Gambar2 from '../../Image/gambar2.jpeg';
import Gambar3 from '../../Image/gambar3.jpeg';
import Gambar4 from '../../Image/gambar4.jpeg';
import Gambar5 from '../../Image/gambar5.jpeg';
import Gambar6 from '../../Image/gambar6.jpeg';
import ShoppingCart from '../../Image/shopping-cart.gif';
import Shopee from '../../Image/shopee.png';
import Tokped from '../../Image/tokped.png';
import Toko from '../../Image/toko.jpeg';
import Natal from '../../Image/desain41.png';

export function Home () {
    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState('');
    const control = useAnimation();
    const [ ref, inView ] = useInView();
    const { isShaking } = useScrollContext();

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const handleClick = () => {
        setIsOptionsVisible(!isOptionsVisible);
      };
    
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const [showIcons, setShowIcons] = useState(false);

    const handleCartClick = () => {
      setShowIcons(!showIcons);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    const boxVariant = {
        visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0, x: 200 }
    }




    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView])

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
      }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        AOS.init({ duration: 3000 })
      }, []);


    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });

    return (
        <>

        {!isLoading && (
            <div className="centered">
                <picture>
                  <img srcSet={Shopping} alt="Shopping" loading="lazy" />
                </picture>
            </div>
        )}
        {isLoading && (
            <>
          {/* <Header /> */}
          <div id="top-title">
            {/* <img loading="lazy" 
              src={Kerupuk1}  
              alt="gambar-logo-top"
                style={{
                    height: isDesktop ? '800px' : '300px',
                    width: isDesktop ? '100%' : '100%',
                    position: 'relative',
                    marginTop: isDesktop ? '-80px' : '195px',
                    zIndex: -2
                }}
            /> */}
            <div style={{ 
                position: 'absolute', 
                top: isDesktop ? '750px' : '490px', 
                left: '10%', 
                transform: 'translateY(-50%)',
                }}>
                {isDesktop ? 
                <>
                {/* <a href="#selamat-datang">
                  <Button  className="button-header" style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    marginTop: '20px',
                    borderRadius: '19px',
                    width: '150px',
                    height: '40px',
                    fontSize: "11px"
                  }}>{t("baca.text")}</Button>
                  </a> */}
                </> : null}
            </div>
        </div>
        <Grid 
        item 
        xs={12} md={6} // Pastikan lebar penuh pada mobile, 6 kolom pada desktop
        style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',  // Menempatkan konten di tengah secara horizontal
            justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
            marginBottom: isDesktop ? '0' : '0', // Jarak antar kolom pada tampilan mobile
            marginTop: isDesktop ? "100px" : "650px"
        }}
        >
        <img src={Natal} alt="Natal" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <div className="block-fitur" 
            style={{
                width: isDesktop ? '100%' : '100%',
                position: 'relative',
                display: isDesktop ? 'flex' : 'block',
                // textAlign: 'center'
                margin: '0 auto',
                marginTop: isDesktop ? '-620px' : '220px'
            }}
        >
            {!isDesktop ?
            <>
            <div data-aos="flip-up" style={{ marginTop: "-200px" }}>
            <div className="fast-delivery" 
            style={{ 
                margin: isDesktop ? '0 auto' : '0 auto', 
                width: isDesktop ? '350px' : '340px',
                display: !isDesktop ? 'block' : 0,
                height: '280px',
                paddingTop: !isDesktop ? '20px' : '10px' 
                }}> {/* Menambahkan margin */}
                <RocketLaunchIcon style={{
                    height: isDesktop ? '100px' : '60px',
                    width: isDesktop ? '300px' : '200px',
                    paddingTop: '20px',
                    display: 'block',
                    margin: '0 auto'
                }} />
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("pengiriman.text")}</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    {t("deskripsi-pengiriman.text")}
                </Typography>
            </div>
            </div>
            <div data-aos="flip-up">
            <div className="secured" style={{ 
                margin: isDesktop ? '0 auto' : '0 auto', 
                width: isDesktop ? '350px' : '340px',
                display: !isDesktop ? 'block' : 0,
                height: '280px',
                paddingTop: !isDesktop ? '20px' : '10px' 
             }}> {/* Menambahkan margin */}
                <GppGoodIcon style={{
                    height: isDesktop ? '100px' : '60px',
                    width: isDesktop ? '300px' : '200px',
                    paddingTop: '20px',
                    display: 'block',
                    margin: '0 auto'
                }}/>
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("layanan.text")}</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    {t("deskripsi-layanan.text")}
                </Typography>
            </div>
            </div>
            <div data-aos="flip-up">
            <div className="Affordable" style={{ 
                margin: isDesktop ? '0 auto' : '0 auto', 
                width: isDesktop ? '350px' : '340px',
                display: !isDesktop ? 'block' : 0,
                height: '280px',
                paddingTop: !isDesktop ? '20px' : '10px'
             }}> {/* Menambahkan margin */}
                <LocalAtmIcon style={{
                    height: isDesktop ? '100px' : '60px',
                    width: isDesktop ? '300px' : '200px',
                    paddingTop: '20px',
                    display: 'block',
                    margin: '0 auto'
                }}/>
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("harga.text")}</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    {t("deskripsi-harga.text")}
                </Typography>
            </div>
            </div>
            <div data-aos="flip-up">
            <div className="secured" style={{ 
                margin: isDesktop ? '0 auto' : '0 auto', 
                width: isDesktop ? '350px' : '340px',
                display: !isDesktop ? 'block' : 0,
                height: '280px',
                paddingTop: !isDesktop ? '20px' : '10px' 
             }}> {/* Menambahkan margin */}
                <SupportAgentIcon style={{
                    height: isDesktop ? '100px' : '60px',
                    width: isDesktop ? '300px' : '200px',
                    paddingTop: '20px',
                    display: 'block',
                    margin: '0 auto'
                }}/>
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("dukungan.text")}</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    {t("deskripsi-dukungan.text")}
                </Typography>
            </div>
            </div>
             </>
                :
                <>
                <div className="fast-delivery" 
                style={{ 
                    margin: isDesktop ? '0 auto' : '0 auto', 
                    width: isDesktop ? '350px' : '340px',
                    display: !isDesktop ? 'block' : 0,
                    height: '280px',
                    marginTop: !isDesktop ? '20px' : '750px' 
                    }}> {/* Menambahkan margin */}
                    <RocketLaunchIcon style={{
                        height: isDesktop ? '100px' : '60px',
                        width: isDesktop ? '300px' : '200px',
                        paddingTop: '20px',
                        display: 'block',
                        margin: '0 auto'
                    }} />
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("pengiriman.text")}</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        {t("deskripsi-pengiriman.text")}
                    </Typography>
                </div>
                <div className="secured" style={{ 
                    margin: isDesktop ? '0 auto' : '0 auto', 
                    width: isDesktop ? '350px' : '340px',
                    display: !isDesktop ? 'block' : 0,
                    height: '280px',
                    marginTop: !isDesktop ? '20px' : '750px' 
                }}> {/* Menambahkan margin */}
                    <GppGoodIcon style={{
                        height: isDesktop ? '100px' : '60px',
                        width: isDesktop ? '300px' : '200px',
                        paddingTop: '20px',
                        display: 'block',
                        margin: '0 auto'
                    }}/>
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("layanan.text")}</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        {t("deskripsi-layanan.text")}
                    </Typography>
                </div>
                <div className="Affordable" style={{ 
                    margin: isDesktop ? '0 auto' : '0 auto', 
                    width: isDesktop ? '350px' : '340px',
                    display: !isDesktop ? 'block' : 0,
                    height: '280px',
                    marginTop: !isDesktop ? '20px' : '750px'
                }}> {/* Menambahkan margin */}
                    <LocalAtmIcon style={{
                        height: isDesktop ? '100px' : '60px',
                        width: isDesktop ? '300px' : '200px',
                        paddingTop: '20px',
                        display: 'block',
                        margin: '0 auto'
                    }}/>
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("harga.text")}</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        {t("deskripsi-harga.text")}
                    </Typography>
                </div>
                <div className="secured" style={{ 
                    margin: isDesktop ? '0 auto' : '0 auto', 
                    width: isDesktop ? '350px' : '340px',
                    display: !isDesktop ? 'block' : 0,
                    height: '280px',
                    marginTop: !isDesktop ? '20px' : '750px'
                }}> {/* Menambahkan margin */}
                    <SupportAgentIcon style={{
                        height: isDesktop ? '100px' : '60px',
                        width: isDesktop ? '300px' : '200px',
                        paddingTop: '20px',
                        display: 'block',
                        margin: '0 auto'
                    }}/>
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>{t("dukungan.text")}</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        {t("deskripsi-dukungan.text")}
                    </Typography>
                </div>
                </> }
          </div>

          {/* <div style={{ display: 'flex', top: !isDesktop ? '150px' : '200px', position: 'relative', marginBottom: isDesktop ? '500px' : '500px' }}>
            <img src={Waisak} style={{ width: isDesktop ? '30%' : '80%', margin: !isDesktop ? 'auto' : 'auto', borderRadius: '20px' }}  /> 
          </div>  */}

         
          <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', /* Menggunakan tinggi 100% dari viewport untuk membuatnya berada di tengah vertikal */
                marginTop: isDesktop ? '100px' : '400px'
            }}> 



            {isDesktop ?
                <div className="barang" style={{ 
                    width: '80%',
                    height: '450px',
                    position: 'relative',
                    backgroundImage: `url(${Barang})`, // Mengatur gambar sebagai background
                    backgroundSize: 'cover', // Menyesuaikan ukuran gambar dengan div
                    backgroundPosition: 'center', // Memposisikan gambar di tengah-tengah div
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', // Mengatur elemen div dengan kelas "barang" ke tengah
                    flexDirection: 'column' // Mengubah arah layout menjadi vertikal
                }}>
                    <h3 style={{ 
                        margin: 0, 
                        color: 'Gray', 
                        zIndex: 1, 
                        fontSize: '39px', 
                        // position: 'relative',
                        marginTop: !isDesktop ? '120px' : '350px',
                        }}>{t("produk-lainnya.text")}</h3> {/* Margin 0 untuk menghapus margin bawaan */}
                       <Grid container spacing={2} zIndex={2} justifyContent={'center'} mt={30}>
                        <Grid item>
                            <div style={{ position: 'relative', marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}>
                                <img loading="lazy" src={Produk1} style={{ width: '300px', height: '230px' }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    top: 0, 
                                    right: 0, 
                                    backgroundColor: '#FF5733', 
                                    padding: '5px 10px', 
                                    color: 'white', 
                                    fontWeight: 'bold' 
                                    }}>{t("asam-jawa.text")}</div>
                                <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                    {t("deskripsi-asam.text")}
                                </p>
                                <Button href="/produk" id="button-view" style={{
                                    backgroundColor: '#ff9c00',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '9px',
                                    width: '100px',
                                    height: '30px',
                                }}>
                                {t("lihat-detail.text")}
                                </Button>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ position: 'relative', marginBottom: '20px', marginLeft: '120px', marginRight: '120px' }}>
                                <img loading="lazy" src={Produk2} style={{ width: '300px', height: '230px' }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    top: 0, 
                                    right: 0, 
                                    backgroundColor: '#FF5733', 
                                    padding: '5px 10px', 
                                    color: 'white', 
                                    fontWeight: 'bold' 
                                    }}>{t("sohun.text")}</div>
                                    <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                       {t("deskripsi-sohun.texxt")}
                                </p>
                                <Button href="/produk" className="view" style={{
                                    backgroundColor: '#ff9c00',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '9px',
                                    width: '100px',
                                    height: '30px',
                                }}>
                                 {t("lihat-detail.text")}
                                </Button>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{ position: 'relative', marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}>
                                <img loading="lazy" src={Produk3} style={{ width: '300px', height: '230px' }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    top: 0, 
                                    right: 0, 
                                    backgroundColor: '#FF5733', 
                                    padding: '5px 10px', 
                                    color: 'white', 
                                    fontWeight: 'bold' 
                                    }}>{t("kembang-tahu.text")}</div>
                                    <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                        {t("deskripsi-kembang.text")}
                                </p>
                                <Button href="/produk"  id="button-view" style={{
                                    backgroundColor: '#ff9c00',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '9px',
                                    width: '100px',
                                    height: '30px',
                                }}>
                                {t("lihat-detail.text")}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                    : 
                    <div style={{ marginTop: '1000px', width: '435px' }}>
                        <h3 style={{ 
                            color: 'gray', 
                            zIndex: 2, 
                            fontSize: '29px', 
                            // marginTop: '800px',
                            paddingBottom: "30px",
                            textAlign: 'center' 
                            }}>{t("produk-lainnya.text")}</h3> {/* Margin 0 untuk menghapus margin bawaan */}
                            <Grid container spacing={2} justifyContent="center"> {/* Mengatur grid container menjadi center */}
                                <Grid item >
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <img loading="lazy" src={Produk1} style={{ width: '300px', height: '230px' }} />
                                        <div style={{ 
                                            position: 'absolute', 
                                            top: 0, 
                                            right: 0, 
                                            backgroundColor: '#FF5733', 
                                            padding: '5px 10px', 
                                            color: 'white', 
                                            fontWeight: 'bold' 
                                            }}>{t("asam-jawa.text")}</div>
                                        <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                            {t("deskripsi-asam.text")}
                                        </p>
                                        <Button href="/produk" id="button-view" style={{
                                            backgroundColor: '#ff9c00',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '9px',
                                            width: '100px',
                                            height: '30px',
                                        }}>
                                        {t("lihat-detail.text")}
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item mt={10}>
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <img loading="lazy" src={Produk2} style={{ width: '300px', height: '230px' }} />
                                        <div style={{ 
                                            position: 'absolute', 
                                            top: 0, 
                                            right: 0, 
                                            backgroundColor: '#FF5733', 
                                            padding: '5px 10px', 
                                            color: 'white', 
                                            fontWeight: 'bold' 
                                            }}>{t("sohun.text")}</div>
                                            <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                                {t("deskripsi-sohun.texxt")}
                                        </p>
                                        <Button href="/produk" className="view" style={{
                                            backgroundColor: '#ff9c00',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '9px',
                                            width: '100px',
                                            height: '30px',
                                        }}>
                                        {t("lihat-detail.text")}
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item mt={10}>
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <img loading="lazy" src={Produk3} style={{ width: '300px', height: '230px' }} />
                                        <div style={{ 
                                            position: 'absolute', 
                                            top: 0, 
                                            right: 0, 
                                            backgroundColor: '#FF5733', 
                                            padding: '5px 10px', 
                                            color: 'white', 
                                            fontWeight: 'bold' 
                                            }}>{t("kembang-tahu.text")}</div>
                                            <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                                {t("deskripsi-kembang.text")}
                                        </p>
                                        <Button href="/produk" id="button-view" style={{
                                            backgroundColor: '#ff9c00',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '9px',
                                            width: '100px',
                                            height: '30px',
                                        }}>
                                        {t("lihat-detail.text")}
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                    </div>
                    }
                    
            </div>



          <div style={{ display: isDesktop ? 'flex' : 'block', width: !isDesktop ? '100%' : '100%', marginTop: isDesktop ? '500px' : '1400px', marginLeft: isDesktop ? '100px' : 0}}>
            

            <div id="selamat-datang" style={{ width: isDesktop ? 0 : '100%'}}>
    
            <Typography className="welcome" style={{
                fontSize: isDesktop ? '24px' : '18px',
                paddingLeft: isDesktop ? 0 : '20px',
                width: isDesktop ? '300px' : 100
            }}>{t("selamat-datang.text")}</Typography>
            <Typography className="pusat_kerupuk" style={{
                fontSize: isDesktop ? '33px' : '22px',
                fontWeight: 'bold',
                width: !isDesktop ? '280px' : '500px',
                paddingLeft: isDesktop ? 0 : '20px'
            }}>{t("pusat-kerupuk-indonesia.text")}</Typography>
            {isDesktop ?
            <p id="deskripsi_kerupuk" style={{
                width: isDesktop ? '600px' : '300px',
                paddingTop: '20px',
            }}>
            {t("deskripsi-pusat-kerupuk-1.text")}
           <br />
           <br />
           {t("deskripsi-pusat-kerupuk-2.text")}
          </p>
            : 
            <>
            <p id="deskripsi_kerupuk" style={{
                width: isDesktop ? '100%' : '300px',
                paddingTop: '20px',
                paddingLeft: '20px'
            }}>
            {t("deskripsi-pusat-kerupuk-1.text")}
           <br />
           <br />
           {t("deskripsi-pusat-kerupuk-2.text")}
          </p>
            </>
            }
        </div>



        <div style={{ marginTop: isDesktop ? '450px' : 0 }}>
            <div id="check-2" style={{ display: !isDesktop ? 'block' : 'flex', alignItems: 'center', marginTop: '50px', width: isDesktop ? '300px' : '200px', marginLeft: isDesktop ? 0 : '20px' }}>
                <CheckCircleIcon style={{
                    width: '18px',
                    height: '18px',
                    color: 'red'
                }} />
                <label style={{ paddingLeft: '15px', margin: 0 }}>{t("produk-berkualitas.text")}</label>
            </div>

            <div id="check-2" style={{ display: !isDesktop ? 'block' : 'flex', marginTop: '13px', alignItems: 'center', width: isDesktop ? '300px' : '300px', marginLeft: isDesktop ? 0 : '20px' }}>
                <CheckCircleIcon style={{
                    width: '18px',
                    height: '18px',
                    color: 'red'
                }} />
                <label style={{ paddingLeft: '15px', margin: 0 }}>{t("penyedia-kerupuk.text")}</label>
            </div>
          </div>
         
      {isDesktop ? (
        <>
        <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial={ isDesktop ? "hidden" : 0}
        animate={control}
        >
          <div style={{
            // position: 'relative',
            // top: isDesktop ? '200px' : '240px', 
            marginLeft: isDesktop ? 400 : '50px',
            marginBottom: isDesktop ? 0 : '200px',
            marginTop: isDesktop ? 0 : '100px'
          }}>
            <div style={{ width: '300px' }}>
                <img loading="lazy" src={Toko} style={{
                    width: '300px',
                    height: '250px',
                    justifyContent: 'center',
                    margin: '0 auto',
                    display: 'flex',
                    paddingBottom: '40px'
                }} />
            <label id="deskripsi_service" style={{ fontSize: '20px', fontWeight: 'bold' }}>{t("pelayanan-kami.text")}</label>
            <p id="deskripsi_kerupuk" style={{ width: '300px'}}> 
             {t("deskripsi-pelayanan-kami.text")}
            </p>
            <a href="#top-title">
            <Button id="button-view" style={{
                backgroundColor: '#ff9c00',
                color: 'white',
                borderRadius: '20px',
                fontSize: '9px',
                width: '100px',
                height: '30px',
            }}>
              {t("lihat-detail.text")}
            </Button>
            </a>
            </div>
          </div>
          </motion.div>

          <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial={ isDesktop ? "hidden" : 0}
            animate={control}
            >
          <div style={{
            // position: 'relative',
            marginTop: isDesktop ? '-10px' : '-100px',
            marginLeft: isDesktop ? 100 : '50px',
          }}>
            <div style={{ width: '300px' }}>
                <img loading="lazy" src={Produksi} style={{
                    width: '300px',
                    height: '200px',
                    justifyContent: 'center',
                    margin: '0 auto',
                    display: 'flex', 
                    paddingBottom: '30px'
                }} />
            <label id="deskripsi_service" style={{ fontSize: '20px', fontWeight: 'bold' }}>{t("standarisasi-produk.text")}</label>
            <p id="deskripsi_kerupuk" style={{ width: '300px'}}> 
             {t("deskripsi-standarisasi.text")}
            </p>
            <a href="#top-title">
            <Button id="button-view" style={{
                backgroundColor: '#ff9c00',
                color: 'white',
                borderRadius: '20px',
                fontSize: '9px',
                width: '100px',
                height: '30px',
            }}>
              {t("lihat-detail.text")}
            </Button>
            </a>
            </div>
          </div>
          </motion.div>
          </>
        )
          : (
             <>
                <div data-aos="fade-up" style={{
                    // position: 'relative',
                    // top: isDesktop ? '200px' : '240px', 
                    marginLeft: isDesktop ? 400 : '50px',
                    marginBottom: isDesktop ? 0 : '200px',
                    marginTop: isDesktop ? 0 : '100px'
                }}>
                    <div style={{ width: '300px' }}>
                        <img loading="lazy" src={Toko} style={{
                            width: '300px',
                            height: '250px',
                            justifyContent: 'center',
                            margin: '0 auto',
                            display: 'flex',
                            paddingBottom: '40px'
                        }} />
                    <label id="deskripsi_service" style={{ fontSize: '20px', fontWeight: 'bold' }}>{t("pelayanan-kami.text")}</label>
                    <p id="deskripsi_kerupuk" style={{ width: '300px'}}> 
                    {t("deskripsi-pelayanan-kami.text")}
                    </p>
                    <a href="#top-title">
                    <Button id="button-view" style={{
                        backgroundColor: '#ff9c00',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '9px',
                        width: '100px',
                        height: '30px',
                    }}>
                    {t("lihat-detail.text")}
                    </Button>
                    </a>
                    </div>
                </div>

                <div data-aos="fade-up" style={{
                    // position: 'relative',
                    marginTop: isDesktop ? '-10px' : '-100px',
                    marginLeft: isDesktop ? 100 : '50px',
                }}>
                    <div style={{ width: '300px' }}>
                        <img loading="lazy" src={Produksi} style={{
                            width: '300px',
                            height: '200px',
                            justifyContent: 'center',
                            margin: '0 auto',
                            display: 'flex', 
                            paddingBottom: '30px'
                        }} />
                    <label id="deskripsi_service" style={{ fontSize: '20px', fontWeight: 'bold' }}>{t("standarisasi-produk.text")}</label>
                    <p id="deskripsi_kerupuk" style={{ width: '300px'}}> 
                    {t("deskripsi-standarisasi.text")}
                    </p>
                    <a href="#top-title">
                    <Button id="button-view" style={{
                        backgroundColor: '#ff9c00',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '9px',
                        width: '100px',
                        height: '30px',
                    }}>
                    {t("lihat-detail.text")}
                    </Button>
                    </a>
                    </div>
                </div>
             </>
             )}
          </div>


          <div style={{
            marginTop: '100px',
            display: isDesktop ? 'flex' : 'block'
          }}>
                <img loading="lazy" id="img-kerupuk2" src={ImgKerupuk} style={{
                    width: isDesktop ? '40%' : '90%',
                    height: isDesktop ? '500px' : '200px',
                    marginLeft: isDesktop ? 0 : '20px'
                    
                }}/>
                <Grid container style={{ marginLeft: isDesktop ? '50px' : 12, marginTop: '50px', width: isDesktop ? '100%' : '360px' }}>
                    <Typography style={{
                        fontSize: isDesktop ? '30px' : "22px",
                        fontWeight: 800,
                    }}>{t("mengapa-memilih-kami.text")}</Typography>
                    <p id="deskripsi_kerupuk">
                    {t("deskripsi-memilih.text")}
                    </p>
                    <Grid container spacing={2} style={{ display: isDesktop ? 'flex' : 'block' }}>
                        <Grid item xs={ !isDesktop ? 12 : 0}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PublicIcon style={{ width: '50px', height: '50px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>{t("jangkauan-produk.text")}</h3>
                                    <p id="deskripsi_kerupuk">{t("deskripsi-jangkauan.text")}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={ !isDesktop ? 12 : 0} ml={isDesktop ? 10 : 0}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <AiOutlineAudit style={{ width: '55px', height: '55px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>{t("audit-produk.text")}</h3>
                                    <p id="deskripsi_kerupuk">{t("deskripsi-audit.text")}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={ !isDesktop ? 12 : 0 }>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPeopleLine style={{ width: '55px', height: '55px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>{t("hubungan-pelanggan.text")}</h3>
                                    <p id="deskripsi_kerupuk">{t("deskripsi-hubungan.text")}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={ !isDesktop ? 12 : 0 } ml={isDesktop ? 10 : 0}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <CiDeliveryTruck style={{ width: '100px', height: '100px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>{t("pengiriman-terjamin.text")}</h3>
                                    <p id="deskripsi_kerupuk">{t("deskripsi-terjamin.text")}</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
          </div>



          <div style={{ marginTop: '100px', position: 'relative', marginLeft: '1px'}}>
                <img loading="lazy" src={Process} style={{ width: '100%', height: isDesktop ? '800px' : '1500px', zIndex: -2 }} />
                <div style={{ width: '100%', height: !isDesktop ? '1500px' : '800px', backgroundColor: 'rgba(59, 77, 54, 0.5)', display: isDesktop ? 'flex' : 'block' , justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '0', left: '0' }}>
                    <div style={{ margin: 0, padding: 0, display: 'block', justifyContent: 'center', position: 'relative', color: 'white' }}>
                        <h3 style={{ textAlign: 'center', fontSize: '39px' }}>{t("proses-kami.text")}</h3>
                        <p id="deskripsi_kerupuk" style={{ textAlign: 'center', width: isDesktop ? '600px' : '360px', margin: '0 auto' }}>
                            {t("deskripsi-proses.text")}
                        </p>
                        <Grid container spacing={8} justifyContent="center" mt={10}>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img loading="lazy" src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img loading="lazy" src={Optimasi} width={90} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-1.text")}</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img loading="lazy" src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img loading="lazy" src={Inovasi} width={140} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-2.text")}</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img loading="lazy" src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img loading="lazy" src={Pengemasan} width={120} height={120} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-3.text")}</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img loading="lazy" src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img loading="lazy" src={Penyimpanan} width={90} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-4.text")}</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            
            <Grid>
            <Container
                sx={{
                position: 'relative',
                top: '200px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: !isDesktop ? '19px' : '22px',
                    marginBottom: '20px', // Menambahkan margin bawah untuk memberikan jarak antara teks dan iframe
                }}
                >
                 {t("ulasan.text")}
                </Typography>
                           {/* <Carousel
                            slides={slides}
                            goToSlide={goToSlide}
                            offsetRadius={offsetRadius}
                            showNavigation={showNavigation}
                            animationConfig={config}
                        /> */}
                        <AutoplaySlider
                                play={true}
                                cancelOnInteraction={false} // should stop playing on user interaction
                                interval={6000}
                                
                            >
                            <div data-src={Gambar1}  />
                            <div data-src={Gambar2}  />
                            <div data-src={Gambar3}  />
                            <div data-src={Gambar4}  />
                            <div data-src={Gambar5}  />
                            <div data-src={Gambar6}  />
                        </AutoplaySlider>
            </Container>
            </Grid>



            <Grid>
            <Container
                sx={{
                position: 'relative',
                top: !isDesktop ? '300px' : '300px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: !isDesktop ? '19px' : '22px',
                    marginBottom: '20px', // Menambahkan margin bawah untuk memberikan jarak antara teks dan iframe
                }}
                >
                 {t("lokasi.text")}
                </Typography>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9825765925907!2d98.68250797567575!3d3.591470350272966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b9cbcae2c5%3A0xea27fd9f0b1c613d!2sJl.%20Veteran%20No.4A%2C%20Pusat%20Ps.%2C%20Kec.%20Medan%20Kota%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020231!5e0!3m2!1sid!2sid!4v1721881229293!5m2!1sid!2sid"
                style={{
                    border: '5px solid',
                    borderRadius: '10px',
                    borderColor: 'orange',
                    width: !isDesktop ? '300px' : '900px',
                    height: !isDesktop ? '350px' : '700px',
                    animation: 'blinkingBorder 2s infinite',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Container>
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
            zIndex: 3,   
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



        <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 400 : '400px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img loading="lazy" src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("telepon.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}><Textra effect="rightLeft" data={['082131131108', '085935331734']} /></span>
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
             {/* <ParticlesComponent /> */}
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
                    <div style={{ marginTop: isDesktop ? 0 : 60}}>
                            <label style={{ color: 'white', fontSize: '20px' }}>{t("jam-layanan.text")}</label>
                            <br />
                            <br />
                            <div style={{ width: isDesktop ? '100%' : '80%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("senin1.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white', paddingLeft: isDesktop ? '90px' : 0 }}>07.00 - 18.00</label>
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
            )}
        </>
    )
}
