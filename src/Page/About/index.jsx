import React, {useEffect, useState, useRef} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography, Button } from "@mui/material";
import CallIcon from '../../Image/calling.png';
import EmailIcon from '../../Image/mail.png';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoPusatKerupuk from '../../Image/logo pusat kerupuk.png';
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

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { VscHome } from "react-icons/vsc";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { LineWeight } from "@mui/icons-material";


export function About() {

    const theme = useTheme();

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

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });

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

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

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
                    currentCount += 1;
                    setCount(currentCount);
                } else {
                    clearInterval(interval);
                }
            }, 10); // interval 10ms untuk memberikan efek animasi

            let currentCount1000 = 0;
            const interval1000 = setInterval(() => {
                if (currentCount1000 < 1000) {
                    currentCount1000 += 1;
                    setCount1000(currentCount1000);
                } else {
                    clearInterval(interval1000);
                }
            }, 5); // interval 5ms untuk memberikan efek animasi

            return () => {
                clearInterval(interval);
                clearInterval(interval1000);
            };
        }
    }, [isVisible]);


    return (
        <>
         <div className="header" style={{
            borderBottom: isDesktop ? 'solid 2px #e32222' : 0,
            borderBottomColor: isDesktop ? '#e32222' : 0,
            height: isDesktop ? '217px' : '175px',
            width: '100%'
            // boxSizing: 'border-box'
          }}>
            <div className="header-top" style={{
                marginTop: isDesktop ? '-7px' : '-1px',
                color: '#fff',
                width: isDesktop ? '38%' : 'auto',
                height: isDesktop ? '40px' : '80px',
                paddingLeft: isDesktop ? '0' : 60,
                float: isDesktop ?  'right' : 0,
                padding: isDesktop ? '0 0 0 350px' : 0,
                lineHeight: '40px',
                position: !isDesktop ? 0 : 'relative',
                backgroundColor: '#ff9c00',
                display: isDesktop ? 'flex' : 'block',
                transform: isDesktop ? "skew(35deg)" : 0
            }}>
             <div className="left" style={{ 
                display: 'flex',
                // position: 'relative', 
                top: '-4px', 
                transform: isDesktop ? "skew(-35deg)" : 0,
                paddingLeft: isDesktop ? 0 : '40px'
                }}>
             <AccessTimeIcon style={{ height: '20px', paddingRight: '8px', paddingTop: '10px' }} />
             <label style={{ 
                paddingTop: isDesktop ? '-20px' : 0, 
                position: isDesktop ? 'relative' : 0, 
                top: isDesktop ? 0 : 0,
                }}>We are Open: Sen - Sab 7:00 - 18:00</label> 
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
                <FaFacebookF style={{ height: '18px' }} />
                </Grid>
                <Grid item>
                <XIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <InstagramIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <SiGooglemybusiness style={{ height: '25px', width: '18px', paddingTop: '4px' }} />
                </Grid>
              </Grid>
             </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center', // Mengatur elemen berada di tengah secara vertikal
                paddingTop: isDesktop ? '57px' : '-10px',
                justifyContent: 'center', 
                margin: !isDesktop ? 10 : 0
            }}>
                <img src={LogoPusatKerupuk} height={isDesktop ? 90 : 50} width={isDesktop ? 100 : 50} style={{ marginRight: '10px' }} />
                <label style={{ fontSize: isDesktop ? '22px' : '20px' }}>Pusat Kerupuk Indonesia</label>
            </div>
            <div className="hub"
                style={{ 
                    position: isDesktop ? 'relative' : 0,
                    float: isDesktop ? 'right' : 0, 
                    left: isDesktop ? '-250px' : '-30px',
                    marginTop: isDesktop ? '-50px' : '30px',
                }}
            >
                <Grid container spacing={6} justifyContent="center"> {/* Mengatur grid container menjadi center */}
                    <Grid item display={'flex'}>
                        <img src={CallIcon} 
                        height={ isDesktop ? 40 : 30} 
                        width={ isDesktop ? 50 : 30} 
                        style={{
                            paddingLeft: isDesktop ? '' : 10
                        }}
                        />
                        <div style={{ display: 'block', marginTop: isDesktop ? 0 : '1px' }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 10, fontWeight: 700 }}>Call Us</Typography>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 8 }}>082131131108</Typography>
                        </div>
                    </Grid>
                    <Grid item display={'flex'} style={{left: isDesktop ? '-120px' : '-160px' }}>
                        <img src={EmailIcon} 
                        height={ isDesktop ? 40 : 30} 
                        width={ isDesktop ? 50 : 30} 
                            style={{
                                left: isDesktop ? '200px' : '200px',
                                top: isDesktop ? 0 : '-1px'
                            }}
                        />
                        <div style={{ display: 'block', left: isDesktop ? '210px' : '200px', top: isDesktop ? '-2px' : '-1px' }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 10, fontWeight: 700 }}>Send us Email</Typography>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 8 }}>pusatkerupukindonesia@gmail.com</Typography>
                        </div>
                    </Grid>
                    <Grid item> {/* Menggunakan Grid item untuk tombol Contact */}
                        <Button style={{ 
                            backgroundColor: '#ff9c00',
                            height: '40px',
                            width: '100px',
                            color: 'white',
                            marginTop: isDesktop ? '10px' : '-10px', // Atur margin atas sesuai kebutuhan
                        }}>
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </div>
             {isDesktop ? 
            <div style={{ width: '100%' }}>
            <div className="header-bottom" style={{
                color: 'white',
                display: 'flex',
                marginTop: '28px',
                width: isDesktop ? '38%' : '100%',
                height: '50px',
                padding: '0 0 0 350px',
                float: 'right',
                backgroundColor: '#e32222',
                marginBottom: '-10px',
                position: 'relative',
                zIndex: '99999',
                marginLeft: '300px'
            }}>
                <Grid container spacing={6} style={{
                    transform: 'skew(35deg)',
                    paddingTop: '5px',
                    marginLeft: '-350px'
                }}>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/">Home</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/produk">Product</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/about">About</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/contact">Contact</Button>
                    </Grid>
                    <Grid item style={{
                        // position: 'relative',
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
                            />
                        </Search>
                    </Grid>
                </Grid>
            </div>
            </div>
               :  
               <> 
                    <AppBar style={{ marginTop: '320px', backgroundColor: '#ff9c00' }} position="absolute">
                        <Toolbar>
                            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                                Menu
                            </Typography>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={open ? handleDrawerClose : handleDrawerOpen}
                            >
                                {open ? <ChevronLeftIcon /> : <MenuIcon />}
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="persistent"
                        anchor="right"
                        open={open}
                    >
                        <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            <ListItem>
                                <VscHome style={{ paddingRight: '10px' }} />
                                <a href="/" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    Home
                                </a>
                            </ListItem>
                            <ListItem>
                                <HiOutlineClipboardList style={{ paddingRight: '10px' }} />
                                <a href="/produk" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    Product
                                </a>
                            </ListItem>
                            <ListItem>
                                <FcAbout style={{ paddingRight: '10px' }} />
                                <a href="/about" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    About
                                </a>
                            </ListItem>
                            <ListItem>
                                <LuContact style={{ paddingRight: '10px' }} />
                                <a href="/artikel" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    Artikel
                                </a>
                            </ListItem>
                        </List>
                        <Divider />
                    </Drawer>
               </>  
            }
          </div>


          <div style={{ 
            width: isDesktop ? '100%' : '100%',
            marginTop: isDesktop ? '100px' : '200px',
            display: isDesktop ? 'flex' : 'block',
            justifyContent: 'center'
            }}>
             
             <div style={{ position: isDesktop ? 'relative' : 'relative', width: isDesktop ? '40%' : '100%', height: isDesktop ? '440px' : '400px' }}>
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
                <img
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
                    left: isDesktop ? '60%' : '43%', 
                    transform: 'translate(-50%, -50%)', 
                    textAlign: 'left', 
                    width: isDesktop ? '100%' : '80%',
                    color: 'white', 
                    }}>
                    <h4 style={{ margin: 0 }}>Great Movement</h4>
                    <h1 style={{ margin: 0 }}>Products</h1>
                    <p style={{ paddingTop: isDesktop ? '5px' : 0, width: isDesktop ? '300px' : '250px' }}>Jika Anda mempunyai kebutuhan Pindah, cukup hubungi 24 jam kami</p>
                    <h2>Hubungi Kami</h2>
                    <h1>082131131108</h1>
                    <label style={{ paddingLeft: isDesktop ? '80px' : '90px' }}>OR</label>
                    <br />
                    <Button id="button_contact" style={{ 
                        backgroundColor: '#ff9c00', 
                        color: 'white', 
                        margin: isDesktop ? '-11px' : '-3px',
                        width: '220px',
                        height: '50px',
                        borderRadius: '20px',
                        marginTop: isDesktop ? '30px' : '20px' 
                        }}>Contact Us</Button>
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
                <h2 style={{ textAlign: 'left' }}> About Products </h2>
                <p id="deskripsi_kerupuk" style={{ textAlign: 'left' }}> Pusat Kerupuk Indonesia adalah tempat terbaik untuk menemukan kerupuk berkualitas tinggi dari seluruh Indonesia. Kami menyajikan beragam varian kerupuk autentik dengan rasa dan tekstur yang lezat. Dapatkan koleksi lengkap kerupuk dari berbagai daerah dengan kualitas terbaik hanya di Pusat Kerupuk Indonesia. </p>
        
                    <div style={{ display: 'flex' }}>
                        <div className="about-1" style={{ fontSize: isDesktop ? '19px' : '13px', width: isDesktop ? '200px' : '138px' }}>
                            <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Koleksi lengkap</label>
                            </div>
                        </div>
                        <div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Kualitas terbaik</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Rasa autentik</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Tekstur Renyah</label>
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
                                <label>Standar produksi tinggi</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Pilihan camilan sehat</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Pengiriman nasional</label>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: isDesktop ? '10px' : '10px' }}>
                                <TbArrowBadgeRightFilled height={100} width={100} />
                            </div>
                            <div>
                                <label>Layanan pelanggan ramah</label>
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
                            <img style={{ width: '100px' }} decoding="async" src="https://gracethemesdemo.com/shifters/wp-content/themes/shifters-pro/images/counter-icon-1.png" />
                            <div style={{ marginLeft: '40px' }} ref={counterRef}>
                                <label style={{ fontSize: '58px', fontWeight: 800, LineWeight: '100%' }}>{count}+</label>
                                <br />
                                <label style={{ marginTop: '5px', color: '#3d3d3d', fontWeight: 600, fontSize: '17px' }}>Happy Customer</label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                             <img style={{ width: '100px', marginBottom: '10px' }} decoding="async" src="https://gracethemesdemo.com/shifters/wp-content/themes/shifters-pro/images/counter-icon-2.png" />
                             <div style={{ marginLeft: '40px' }}>
                             <label style={{ fontSize: '58px', fontWeight: 800, LineWeight: '100%' }}>{count1000}+</label>
                                <br />
                                <label style={{ marginTop: '5px', color: '#3d3d3d', fontWeight: 600, fontSize: '17px' }}>Running Products</label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                             <img style={{ width: '100px' }} decoding="async" src="https://gracethemesdemo.com/shifters/wp-content/themes/shifters-pro/images/counter-icon-3.png" />
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
                <label style={{ textAlign: 'left', fontWeight: 800, color: '#353535', width: '180px', fontSize: '34px' }}>Starting from Planning to Distribution</label>
                <p id="deskripsi_kerupuk">
                Pusat Kerupuk Indonesia mengutamakan kualitas dari awal perencanaan hingga distribusi. 
                Setiap langkah produksi dirancang secara cermat oleh tim ahli kami, mulai dari pemilihan 
                bahan baku berkualitas hingga proses pembuatan yang menggabungkan teknologi modern dengan metode tradisional. 
                Kami memastikan bahwa setiap kerupuk yang dihasilkan memiliki rasa autentik dan tekstur yang renyah, sehingga 
                memuaskan setiap lidah yang mencicipinya.
                <br />
                <br />
                Setelah melewati serangkaian uji kualitas yang ketat, produk kerupuk kami siap untuk didistribusikan ke seluruh 
                penjuru Indonesia. Melalui jaringan distribusi yang luas dan efisien, kami menjamin bahwa setiap pelanggan kami 
                dapat menikmati kerupuk berkualitas tinggi dengan cepat dan tepat waktu. Dengan pendekatan yang terintegrasi dalam 
                proses Starting from Planning to Distribution, Pusat Kerupuk Indonesia menjaga standar mutu dan kepuasan pelanggan 
                sebagai fokus utama dalam setiap langkahnya.
                </p>
                <Button style={{ backgroundColor: '#ff9c00', color: 'white', borderRadius: '20px', width: '170px', marginTop: '20px' }}>Get Started</Button>
            </div>
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

          <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? '100px' : '550px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
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
            <div style={{ width: '100%', backgroundColor: '#1f1e21', height: isDesktop ? '90px' : '200px', marginTop:  isDesktop ? '-10px' : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white' }}><label style={{ color:  "#ff9c00"}}>@2024</label> Pusat Kerupuk Indonesia</span>
            </div>
        </>
    )
}