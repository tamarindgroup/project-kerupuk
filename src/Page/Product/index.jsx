import React, {useEffect, useState} from "react";
import { Grid, Typography, Button } from "@mui/material";
import Card from '@mui/material/Card';
import Textra from 'react-textra'
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import { Input, Empty } from 'antd';
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
import { FaCircleArrowUp } from "react-icons/fa6";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTranslation } from "react-i18next";
import dataProduk from "../../data/produk";

export function Product() {

    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [Produk, setProduk] = useState(dataProduk);
    const [language, setLanguage] = useState('');
    const activeLanguage = i18n.language;
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    const [showMore, setShowMore] = useState(6);
    const [searchValue, setSearchValue] = useState("");
    const [isCardFlipped, setIsCardFlipped] = useState(
        Produk.map(() => false)
      );
    const [selectedBrand, setSelectedBrand] = useState('Semua');

    const handleCategoryClick = (category) => {
        setSelectedBrand(category);
        setSearchValue(""); // Reset search value when category changes
      };

    const filteredProducts = Produk
    ?.filter(
        (product) => 
        (selectedBrand === 'Semua' || product[activeLanguage].brand === selectedBrand) &&
        (product[activeLanguage].nama.toLowerCase().includes(searchValue.toLowerCase()))
    )
    .slice(0, showMore);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });


      const toggleCardFlip = (index) => {
        const updatedIsCardFlipped = [...isCardFlipped];
        updatedIsCardFlipped[index] = !updatedIsCardFlipped[index];
        setIsCardFlipped(updatedIsCardFlipped);
      };

      const handleSearchIconMouseDown = (event) => {
        event.stopPropagation();
      };

      

    return (
        <>
          
          <div
              style={{ 
                marginTop: isDesktop ? 100 : 300, 
                display: "block", 
                marginLeft: isDesktop ? 10 : -2,
                width: isDesktop ? "100%" : '100%', 
                marginBottom: isDesktop ? 10 : 5
            }}
            >

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Input.Search
              placeholder={t("Search")}
              onMouseDown={handleSearchIconMouseDown}
              onSearch={(value) => {
                const filteredProducts = Produk
                  ?.filter(
                    (data) =>
                      (selectedBrand === 'Semua' || data[activeLanguage].brand === selectedBrand) &&
                      (data[activeLanguage].nama.toLowerCase().includes(value.toLowerCase()))
                  )
                  .slice(0, showMore);
      
                setIsSearchEmpty(filteredProducts.length === 0);
                setSearchValue(value);
              }}
              style={{
                width: isDesktop ? '50%' : '90%',
                marginBottom: '20px',
                '& .ant-input-search-icon': {
                  backgroundColor: 'orange',
                },
              }}
            />
            </div>

            <Grid container xs={!isDesktop ? 10 : 12} style={{ display: 'flex', justifyContent: 'center', marginLeft: !isDesktop ? 18 : 140 }}>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 1 }>
                    <Button
                        className={`category-button ${selectedBrand === 'kapal' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('kapal')}
                        style={{ fontSize: '9px', width: isDesktop ? '150px' : '90px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-kapal.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 1 }>
                    <Button
                        className={`category-button ${selectedBrand === 'shinjuku' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('shinjuku')}
                        style={{ fontSize: '9px', width: isDesktop ? '150px' : '90px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-shinjuku.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 1 }>
                    <Button
                        className={`category-button ${selectedBrand === 'napoleon' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('napoleon')}
                        style={{ fontSize: '9px', width: isDesktop ? '150px' : '90px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-napoleon.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                    <Button
                        className={`category-button ${selectedBrand === 'bunga-merah' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('bunga-merah')}
                        style={{ fontSize: '2px', width: isDesktop ? '180px' : '130px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-bunga-merah.text")} </label>
                    </Button>
                    </Grid>
               </Grid>


              <Grid container spacing={ isDesktop ? 12 : 10} justifyContent="center" mt={6}>
              {isSearchEmpty ? (
                  <Empty description={t("component-empty.text")} 
                  style={{ 
                    marginTop: !isDesktop ? "60px" : '90px', 
                    marginBottom: isDesktop ? '300px' : '10px', 
                    display: 'block', 
                    justifyContent: 'center',
                    marginLeft: '85px' 
                }} />
                ) : (
                filteredProducts.map((e, index) => (
                    <Grid item key={e._id} xs={12} sm={4} md={4} lg={4} mb={isDesktop ? 20 : 20}>
                      {isCardFlipped[index] ? (
                        <div
                          className={`product-card flipped-card`}
                          style={{
                            width: isDesktop ? "80%" : "90%",
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
                              background: 'rgba(205, 88, 57, 1.0)',
                              position: "relative",
                              borderRadius: "10px",
                              zIndex: "1",
                            }}
                          >
                            <Typography
                              id="list-menu"
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
                              width: "80%",
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
                            width: isDesktop ? "80%" : "340px",
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
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              background: 'rgba(205, 88, 57, 1.0)',
                              position: "relative",
                              borderRadius: "10px",
                              top: "-20px",
                              zIndex: "1",
                            }}
                          >
                            <Typography
                              id="list-menu"
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
                          id="list-menu"
                            style={{
                              color: 'gray',
                              marginTop: "30px",
                              marginBottom: "5px",
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
                  )))}
              </Grid>
            </div>



                <FaCircleArrowUp 
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

          <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 0 : '10px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("telepon.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}><Textra effect="rightLeft" data={['082131131108', '085935331734']} /></span>
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