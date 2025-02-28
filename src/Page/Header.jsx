import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography, Button } from "@mui/material";
import CallIcon from '../Image/calling.png';
import EmailIcon from '../Image/mail.png';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import  InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoPusatKerupuk from '../Image/logo pusat kerupuk.webp';
import { FaFacebookF } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { VscHome } from "react-icons/vsc";
import Home from '../Image/home.gif';
import { HiOutlineClipboardList } from "react-icons/hi";
import Produk from '../Image/produk.gif';
import { FcAbout } from "react-icons/fc";
import Tentang from '../Image/tentang.gif';
import { LuContact } from "react-icons/lu";
import About from '../Image/artikel.gif';
import { useTranslation } from "react-i18next";
import { FcGlobe } from "react-icons/fc";
import Translate from '../Image/translate.gif';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Textra from 'react-textra'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dataProduk from '../data/produk';
import { useScrollContext } from "../Context";
import { motion, Variants } from "framer-motion";
import Kerupuk1 from '../Image/kerupuk1.jpg';
import Kerupuk2 from '../Image/kerupuk2.jpg';
import Kerupuk3 from '../Image/kerupuk3.jpg';
import TextKerupuk from '../Image/distributor.png'
import TextKerupuk2 from '../Image/TextKerupuk2.png'
import LogoKerupuk from '../Image/logo_kerupuk.png';

const Header = () => {
    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [isLoading, setIsLoading] = useState(false);
    const [age, setAge] = React.useState('');
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;
    const [whatsappClicked, setWhatsappClicked] = useState(false);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [buka, setBuka] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { startShaking } = useScrollContext();
    const [isFixed, setIsFixed] = useState(false);
    const [shouldStick, setShouldStick] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Indeks gambar saat ini
    const images = [Kerupuk1, Kerupuk2, Kerupuk3]; // Daftar gambar

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length // Berganti ke gambar berikutnya, kembali ke awal jika sudah di akhir
            );
        }, 5000); // Ganti gambar setiap 5 detik

        return () => clearInterval(interval); // Bersihkan interval saat komponen tidak digunakan
    }, [images.length]);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Ambang batas untuk sticky
            setShouldStick(true);
        } else {
            setShouldStick(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const itemVariants = {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: {
          opacity: 0,
          y: 20,
          transition: { duration: 0.2 }
        }
      };

    // const handleContactClick = () => {
    //     setScrollToWhatsApp(true);
    // };



    const filterProductsByBrand = (brand) => {
        // Filter data produk berdasarkan merek yang dipilih
        const filteredProducts = dataProduk.filter(product => product[activeLanguage].brand === brand);
        // Lakukan sesuatu dengan data yang sudah difilter, misalnya tampilkan di halaman
        console.log(filteredProducts);
        // Redirect atau tampilkan sesuatu sesuai kebutuhan Anda
    };




    const handleClick = () => {
        setBuka(!buka);
    };

    const handleSearch = () => {
        if (searchValue === 'kerupuk') {
            navigate('/produk');
        }
        // tambahkan logika lainnya jika diperlukan
    };

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

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      }));

      const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `800px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: '800px',
        }),
      }));

      const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };

    useEffect(() => {
        AOS.init({ duration: 3000 })
      }, []);

    const skewStyle = {
        transform: 'skew(-35deg)'
      };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });


    return (
        <>
        {isDesktop ? (
            <>
           <div 
           style={{
               backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight white transparency
               height: '150px',
               backdropFilter: 'blur(10px)', // Adds the glass-like blur effect
               borderRadius: '10px', // Optional: Add rounded corners
               border: '1px solid rgba(255, 255, 255, 0.2)', // Optional: Slight border for better visibility
               position: 'fixed', // Keeps the div fixed at the top
               top: 0, // Aligns the div to the top of the page
               left: 0, // Ensures it is aligned from the left
               width: '100%', // Makes sure the div spans the full width of the screen
               zIndex: 1000, // Ensures it stays on top of other content
           }}
           >
                       <Grid 
                       container 
                       alignItems="center" 
                       justifyContent="center" 
                       style={{ display: "flex", textAlign: "center", marginBottom: '200px' }}
                       >
                       {/* Logo dan Teks */}
                       <Grid item style={{ display: "flex", alignItems: "center", marginTop: '30px' }}>
                           <img src={LogoKerupuk} width={400} height={100} alt="Logo" />
                           {/* <h2 className="judul-kerupuk" style={{ marginLeft: 16, fontSize: '40px' }}>
                           {t("pusat-kerupuk.text")}
                           </h2> */}
                       </Grid>
   
                       {/* Menu Bar */}
                       <Grid item>
                           <nav style={{ display: "flex", marginLeft: 182, fontSize: '25px' }}>
                           <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
                               <li style={{ margin: "0 20px" }}>
                               <a  href="/" style={{ textDecoration: "none", color: 'gray', fontSize: '30px', fontWeight: 800 }}>{t("Halaman-utama.text")}</a>
                               </li>
                               <li style={{ margin: "0 20px" }}>
                               <a  href="/produk" style={{ textDecoration: "none", color: 'gray', fontSize: '30px', fontWeight: 800}}>{t("Produk.text")}</a>
                               </li>
                               <li style={{ margin: "0 20px" }}>
                               <a  href="/about" style={{ textDecoration: "none", color: 'gray', fontSize: '30px', fontWeight: 800}}>{t("Tentang.text")}</a>
                               </li>
                               <li style={{ margin: "0 20px" }}>
                               <a  href="/artikel" style={{ textDecoration: "none", color: 'gray', fontSize: '30px', fontWeight: 800 }}>{t("Artikel.text")}</a>
                               </li>
                           </ul>
                           </nav>
                       </Grid>
                       <Grid item>
                        <FcGlobe style={{ height: '30px', width: '45px', paddingTop: 4 }} />
                            <FormControl sx={{ m: 0, minWidth: 150}}>
                                {isDesktop ? (
                                <InputLabel id="demo-simple-select-autowidth-label" sx={{ color: 'gray', margin: -1 }}>
                                    Translate
                                </InputLabel>
                                ) : (
                                 <InputLabel id="demo-simple-select-autowidth-label">
                                   Translate
                                </InputLabel>
                                )}
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={language}
                                    onChange={handleChange}
                                    autoWidth
                                    label={labelText}
                                    style={{ height: '40px', color: 'gray'}}
                                >
                                    <MenuItem onClick={() => changeLanguage('id')} value={10}>Indonesia</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('en')} value={20}>English</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('zh')} value={30}>Chinese</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('ar')} value={40}>Arabic</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                       </Grid>
                   </div>
   
                   <div 
                   style={{
                       width: '100%',
                       backgroundImage: 'rgba(255, 255, 255, 0.2)', // Transparansi lebih rendah untuk perbedaan
                       textAlign: 'center',
                       overflow: 'hidden', // Untuk menjaga elemen tetap di dalam area
                       whiteSpace: 'nowrap',
                       padding: '10px 0',
                       position: 'fixed', // Tetap berada tepat di bawah div utama
                       top: '100px', // Tepat di bawah div dengan tinggi 100px
                       zIndex: 999, // Tetap terlihat di atas elemen lain
                   }}
               >
                   {/* <span
                   id="marquee"
                       style={{
                           display: 'inline-block',
                           animation: 'marquee 30s linear infinite',
                           fontSize: '20px',
                           fontWeight: 'bold',
                       }}
                   >
                       Kerupuk Indonesia - Lezat, Renyah, dan Berkualitas Tinggi! | Aneka Kerupuk Lengkap | Distributor Kerupuk | Kerupuk Shinjuku | Kerupuk Kapal Layar | Kerupuk Kambing Lima | Kerupuk Bunga Merah | Kerupuk Layar
                   </span> */}
               </div>
   
               {/* Tambahkan animasi CSS di file utama atau gunakan style inline */}
               <style>
               {`
               @keyframes marquee {
                   0% {
                       transform: translateX(100%);
                   }
                   100% {
                       transform: translateX(-100%);
                   }
               }
               `}
               </style>
   
               {/* <div
                style={{
                    display: "flex", // Flexbox pada elemen induk
                    justifyContent: "center", // Pusatkan secara horizontal
                    alignItems: "center", // Pusatkan secara vertikal
                    height: "100vh", // Pastikan elemen memenuhi tinggi viewport
                    width: "100%", // Pastikan elemen memenuhi lebar viewport
                    marginTop: '130px'
                }}
            > */}
                {/* <div
                    style={{
                        width: "70%",
                        height: "800px",
                        backgroundImage: `url(${images[currentImageIndex]})`, // Mengatur gambar latar
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        transition: "background-image 1s ease-in-out", // Efek transisi
                        display: "flex", // Gunakan Flexbox
                        flexDirection: "column", // Atur arah Flexbox ke kolom
                        justifyContent: "center", // Pusatkan secara vertikal
                        alignItems: "center", // Pusatkan secara horizontal
                        borderRadius: '20px'
                    }}
                >
                    <img src={TextKerupuk} height={200} width={1000} alt="Text Kerupuk" style={{ marginBottom: "20px" }} />
                    <img src={TextKerupuk2} height={200} width={900} alt="Text Kerupuk 2" />
                </div> */}
            {/* </div> */}
           </>
        ) : (
            <div className="header" style={{
                borderBottom: isDesktop ? 'solid 2px #e32222' : 0,
                borderBottomColor: isDesktop ? '#e32222' : 0,
                height: isDesktop ? '217px' : '175px',
                width: '100%',
                // boxSizing: 'border-box'
              }}>
                <div className="header-top" style={{
                    marginTop: isDesktop ? '-7px' : '-1px',
                    color: '#fff',
                    width: isDesktop ? '38%' : 'auto',
                    height: isDesktop ? '53px' : '80px',
                    paddingLeft: isDesktop ? '0' : 60,
                    float: isDesktop ?  'right' : 0,
                    padding: isDesktop ? '0 0 0 350px' : 0,
                    lineHeight: '40px',
                    position: !isDesktop ? 0 : 0,
                    backgroundColor: '#ff9c00',
                    display: isDesktop ? 'flex' : 'block',
                    transform: isDesktop ? "skew(35deg)" : 0
                }}>
                 <div className="left" style={{ 
                    display: 'flex',
                    // position: 'relative', 
                    marginTop: !isDesktop ? '-4px' : '5px', 
                    transform: isDesktop ? "skew(-35deg)" : 0,
                    paddingLeft: isDesktop ? 0 : '50px'
                    }}>
                 <AccessTimeIcon style={{ height: '20px', paddingRight: '8px', paddingTop: '10px' }} />
                 <label style={{ 
                    paddingTop: isDesktop ? '-20px' : 0, 
                    position: isDesktop ? 'relative' : 0, 
                    top: isDesktop ? 0 : 0,
                    }}>{t("kami-buka.text")}: {t("Senin.text")} - {t("Sabtu.text")} 7:00 - 18:00</label> 
                 </div>
                 <div className="right" style={{ 
                    paddingLeft: isDesktop ? '100px' : '340px',
                    textAlign: isDesktop ? 'right' : 'center',
                    paddingTop: !isDesktop ? '0' : '10px',
                    display: isDesktop ? 'flex' : 'flex',
                    float: isDesktop ? 'right' : 'left',
                    marginLeft: !isDesktop ? '-210px' : 0,
                    transform: isDesktop ? "skew(-35deg)" : 0,
                    }}>
                  <Grid container spacing={2}>
                    <Grid item>
                    <a href="https://www.facebook.com/pusatkerupukindonesia/" target="_blank">
                    <FaFacebookF style={{ height: '18px', color: 'white' }} />
                    </a>
                    </Grid>
                    <Grid item>
                    <XIcon style={{ height: '20px' }} />
                    </Grid>
                    <Grid item>
                    <a href="https://www.instagram.com/pusatkerupukindonesia?igsh=MXR0djRpMjdkeGwweQ==" target="_blank">
                    <InstagramIcon style={{ height: '20px', color: 'white' }} />
                    </a>
                    </Grid>
                    <Grid item>
                    <a href="https://www.google.com/search?q=Distributor+%7C+Agen+Kerupuk+Mentah+Sumatera+%7C+Medan+%7C+Aceh&stick=H4sIAAAAAAAA_-NgU1I1qDA0MDQ0NTA0N08xNzVPMUiyMqgwS0o1NDMzNkkFchMNLZMXsVq6ZBaXFGUmlZbkFynUKDimp-YpeKcWlRaUZiv4puaVJGYoBJfmJpakFiUCpX1TUxLzQMqSUzMAGjkUfGUAAAA&hl=en&mat=CXU_1kQYn4ebElcBezTaARnAG0yBbRC9ei_Bms8qUvYIOn3k5CwGXyvg4bhFN0_BfD6ySdUW5kSFCe5FDCroWtkN4YBbGJTWOlQKvMJq2SKZtMO1KR4p9ezOF9hUO0ffAu0&authuser=0" target="_blank">
                    <SiGooglemybusiness style={{ height: '25px', width: '18px', paddingTop: '4px', color: 'white' }} />
                    </a>
                    </Grid>
                  </Grid>
                 </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center', 
                    paddingTop: isDesktop ? '57px' : '-10px',
                    justifyContent: 'center', 
                    margin: !isDesktop ? 10 : 0
                }}>
                    <img loading="lazy" src={LogoKerupuk} height={isDesktop ? 90 : 80} width={isDesktop ? 100 : 320} style={{ marginRight: '0' }} />
                    {/* <label id="title-pusat-kerupuk" style={{ fontSize: isDesktop ? '22px' : '20px' }}>{t("pusat-kerupuk.text")}</label> */}
                </div>
                <div className="hub"
                    style={{ 
                        position: isDesktop ? 'relative' : 0,
                        float: isDesktop ? 'right' : 0, 
                        left: isDesktop ? (window.innerWidth === 1280 && window.innerHeight === 800 ? '3000px' : '-100px') : '-30px',
                        marginTop: isDesktop ? '-60px' : '30px',
                        marginLeft: isDesktop ? '200px' : '-20px'
                    }}
                >
                    <Grid container spacing={ isDesktop ? 6 : 2} justifyContent="center"> 
                        <Grid item display={'flex'}>
                            <img loading="lazy" src={CallIcon} 
                            height={ isDesktop ? 40 : 30} 
                            width={ isDesktop ? 50 : 30} 
                            style={{
                                paddingLeft: isDesktop ? '' : 10
                            }}
                            />
                            <div style={{ display: 'block', marginTop: isDesktop ? 0 : '-1px' }}>
                                <Typography style={{ paddingLeft: '12px', fontSize: isDesktop ? 17 : 12, fontWeight: 700 }}>{t("Telpon-kami.text")}</Typography>
                                <Typography style={{ paddingLeft: '12px', fontSize: isDesktop ? 17 : 10 }}><Textra effect="rightLeft" data={['082160904267', '085935331734']} /></Typography>
                               
                            </div>
                        </Grid>
                        <Grid item display={'flex'} style={{left: isDesktop ? '-120px' : '-160px' }}>
                            <img loading="lazy" src={EmailIcon} 
                            height={ isDesktop ? 40 : 30} 
                            width={ isDesktop ? 50 : 30} 
                                style={{
                                    left: isDesktop ? 10 : '20px',
                                    top: isDesktop ? 0 : '-1px',
                                    position: 'relative'
                                }}
                            />
                            <div style={{ display: 'block', left: isDesktop ? '10px' : '13px', top: isDesktop ? '-2px' : '-4px', position: 'relative',  }}>
                                <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 12, fontWeight: 700 }}>{t("kirim-email.text")}</Typography>
                                <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 10 }}>pusatkerupukindonesia@gmail.com</Typography>
                            </div>
                        </Grid>
                        <Grid item> 
                            <Button  onClick={startShaking} style={{ 
                                backgroundColor: '#ff9c00',
                                height: '40px',
                                width: '100px',
                                color: 'white',
                                marginTop: isDesktop ? '10px' : '19px', 
                            }}>
                                {t("Kontak.text")}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                 {isDesktop ? 
                <div className="header-bottom" style={{
                    color: 'white',
                    display: 'flex',
                    marginTop: '30px',
                    width: '55%',
                    height: '50px',
                    padding: '0 0 0 25px',
                    float: 'right',
                    backgroundColor: '#e32222',
                    marginBottom: '-10px',
                    zIndex: '-3',
                }}>
                    <Grid container spacing={8} style={{
                        transform: 'skew(35deg)',
                        paddingLeft: '-40px',
                        paddingTop: '6px',
                    }}>
                        <Grid item>
                            <Button style={{ color: 'white' }} href="/">{t("Halaman-utama.text")}</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{ color: 'white' }} href="/produk">{t("Produk.text")}</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{ color: 'white' }} href="/about">{t("Tentang.text")}</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{ color: 'white' }} href="/artikel">{t("Artikel.text")}</Button>
                        </Grid>
                        <Grid item style={{
                            top: '-7px',
                            left: '200px'
                        }}>
                            <Search>
                                <SearchIconWrapper>
                                <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                                />
                            </Search>
                        </Grid>
                        <Grid item>
                        <FcGlobe style={{ height: '30px', width: '45px', paddingTop: 4 }} />
                            <FormControl sx={{ m: 0, minWidth: 150}}>
                                {isDesktop ? (
                                <InputLabel id="demo-simple-select-autowidth-label" sx={{ color: 'white', margin: -1 }}>
                                    Translate
                                </InputLabel>
                                ) : (
                                 <InputLabel id="demo-simple-select-autowidth-label">
                                   Translate
                                </InputLabel>
                                )}
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={language}
                                    onChange={handleChange}
                                    autoWidth
                                    label={labelText}
                                    style={{ height: '40px', color: 'orange'}}
                                >
                                    <MenuItem onClick={() => changeLanguage('id')} value={10}>Indonesia</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('en')} value={20}>English</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('zh')} value={30}>Chinese</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('ar')} value={40}>Arabic</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
                   :  
                   <> 
                          <motion.nav
                             initial={false}
                             animate={isOpen ? "open" : "closed"}
                             className={`menu ${isFixed ? 'fixed' : ''}`}
                             style={{
                                 marginTop: '40px',
                                 width: '100%',
                                 height: '50px',
                                 zIndex: 1000,
                                 position: 'sticky',
                                 top: isFixed ? 0 : 'auto'
                             }}
                            >
                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setIsOpen(!isOpen)}
                                style={{
                                backgroundColor: '#ff9c00',
                                border: 'none',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                height: '60px'
                                }}
                            >
                                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{ marginLeft: '11px', backgroundColor: '#ff9c00', textAlign: 'left', paddingTop: '6px' }}>
                                {t("Menu.text")}
                                </Typography>
                                <motion.div
                                variants={{
                                    open: { rotate: 180 },
                                    closed: { rotate: 0 }
                                }}
                                transition={{ duration: 0.2 }}
                                style={{ originY: 0.55, marginRight: '11px', paddingTop: '6px' }}
                                >
                                <svg width="15" height="15" viewBox="0 0 20 20">
                                    <path d="M0 7 L 20 7 L 10 16" fill="white" />
                                </svg>
                                </motion.div>
                            </motion.button>
    
                            <motion.div
                                variants={{
                                open: {
                                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                                    transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                    }
                                },
                                closed: {
                                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                                    transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3
                                    }
                                }
                                }}
                                style={{
                                    pointerEvents: isOpen ? "auto" : "none",
                                    background: 'linear-gradient(to right, #ffffff, #e0e0e0, #c0c0c0)',
                                    color: 'gray',
                                    border: 'none',
                                    marginTop: '20px',
                                    width: '80%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    border: '4px solid orange',
                                    backgroundSize: '200% 200%',
                                    animation: isOpen ? 'shine 6s linear infinite' : 'none',
                                    borderTopRightRadius: '80px',
                                }}
                            >
                                <motion.div style={{ padding: '10px' }}>
                                <img src={Home} style={{ paddingRight: '25px', width: '50px', height: '50px' }} />
                                <a className="list-menu" href="/" style={{ color: 'gray', textDecoration: 'none', fontSize: '25px', paddingLeft: '10px' }}>
                                    {t("Halaman-utama.text")}
                                </a>
                                </motion.div>
                                <motion.div style={{ padding: '10px' }}>
                                <img src={Produk} style={{ paddingRight: '25px', width: '50px', height: '50px' }} />
                                <a className="list-menu" href="/produk" style={{ color: 'gray', textDecoration: 'none', fontSize: '25px', paddingLeft: '10px' }}>
                                    {t("Produk.text")}
                                </a>
                                </motion.div>
                                <motion.div style={{ padding: '10px' }}>
                                <img src={Tentang} style={{ paddingRight: '25px', width: '50px', height: '50px' }} />
                                <a className="list-menu" href="/about" style={{ color: 'gray', textDecoration: 'none', fontSize: '25px', paddingLeft: '10px' }}>
                                    {t("Tentang.text")}
                                </a>
                                </motion.div>
                                <motion.div style={{ padding: '10px' }}>
                                <img src={About} style={{ paddingRight: '25px', width: '50px', height: '50px' }} />
                                <a className="list-menu" href="/artikel" style={{ color: 'gray', textDecoration: 'none', fontSize: '25px', paddingLeft: '10px' }}>
                                    {t("Artikel.text")}
                                </a>
                                </motion.div>
                                <motion.div style={{ padding: '10px', marginTop: '20px' }}>
                                <img src={Translate} style={{ paddingRight: '20px', width: '50px', height: '50px', marginTop: '-20px' }} />
                                <FormControl sx={{ m: 1, minWidth: 130, marginTop: '-20px', border: '1px solid gray' }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" style={{ color: 'gray' }}>Translate</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={language}
                                    onChange={handleChange}
                                    autoWidth
                                    label={labelText}
                                    >
                                    <MenuItem onClick={() => changeLanguage('id')} value={10}>Indonesia</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('en')} value={20}>English</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('zh')} value={30}>Chinese</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('ar')} value={40}>Arabic</MenuItem>
                                    </Select>
                                </FormControl>
                                </motion.div>
                            </motion.div>
                            </motion.nav>

                            {/* <div
                            style={{
                                width: "100%",
                                height: "400px",
                                backgroundImage: `url(${images[currentImageIndex]})`, // Mengatur gambar latar
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                marginTop: "-10px",
                                transition: "background-image 1s ease-in-out", // Efek transisi
                                display: "flex", // Gunakan Flexbox
                                flexDirection: "column", // Atur arah Flexbox ke kolom
                                justifyContent: "center", // Pusatkan secara vertikal
                                alignItems: "center", // Pusatkan secara horizontal
                            }}
                        >
                            <img src={TextKerupuk} height={100} width={400} alt="Text Kerupuk" style={{ marginBottom: "20px" }} />
                            <img src={TextKerupuk2} height={100} width={400} alt="Text Kerupuk 2" />
                        </div> */}
                     
                   </>  
                }
              </div>
        )}
        </>
    )
}

export default Header;