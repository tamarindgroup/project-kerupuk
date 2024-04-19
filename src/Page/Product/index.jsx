import React, {useEffect, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography, Button } from "@mui/material";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { Image } from "@mui/icons-material";
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
import { useTranslation } from "react-i18next";
import { FcGlobe } from "react-icons/fc";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dataProduk from "../../data/produk";
import Header from "../Header";

export function Product() {

    const theme = useTheme();
    const { Meta } = Card;
    const { t, i18n } = useTranslation("global");
    const [Produk, setProduk] = useState(dataProduk);
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;
    const [isCardFlipped, setIsCardFlipped] = useState(
        Produk.map(() => false)
      );

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

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


      const toggleCardFlip = (index) => {
        const updatedIsCardFlipped = [...isCardFlipped];
        updatedIsCardFlipped[index] = !updatedIsCardFlipped[index];
        setIsCardFlipped(updatedIsCardFlipped);
      };

      

    return (
        <>
          <Header />

          
          <Container
              sx={{ 
                mt: isDesktop ? 20 : 40, 
                display: "flex", 
                marginLeft: isDesktop ? 10 : -2,
                width: "100%", 
                mb: 50 
            }}
            >
              <Grid spacing={ isDesktop ? 12 : 10}>
                {Produk.map((e, index) => (
                    <Grid item key={e._id} xs={12} sm={4} md={4} lg={4} mb={isDesktop ? 20 : 20}>
                      {isCardFlipped[index] ? (
                        <div
                          className={`product-card flipped-card`}
                          style={{
                            width: isDesktop ? "350px" : "340px",
                            height: isDesktop ? "600px" : '550px',
                            backgroundColor: "#f8f8f8",
                            borderRadius: "8px",
                            boxShadow:
                              "0px 8px 16px rgba(255, 165, 0, 0.6)",
                            transform: isCardFlipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                            transformStyle: "preserve-3d",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              backgroundColor: "#e6bf0d",
                              position: "relative",
                              borderRadius: "10px",
                              zIndex: "1",
                            }}
                          >
                            <Typography
                              id="title-produk"
                              style={{
                                textAlign: "center",
                                // fontFamily: "'Brush Script MT', cursive",
                                margin: 22,
                                color: "white",
                                fontSize: 35,
                                transform: isCardFlipped[index]
                                  ? "rotateY(180deg)"
                                  : "none",
                                transformStyle: "preserve-3d",
                              }}
                            >
                              {t("title-kerupuk.text")}
                            </Typography>
                          </div>
                          <p
                            type="secondary"
                            style={{
                              width: "100%",
                              textAlign: "justify",
                              paddingTop: "30px",
                              fontSize: !isDesktop ? "10px" : "10px",
                              transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                              transformStyle: "preserve-3d",
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {e[activeLanguage].deskripsi.split('\n').map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </p>
                          <br />
                          <Button
                            id="kembali"
                            style={{
                              marginTop: "10px",
                              transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                            }}
                            onClick={() => toggleCardFlip(index)}
                          >
                            {t("kembali.text")}
                          </Button>
                        </div>
                      ) : (
                        <div
                          className={`product-card`}
                          style={{
                            width: isDesktop ? "100%" : "340px",
                            height: isDesktop ? "600px" : '550px',
                            backgroundColor: "#f8f8f8",
                            borderRadius: "8px",
                            boxShadow:
                              "0px 8px 16px rgba(255, 165, 0, 0.6)",
                            transform: isCardFlipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            display: "flex",
                            margin: isDesktop ? "20px" : "6.5px",
                            flexDirection: "column",
                            padding: "20px",
                          }}
                        >
                          {/* {e[activeLanguage].versi && e[activeLanguage].versi === "baru" && (
                            <div
                             className="waving-flag"
                              style={{
                                zIndex: 3,
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                backgroundColor: 'green',
                                color: 'white',
                                padding: '5px',
                                borderRadius: '5px',
                                animation: 'wavingFlagAnimation 1s infinite'
                              }}
                            >
                              New
                            </div>
                          )}
                           {e[activeLanguage].versi && e[activeLanguage].versi === "favorite" && (
                            <div class="favorite-container">
                            <div class="favorite-flag">
                              Favorite
                            </div>
                            <div class="stars"></div>
                          </div>
                          )} */}
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              backgroundColor: "#e6bf0d",
                              position: "relative",
                              borderRadius: "10px",
                              top: "-20px",
                              zIndex: "1",
                            }}
                          >
                            <Typography
                              id="title-produk"
                              style={{
                                textAlign: "center",
                                // fontFamily: "'Brush Script MT', cursive",
                                margin: 22,
                                color: "white",
                                fontSize: 35,
                              }}
                            >
                              {t("title-kerupuk.text")}
                            </Typography>
                          </div>
                          <img src={e[activeLanguage].image} style={{ height: "300px" }} />
                          <h2
                            // title={
                            //   e[activeLanguage].kategori === "bahan-baku" ? "" : e[activeLanguage].nama
                            // }
                            style={{
                              marginTop: "30px",
                              marginBottom: "5px",
                              fontFamily: "'PT Serif', serif",
                              textAlign: "center",
                            }}
                          > { e[activeLanguage].nama } </h2>
                          <Button
                            id="review"
                            style={{
                              alignSelf: "center",
                            }}
                            onClick={() => toggleCardFlip(index)}
                          >
                            {t("review.text")}
                          </Button>
                        </div>
                      )}
                    </Grid>
                  ))}
              </Grid>
            </Container>




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

          <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 0 : '-300px' }}>
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