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

export function Home () {
    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [isLoading, setIsLoading] = useState(false);
    const [age, setAge] = React.useState('');
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;

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
          <div>
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
                <Typography variant="h4" style={{ color: 'white', fontSize: isDesktop ? 27 : 12  }}>Aneka Kerupuk Nusantara</Typography>
                <Typography variant="subtitle1" style={{ color: 'white', fontSize: isDesktop ? 17 : 10 }}>Original Product</Typography>
                <span style={{
                    display: 'block',
                    width: isDesktop ? '100px' : '50px',
                    height: '3px',
                    backgroundColor: 'orange',
                    margin: '5px 0'
                }}></span>
                {isDesktop ? 
                <>
                  <button className="button-header" style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    marginTop: '20px',
                    borderRadius: '19px',
                    width: '150px',
                    height: '40px'
                  }}>Read More</button>
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
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>Fast Delivery</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    Paket Anda akan dikirimkan dengan cepat ke tujuan, 
                    memastikan barang Anda tiba tepat waktu
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
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>Secured Service</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    Setiap langkah pengiriman diawasi dengan ketat untuk 
                    memastikan bahwa paket Anda tiba dengan aman dan tepat waktu
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
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>Affordable price</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    Anda dapat mengirimkan paket Anda dengan biaya yang lebih 
                    rendah tanpa mengorbankan kualitas layanan
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
                <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>24/7 Support</Typography>
                <Typography style={{ 
                    textAlign: 'center', 
                    fontSize: '12px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '160px',
                    paddingBottom: '20px'
                    }}>
                    Tim dukungan pelanggan siap membantu Anda dengan pertanyaan, 
                    masalah, atau kebutuhan bantuan lainnya
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
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>Fast Delivery</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        Paket Anda akan dikirimkan dengan cepat ke tujuan, 
                        memastikan barang Anda tiba tepat waktu
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
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>Secured Service</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        Setiap langkah pengiriman diawasi dengan ketat untuk 
                        memastikan bahwa paket Anda tiba dengan aman dan tepat waktu
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
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>Affordable price</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        Anda dapat mengirimkan paket Anda dengan biaya yang lebih 
                        rendah tanpa mengorbankan kualitas layanan
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
                    <Typography style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>24/7 Support</Typography>
                    <Typography style={{ 
                        textAlign: 'center', 
                        fontSize: '12px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        display: 'flex',
                        width: '160px',
                        paddingBottom: '20px'
                        }}>
                        Tim dukungan pelanggan siap membantu Anda dengan pertanyaan, 
                        masalah, atau kebutuhan bantuan lainnya
                    </Typography>
                </div>
                </> }
          </div>


         



          <div style={{ display: isDesktop ? 'flex' : 'block', width: !isDesktop ? '100%' : '100%', marginTop: '200px', marginLeft: isDesktop ? '100px' : 0}}>
            

            <div style={{ width: isDesktop ? 0 : '100%'}}>
    
            <Typography className="welcome" style={{
                fontSize: isDesktop ? '24px' : '18px',
                paddingLeft: isDesktop ? 0 : '20px',
                width: isDesktop ? '300px' : 100
            }}>Welcome to</Typography>
            <Typography className="pusat_kerupuk" style={{
                fontSize: isDesktop ? '33px' : '22px',
                fontWeight: 'bold',
                width: !isDesktop ? '280px' : '500px',
                paddingLeft: isDesktop ? 0 : '20px'
            }}>Pusat Kerupuk Indonesia</Typography>
            {isDesktop ?
            <p id="deskripsi_kerupuk" style={{
                width: isDesktop ? '600px' : '300px',
                paddingTop: '20px',
            }}>
           Selamat datang di Pusat Kerupuk Indonesia, tujuan utama Anda untuk menemukan kelezatan kerupuk terbaik dari berbagai penjuru Nusantara! Kami adalah destinasi terpercaya bagi para pecinta makanan yang mencari aneka ragam kerupuk tradisional Indonesia yang autentik dan lezat.

           Di Pusat Kerupuk Indonesia, kami memahami kekayaan budaya Indonesia yang tercermin dalam beragam rasa, tekstur, dan bahan-bahan berkualitas yang digunakan dalam pembuatan kerupuk. Kami bangga menyajikan kepada Anda koleksi lengkap kerupuk dari berbagai daerah di Indonesia, mulai dari kerupuk udang, kerupuk singkong, kerupuk ikan, hingga kerupuk rempeyek dan masih banyak lagi.
           <br />
           <br />
           Setiap produk kerupuk yang kami tawarkan dipilih dengan cermat untuk memastikan kualitas terbaik. Kami bekerja sama dengan produsen kerupuk terkemuka yang menggunakan resep turun-temurun dan teknik pembuatan tradisional untuk menghasilkan kerupuk yang berkualitas tinggi dan lezat.

           Dengan berbelanja di Pusat Kerupuk Indonesia, Anda tidak hanya menikmati kelezatan makanan yang autentik, tetapi juga mendukung industri kecil dan menengah di berbagai daerah di Indonesia. Kami komitmen untuk mempromosikan dan memperkenalkan kekayaan kuliner Indonesia kepada dunia.
          </p>
            : 
            <>
            <p id="deskripsi_kerupuk" style={{
                width: isDesktop ? '100%' : '300px',
                paddingTop: '20px',
                paddingLeft: '20px'
            }}>
           Selamat datang di Pusat Kerupuk Indonesia, tujuan utama Anda untuk menemukan kelezatan kerupuk terbaik dari berbagai penjuru Nusantara! Kami adalah destinasi terpercaya bagi para pecinta makanan yang mencari aneka ragam kerupuk tradisional Indonesia yang autentik dan lezat.

           Di Pusat Kerupuk Indonesia, kami memahami kekayaan budaya Indonesia yang tercermin dalam beragam rasa, tekstur, dan bahan-bahan berkualitas yang digunakan dalam pembuatan kerupuk. Kami bangga menyajikan kepada Anda koleksi lengkap kerupuk dari berbagai daerah di Indonesia, mulai dari kerupuk udang, kerupuk singkong, kerupuk ikan, hingga kerupuk rempeyek dan masih banyak lagi.
           <br />
           <br />
           Setiap produk kerupuk yang kami tawarkan dipilih dengan cermat untuk memastikan kualitas terbaik. Kami bekerja sama dengan produsen kerupuk terkemuka yang menggunakan resep turun-temurun dan teknik pembuatan tradisional untuk menghasilkan kerupuk yang berkualitas tinggi dan lezat.

           Dengan berbelanja di Pusat Kerupuk Indonesia, Anda tidak hanya menikmati kelezatan makanan yang autentik, tetapi juga mendukung industri kecil dan menengah di berbagai daerah di Indonesia. Kami komitmen untuk mempromosikan dan memperkenalkan kekayaan kuliner Indonesia kepada dunia.
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
                <label style={{ paddingLeft: '15px', margin: 0 }}>Produk Berkualitas</label>
            </div>

            <div id="check-2" style={{ display: !isDesktop ? 'block' : 'flex', marginTop: '13px', alignItems: 'center', width: isDesktop ? '300px' : '300px', marginLeft: isDesktop ? 0 : '20px' }}>
                <CheckCircleIcon style={{
                    width: '18px',
                    height: '18px',
                    color: 'red'
                }} />
                <label style={{ paddingLeft: '15px', margin: 0 }}>Penyedia Aneka Kerupuk</label>
            </div>
          </div>
         

        
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
            <label id="deskripsi_service" style={{ fontSize: '20px', fontWeight: 'bold' }}>24/7 Our Service</label>
            <p id="deskripsi_kerupuk" style={{ width: '300px'}}> 
            Nikmati layanan penjualan produk kerupuk 24/7 dari Pusat Kerupuk Indonesia! 
            Kami siap melayani Anda kapan saja, di mana saja, dengan beragam pilihan kerupuk 
            Nusantara yang autentik dan berkualitas. Segera temukan kelezatan kerupuk favorit Anda tanpa batasan waktu, 
            hanya di Pusat Kerupuk Indonesia.
            </p>
            <Button id="button-view" style={{
                backgroundColor: '#ff9c00',
                color: 'white',
                borderRadius: '20px',
                fontSize: '9px',
                width: '100px',
                height: '30px',
            }}>
              View Details
            </Button>
            </div>
          </div>

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
            <label id="deskripsi_service" style={{ fontSize: '20px', fontWeight: 'bold' }}>Standardization of Our Products</label>
            <p id="deskripsi_kerupuk" style={{ width: '300px'}}> 
            Standarisasi produk kami di Pusat Kerupuk Indonesia adalah yang tertinggi |
            dalam kualitas, keaslian, dan keberagaman. Setiap kerupuk diproduksi sesuai 
            standar kualitas ketat, menjaga cita rasa tradisional dan inovasi. 
            Dengan pemilihan bahan baku yang cermat dan proses produksi yang teliti.
            </p>
            <Button id="button-view" style={{
                backgroundColor: '#ff9c00',
                color: 'white',
                borderRadius: '20px',
                fontSize: '9px',
                width: '100px',
                height: '30px',
            }}>
              View Details
            </Button>
            </div>
          </div>
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
                    }}>Why People Choose Us</Typography>
                    <p id="deskripsi_kerupuk">
                    Pusat Kerupuk Indonesia menawarkan kerupuk berkualitas tinggi 
                    dengan rasa autentik dan tekstur renyah. Dengan beragam varian rasa 
                    dan layanan pelanggan yang ramah, kami menjadi destinasi terbaik untuk 
                    menemukan kerupuk yang nikmat.
                    </p>
                    <Grid container spacing={2} style={{ display: isDesktop ? 'flex' : 'block' }}>
                        <Grid item xs={ !isDesktop ? 12 : 0}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PublicIcon style={{ width: '50px', height: '50px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>Product Range</h3>
                                    <p id="deskripsi_kerupuk">Menjangkau pengiriman produk di seluruh Indonesia</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={ !isDesktop ? 12 : 0} ml={isDesktop ? 10 : 0}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <AiOutlineAudit style={{ width: '55px', height: '55px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>Product Audit</h3>
                                    <p id="deskripsi_kerupuk">Pemeriksaan rutin produk agar terjaga standar mutu</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={ !isDesktop ? 12 : 0 }>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPeopleLine style={{ width: '55px', height: '55px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>Relationships with customers</h3>
                                    <p id="deskripsi_kerupuk">Menjangkau pengiriman produk di seluruh Indonesia</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={ !isDesktop ? 12 : 0 } ml={isDesktop ? 10 : 0}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <CiDeliveryTruck style={{ width: '100px', height: '100px', color: '#e32222' }} />
                                <div style={{ paddingLeft: '20px' }}>
                                    <h3>Guaranteed delivery</h3>
                                    <p id="deskripsi_kerupuk">Kami menjamin pengiriman kerupuk dari Pusat Kerupuk Indonesia yang terpercaya.</p>
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
                        <h3 style={{ textAlign: 'center', fontSize: '39px' }}>Our Process</h3>
                        <p id="deskripsi_kerupuk" style={{ textAlign: 'center', width: isDesktop ? '600px' : '360px', margin: '0 auto' }}>
                            Kami adalah pemasok kerupuk terkemuka di Indonesia, memilih bahan baku terbaik dan menjalani proses produksi dengan standar tertinggi untuk memberikan produk berkualitas tinggi kepada pelanggan kami.
                        </p>
                        <Grid container spacing={8} justifyContent="center" mt={10}>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Optimasi} width={90} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">Optimasi Produksi</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Inovasi} width={140} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">Inovasi Keunggulan</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Pengemasan} width={120} height={120} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">Pengemasan Aman</Typography>
                            </Grid>
                            <Grid item>
                                <div className="lingkaran-container">
                                    <img src={Lingkaran} width={isDesktop ? 220 : 180} height={isDesktop ? 220 : 180} className="lingkaran" />
                                    <img src={Penyimpanan} width={90} height={90} className="optimasi" />
                                </div>
                                <Typography variant="subtitle1" align="center">Penyimpanan Kesegaran</Typography>
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
                        }}>Other Products</h3> {/* Margin 0 untuk menghapus margin bawaan */}
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
                                    }}>Asam Jawa</div>
                                <p id="deskripsi_kerupuk" style={{ width: '300px' }}>Pusat Kerupuk Indonesia tidak hanya menawarkan kerupuk berkualitas tinggi, 
                                    tetapi juga menyediakan produk lain seperti Asam Jawa. Dengan fokus pada standar 
                                    produksi yang terjaga, Asam Jawa dari Pusat Kerupuk Indonesia memberikan rasa autentik 
                                    yang memikat, menjadikannya pilihan yang sempurna sebagai camilan yang lezat dan menyegarkan.
                                </p>
                                <Button href="https://www.asamjawagunung.com" target="_blank" id="button-view" style={{
                                    backgroundColor: '#ff9c00',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '9px',
                                    width: '100px',
                                    height: '30px',
                                }}>
                                View Details
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
                                    }}>Sohun</div>
                                    <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                        Pusat Kerupuk Indonesia tidak hanya menawarkan kerupuk berkualitas tinggi, 
                                        tetapi juga produk lain seperti Asam Jawa dan Sohun. Dengan fokus pada standar 
                                        produksi yang terjaga, Sohun dari Pusat Kerupuk Indonesia memberikan pilihan camilan 
                                        yang lezat dan menyegarkan, dengan cita rasa autentik yang memikat.
                                </p>
                                <Button href="http://tamarindindonesia.com" target="_blank" className="view" style={{
                                    backgroundColor: '#ff9c00',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '9px',
                                    width: '100px',
                                    height: '30px',
                                }}>
                                 View Details
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
                                    }}>Kembang Tahu</div>
                                    <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                        Pusat Kerupuk Indonesia tidak hanya menghadirkan berbagai jenis kerupuk berkualitas tinggi, 
                                        tetapi juga menawarkan produk lain seperti Kulit Kembang Tahu. Dengan komitmen pada standar 
                                        produksi yang ketat, Kulit Kembang Tahu dari Pusat Kerupuk Indonesia menghadirkan pilihan 
                                        camilan yang gurih dan lezat, memenuhi keinginan para pecinta makanan ringan dengan rasa yang 
                                        autentik dan kualitas yang terjamin.
                                </p>
                                <Button href="http://tamarindindonesia.com" target="_blank" id="button-view" style={{
                                    backgroundColor: '#ff9c00',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '9px',
                                    width: '100px',
                                    height: '30px',
                                }}>
                                View Details
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
                            }}>Other Products</h3> {/* Margin 0 untuk menghapus margin bawaan */}
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
                                            }}>Asam Jawa</div>
                                        <p id="deskripsi_kerupuk" style={{ width: '300px' }}>Pusat Kerupuk Indonesia tidak hanya menawarkan kerupuk berkualitas tinggi, 
                                            tetapi juga menyediakan produk lain seperti Asam Jawa. Dengan fokus pada standar 
                                            produksi yang terjaga, Asam Jawa dari Pusat Kerupuk Indonesia memberikan rasa autentik 
                                            yang memikat, menjadikannya pilihan yang sempurna sebagai camilan yang lezat dan menyegarkan.
                                        </p>
                                        <Button href="https://www.asamjawagunung.com" target="_blank" id="button-view" style={{
                                            backgroundColor: '#ff9c00',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '9px',
                                            width: '100px',
                                            height: '30px',
                                        }}>
                                        View Details
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
                                            }}>Sohun</div>
                                            <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                                Pusat Kerupuk Indonesia tidak hanya menawarkan kerupuk berkualitas tinggi, 
                                                tetapi juga produk lain seperti Asam Jawa dan Sohun. Dengan fokus pada standar 
                                                produksi yang terjaga, Sohun dari Pusat Kerupuk Indonesia memberikan pilihan camilan 
                                                yang lezat dan menyegarkan, dengan cita rasa autentik yang memikat.
                                        </p>
                                        <Button href="http://tamarindindonesia.com" target="_blank" className="view" style={{
                                            backgroundColor: '#ff9c00',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '9px',
                                            width: '100px',
                                            height: '30px',
                                        }}>
                                        View Details
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
                                            }}>Kembang Tahu</div>
                                            <p id="deskripsi_kerupuk" style={{ width: '300px' }}>
                                                Pusat Kerupuk Indonesia tidak hanya menghadirkan berbagai jenis kerupuk berkualitas tinggi, 
                                                tetapi juga menawarkan produk lain seperti Kulit Kembang Tahu. Dengan komitmen pada standar 
                                                produksi yang ketat, Kulit Kembang Tahu dari Pusat Kerupuk Indonesia menghadirkan pilihan 
                                                camilan yang gurih dan lezat, memenuhi keinginan para pecinta makanan ringan dengan rasa yang 
                                                autentik dan kualitas yang terjamin.
                                        </p>
                                        <Button href="http://tamarindindonesia.com" target="_blank" id="button-view" style={{
                                            backgroundColor: '#ff9c00',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '9px',
                                            width: '100px',
                                            height: '30px',
                                        }}>
                                        View Details
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


            <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? '300px' : '1050px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', position: 'relative', top: isDesktop ? '80px' : '50px', left: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>Phone :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}>082131131108</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Location} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>Address :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>Jalan Veteran no 4A Medan Pusat Pasar, Medan, Sumatera Utara 20231</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Email} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>Email :</span>
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
                            Temukan beragam kerupuk renyah dalam koleksi kami. Dari kerupuk kentang hingga kerupuk udang, 
                            setiap gigitan menjanjikan cita rasa autentik dan kualitas premium yang tak tertandingi. 
                            Dibuat dengan bahan-bahan berkualitas terbaik dan proses produksi yang terjamin kebersihannya, 
                            kami menawarkan pilihan camilan yang sempurna untuk setiap kesempatan. 
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
                            <label style={{ color: 'white', fontSize: '20px' }}> Service Hours </label>
                            <br />
                            <br />
                            <div style={{ width: isDesktop ?  '100%' : 270 }}>
                            <label style={{ color: 'white' }}>Senin</label>
                            <label style={{ color: 'white', paddingLeft: '105px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Selasa</label>
                            <label style={{ color: 'white', paddingLeft: '100px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Rabu</label>
                            <label style={{ color: 'white', paddingLeft: '107px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Kamis</label>
                            <label style={{ color: 'white', paddingLeft: '102px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Jumat</label>
                            <label style={{ color: 'white', paddingLeft: '102px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Sabtu</label>
                            <label style={{ color: 'white', paddingLeft: '102px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '100%', backgroundColor: '#1f1e21', height: isDesktop ? '90px' : '100px', marginTop:  isDesktop ? '-10px' : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white' }}><label style={{ color:  "#ff9c00"}}>@2024</label> Pusat Kerupuk Indonesia</span>
            </div>
            </>
            )}
        </>
    )
}
