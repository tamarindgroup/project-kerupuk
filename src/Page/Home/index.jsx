import React, {useEffect, useState} from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography, Button } from "@mui/material";
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
import Asam from '../../Image/asam-daging-150-gram (1).jpg';
import Sohun from '../../Image/Soh-hoon-6_11zon.jpg';
import KembangTahu from '../../Image/WhatsApp Image 2023-10-26 at 16.28.58.jpeg';
import LogoPusatKerupuk from '../../Image/logo pusat kerupuk.png';
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
import Header from "../Header";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Home () {
    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [isLoading, setIsLoading] = useState(false);
    const [age, setAge] = React.useState('');
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;
    const control = useAnimation();
    const [ ref, inView ] = useInView();

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
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

      const [open, setOpen] = React.useState(false);

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
                <img src={Shopping} alt="Shopping" />
            </div>
        )}
        {isLoading && (
            <>
          <Header />
          <div id="top-title">
            <img src={Kerupuk1} 
                style={{
                    height: isDesktop ? '1400px' : '200px',
                    width: isDesktop ? '100%' : '100%',
                    position: 'relative',
                    top: isDesktop ? '-598px' : '198px',
                    zIndex: -2
                }}
            />
            <div style={{ 
                position: 'absolute', 
                top: isDesktop ? '520px' : '490px', 
                left: '10%', 
                transform: 'translateY(-50%)',
                }}>
                <Typography variant="h4" style={{ color: 'white', fontSize: isDesktop ? 27 : 12  }}>{t("aneka-kerupuk.text")}</Typography>
                <Typography variant="subtitle1" style={{ color: 'white', fontSize: isDesktop ? 17 : 10 }}>{t("produk-original.text")}</Typography>
                <span style={{
                    display: 'block',
                    width: isDesktop ? '100px' : '50px',
                    height: '3px',
                    backgroundColor: 'orange',
                    margin: '5px 0'
                }}></span>
                {isDesktop ? 
                <>
                <a href="#selamat-datang">
                  <Button  className="button-header" style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    marginTop: '20px',
                    borderRadius: '19px',
                    width: '150px',
                    height: '40px',
                    fontSize: "11px"
                  }}>{t("baca.text")}</Button>
                  </a>
                </> : null}
            </div>
        </div>
        <div className="block-fitur" 
            style={{
                width: isDesktop ? '100%' : '100%',
                position: 'relative',
                display: isDesktop ? 'flex' : 'block',
                // textAlign: 'center'
                margin: '0 auto',
                marginTop: isDesktop ? '-720px' : '220px'
            }}
        >
            {!isDesktop ?
            <>
            <div data-aos="flip-up">
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
                </> }
          </div>


         



          <div style={{ display: isDesktop ? 'flex' : 'block', width: !isDesktop ? '100%' : '100%', marginTop: '200px', marginLeft: isDesktop ? '100px' : 0}}>
            

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
                <img src={Layanan24} style={{
                    width: '200px',
                    height: '200px',
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
                <img src={Produksi} style={{
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
          </div>


          <div style={{
            marginTop: '100px',
            display: isDesktop ? 'flex' : 'block'
          }}>
                <img id="img-kerupuk2" src={ImgKerupuk} style={{
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
                <img src={Process} style={{ width: '100%', height: isDesktop ? '800px' : '1500px', zIndex: -2 }} />
                <div style={{ width: '100%', height: !isDesktop ? '1500px' : '800px', backgroundColor: 'rgba(59, 77, 54, 0.5)', display: isDesktop ? 'flex' : 'block' , justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '0', left: '0' }}>
                    <div style={{ margin: 0, padding: 0, display: 'block', justifyContent: 'center', position: 'relative', color: 'white' }}>
                        <h3 style={{ textAlign: 'center', fontSize: '39px' }}>{t("proses-kami.text")}</h3>
                        <p id="deskripsi_kerupuk" style={{ textAlign: 'center', width: isDesktop ? '600px' : '360px', margin: '0 auto' }}>
                            {t("deskripsi-proses.text")}
                        </p>
                        <Grid container spacing={8} justifyContent="center" mt={10}>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Optimasi} width={90} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-1.text")}</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Inovasi} width={140} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-2.text")}</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Pengemasan} width={120} height={120} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-3.text")}</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Penyimpanan} width={90} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">{t("proses-4.text")}</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

             
          
          
        
          <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh' /* Menggunakan tinggi 100% dari viewport untuk membuatnya berada di tengah vertikal */
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
                        position: 'relative',
                        top: !isDesktop ? '120px' : '250px' 
                        }}>{t("produk-lainnya.text")}</h3> {/* Margin 0 untuk menghapus margin bawaan */}
                       <Grid container spacing={2} zIndex={2} justifyContent={'center'} mt={80}>
                        <Grid item>
                            <div style={{ position: 'relative', marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}>
                                <img src={Asam} style={{ width: '300px', height: '230px' }} />
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
                                <Button href="https://asamjawagunung.com/" target="_blank" id="button-view" style={{
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
                                <img src={Sohun} style={{ width: '300px', height: '230px' }} />
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
                                <Button href="http://tamarindindonesia.com" target="_blank" className="view" style={{
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
                                <img src={KembangTahu} style={{ width: '300px', height: '230px' }} />
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
                                <Button href="http://tamarindindonesia.com" target="_blank" id="button-view" style={{
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
                                <Grid item>
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <img src={Asam} style={{ width: '300px', height: '230px' }} />
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
                                        <Button href="https://asamjawagunung.com/" target="_blank" id="button-view" style={{
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
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <img src={Sohun} style={{ width: '300px', height: '230px' }} />
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
                                        <Button href="http://tamarindindonesia.com" target="_blank" className="view" style={{
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
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <img src={KembangTahu} style={{ width: '300px', height: '230px' }} />
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
                                        <Button href="http://tamarindindonesia.com" target="_blank" id="button-view" style={{
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
            
           



            <ReactWhatsapp id="icon-whatsapp" style={{ 
                width: 0,
                height: 0,
                cursor: 'pointer'
            }} 
            number="082131131108" 
            message={"Hallo"}>
           <img src={IconWhatsapp} 
              style={{
                maxWidth: '100%', // Tambahkan ini
                width: '70px',
                height: '70px',
                position: 'fixed', // Tetapkan posisi elemen
                bottom: '20px',    // Atur jarak dari bawah
                right: !isDesktop ? '20px' : '20px',     // Atur jarak dari kanan
                // zIndex: '9999',   
              }}
            />
        </ReactWhatsapp>


        <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 200 : '1200px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("telepon.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}>082131131108</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Location} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("alamat.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>Jalan Veteran no 4A Medan Pusat Pasar, Medan, Sumatera Utara 20231</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Email} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
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
                        <img src={LogoPusatKerupuk} width={100} height={100} />
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
            )}
        </>
    )
}
