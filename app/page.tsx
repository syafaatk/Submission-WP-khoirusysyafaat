"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Facebook } from "../src/icons/Facebook";
import { FooterBig } from "../src/components/FooterBig";
import { FiArrowRight } from 'react-icons/fi';
import SliderComponent from './SliderComponent';


interface Berita {
  id: number;
  attributes: {
    judul: string;
    tanggal: string;
    gambar: {
      url: string;
    };
    // Add other properties as needed
  };
}

export default function Home() {
  const [beritas, setBeritas] = useState<Berita[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*');
        const data = await res.json();

        const judul = data.data[0]?.attributes?.judul;
        const id = data.data[0]?.id;
        console.log(judul);
        console.log(id);
        console.log('API Response:', data.data);

        if (Array.isArray(data.data)) {
          setBeritas(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sliderItems = [
    {
      id: 1,
      title: 'Slide 1',
      imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Slide 2',
      imageUrl: 'https://placekitten.com/800/401', // Replace with your image URL
    },
    // Add more items as needed
  ];
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {beritas.map((berita) => (
          <div className="group-8">
            <div key={berita.id}>
              <div className="group-9">
                <div className="overlap-group-3">
                  <div className="group-10">
                    <p className="text-wrapper-13">{berita.attributes.judul}</p>
                    <div className="text-wrapper-14">{berita.attributes.tanggal}</div>
                  </div>
                  <div className="vector-wrapper">
                    <img className="vector" alt="Vector" src={berita.attributes.gambar.url} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <h1>Your React-Slick Carousel</h1>
        <SliderComponent items={sliderItems} />
      </div> */}
      <div className="home">
      <div className="div-2">
        <div className="navbar">
          <div className="navbar-2">
            <div className="text-wrapper-7">Beranda</div>
            <div className="text-wrapper-8">Profil</div>
            <div className="text-wrapper-8">Berita</div>
            <div className="text-wrapper-8">Bidang</div>
            <div className="text-wrapper-8">Galeri</div>
            <div className="text-wrapper-8">Survey Kepuasan</div>
            <div className="text-wrapper-8">Informasi</div>
          </div>
          <div className="group-2">
            <img className="image-2" alt="Image" src="image1.png" />
            <div className="group-wrapper">
              <div className="group-3">
                <div className="text-wrapper-9">Koperasi</div>
                <div className="text-wrapper-10">Kota Palembang</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-4">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <img className="rectangle" alt="Rectangle" src="rectangle-9142.svg" />
              <img className="mask-group" alt="Mask group" src="mask-group.png" />
            </div>
          </div>
          <div className="group-5">
            <p className="text-wrapper-11">Selamat Datang di Dinas PPKUKM Kota Palembang</p>
            <p className="ida-berenang-di">
              ida berenang di Sungai Musi
              <br />
              Selamat datang di web PPKUKM Kota Palembang
              <br />
              Semoga dapat memberikan informasi
              <br />
              Kita wujudkan visi Palembang Emas Darussalam 2023
              <br />
              &#34;Pengelolaan Keuangan &amp; Aset Daerah yang Akuntabel menuju Opini Laporan Keuangan WTP&#34;
            </p>
            <div className="text-wrapper-12">Selayang Pandang</div>
          </div>
        </div>        
        <div className="group-6">
          <div className="group-7">
            <div className="overlap-2">
              {/* <Slider {...settings}>
                {beritas.map((berita) => (
                  <div key={berita.id} className="group">
                    <div className="overlap-group">
                      <div className="div">
                        <p className="text-wrapper">{berita.attributes.judul}</p>
                        <div className="text-wrapper-2">{berita.attributes.tanggal}</div>
                      </div>
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src={berita.attributes.gambar.url} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider> */}
            </div>
            <div className="group-12">
              <div className="group-13">
                <div className="text-wrapper-15">Berita PPKUKM</div>
                <div className="rectangle-2" />
              </div>
              <div className="group-14">
                <div className="text-wrapper-12">Selengkapnya</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <img className="group-15" alt="Group" src="group-2373.png" />
          <div className="frame">
            <div className="overlap-4">
              <FooterBig
                  BGClassName="footer-big-instance"
                  icon={<Facebook className="icon-instance-node" />}
                  locationClassName="footer-big-5-instance"
                  messageClassName="design-component-instance-node"
                  mobile="mobile-2.svg"
                  overlapGroupClassName="footer-big-2"
                  socialIconsClassName="footer-big-3"
                  songket="songket2-2-2.png" inputType={''}              />
              <img className="group-16" alt="Group" src="group-2373-2.png" />
            </div>
          </div>
        </div>
        <img className="group-17" alt="Group" src="group-5.png" />
        <div className="group-18">
          <div className="group-19">
            <div className="text-wrapper-16">Video UMKM</div>
            <div className="rectangle-2" />
          </div>
          <div className="frame-2">
            <div className="group-20">
              <div className="group-21">
                <div className="group-22">
                  <div className="text-wrapper-17">Infografis</div>
                  <div className="rectangle-3" />
                </div>
                <div className="group-23">
                  <div className="text-wrapper-18">Lihat Lainnya</div>
                  <FiArrowRight className="arrow-right-alt-instance" color="#016ABF" />
                </div>
                <div className="rectangle-4" />
              </div>
              <div className="overlap-group-4">
                <div className="frame-3">
                  <div className="group-24">
                    <div className="rectangle-5" />
                    <div className="group-25">
                      <img className="mask-group-2" alt="Mask group" src="mask-group-3.png" />
                      <div className="group-26">
                        <p className="text-wrapper-19">Selamat Hari Raya Nyepi 2022</p>
                        <p className="kamis-maret"> Kamis, 3 Maret 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="group-27">
                    <div className="rectangle-5" />
                    <div className="group-25">
                      <img className="mask-group-2" alt="Mask group" src="mask-group-3.png" />
                      <div className="group-26">
                        <p className="text-wrapper-19">Selamat Hari Raya Nyepi 2022</p>
                        <p className="kamis-maret"> Kamis, 3 Maret 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="group-28">
                    <div className="rectangle-5" />
                    <div className="group-25">
                      <img className="mask-group-2" alt="Mask group" src="mask-group-3.png" />
                      <div className="group-26">
                        <p className="text-wrapper-19">Selamat Hari Raya Nyepi 2022</p>
                        <p className="kamis-maret"> Kamis, 3 Maret 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="group-29">
                    <div className="rectangle-5" />
                    <div className="group-25">
                      <img className="mask-group-2" alt="Mask group" src="mask-group-7.png" />
                      <div className="group-26">
                        <p className="text-wrapper-19">Selamat Hari Raya Nyepi 2022</p>
                        <p className="kamis-maret"> Kamis, 3 Maret 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rectangle-6" />
              </div>
            </div>
          </div>
          <div className="group-30">
            <div className="group-31">
              <div className="overlap-5">
                <div className="rectangle-7" />
                <div className="group-32">
                  <div className="overlap-group-5">
                    <div className="rectangle-8" />
                    <img className="vector-3" alt="Vector" src="vector-6.svg" />
                  </div>
                </div>
              </div>
              <div className="group-33">
                <p className="text-wrapper-20">
                  Wawako Memantau Pendistribusian Bantuan dari Yayasan Budha Tzu Chi di Rumah...
                </p>
                <div className="text-wrapper-21">Selasa, 21 Februari 2022</div>
              </div>
            </div>
            <div className="group-34">
              <div className="group-35">
                <div className="group-36">
                  <div className="overlap-6">
                    <div className="group-37">
                      <div className="overlap-group-6">
                        <div className="rectangle-9" />
                        <img className="vector-4" alt="Vector" src="vector-7.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-38">
                  <p className="text-wrapper-22">PPS Himpun Rp44M, Walikota Palembang Himbau Masyarakat...</p>
                  <div className="text-wrapper-23">Selasa, 21 Februari 2022</div>
                </div>
              </div>
              <div className="group-39">
                <div className="group-40">
                  <div className="overlap-6">
                    <div className="group-37">
                      <div className="overlap-group-6">
                        <div className="rectangle-9" />
                        <img className="vector-4" alt="Vector" src="vector-8.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-38">
                  <p className="text-wrapper-22">April Proyek Tahap Dua Sekanak Labidaro Palembang Dimulai</p>
                  <div className="text-wrapper-23">Selasa, 21 Februari 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-41">
          <div className="group-42">
            <div className="group-43">
              <div className="text-wrapper-15">Produk UMKM</div>
              <div className="rectangle-2" />
            </div>
            <div className="group-14">
              <div className="text-wrapper-12">Selengkapnya</div>
              <FiArrowRight className="arrow-right-alt" />
            </div>
          </div>
          <div className="group-44">
            <div className="group-45">
              <img className="image-3" alt="Image" src="image-38.png" />
              <div className="group-46">
                <div className="text-wrapper-24">Pempek</div>
                <div className="text-wrapper-25">Rp 2.000</div>
                <div className="group-47">
                  <div className="group-48" />
                  <div className="text-wrapper-26">Pempek Sarayi</div>
                </div>
              </div>
            </div>
            <div className="group-49">
              <img className="image-3" alt="Image" src="image-41.png" />
              <div className="group-46">
                <div className="text-wrapper-24">Rajutan</div>
                <div className="text-wrapper-25">Rp 75.000</div>
                <div className="group-50">
                  <img className="image-4" alt="Image" src="image-37.png" />
                  <div className="text-wrapper-26">Rajutan MommyYanti</div>
                </div>
              </div>
            </div>
            <div className="group-51">
              <img className="image-3" alt="Image" src="image-40.png" />
              <div className="group-46">
                <div className="text-wrapper-24">Cemilan Sehat</div>
                <div className="text-wrapper-25">Rp 35.000</div>
                <div className="group-52">
                  <img className="image-5" alt="Image" src="image-36.png" />
                  <div className="text-wrapper-26">soniaverina99</div>
                </div>
              </div>
            </div>
            <div className="group-53">
              <img className="image-3" alt="Image" src="image-39.png" />
              <div className="group-46">
                <div className="text-wrapper-24">Makanan Ringan</div>
                <div className="text-wrapper-25">Rp 10.000</div>
                <div className="group-52">
                  <img className="image-5" alt="Image" src="image-35.png" />
                  <div className="text-wrapper-26">soniaverina99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-54">
          <div className="overlap-7">
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <div className="group-55">
              <div className="dinas-koperasi-UKM">Dinas Koperasi &amp; UKM</div>
              <p className="text-wrapper-27">Dinas Koperasi dan Usaha Kecil Menengah</p>
            </div>
          </div>
        </div>
        <div className="text-wrapper-28">Cari Berdasarkan</div>
        <div className="element-wrapper">
          <img className="element" alt="Element" src="103180227105110-1.png" />
        </div>
        <div className="group-56">
          <img className="group-57" alt="Group" src="group-771408.png" />
        </div>
        <div className="group-58">
          <div className="group-59">
            <img className="group-60" alt="Group" src="group-771392.png" />
          </div>
          <div className="agenda-pelatihan">
            Agenda
            <br />
            Pelatihan
          </div>
        </div>
        <div className="group-61">
          <div className="group-59">
            <img className="group-62" alt="Group" src="group-771407.png" />
          </div>
          <div className="text-wrapper-29">Galeri</div>
        </div>
        <div className="group-63">
          <div className="group-64">
            <div className="group-65">
              <div className="group-66">
                <div className="overlap-8">
                  <img className="group-67" alt="Group" src="group-771395.png" />
                  <div className="group-68">
                    <div className="overlap-group-7">
                      <img className="vector-5" alt="Vector" src="vector-5.svg" />
                      <img className="vector-6" alt="Vector" src="vector-6.svg" />
                      <div className="text-wrapper-30">UMKM</div>
                      <img className="group-69" alt="Group" src="group-2.png" />
                      <img className="group-70" alt="Group" src="group-3.png" />
                      <img className="group-71" alt="Group" src="group-4.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-31">
            Pendataan
            <br />
            UMKM
          </div>
        </div>
        <div className="konsultasi-UMKM">
          Konsultasi
          <br />
          UMKM
        </div>
        <div className="konsultasi-klinik">
          Konsultasi
          <br />
          Klinik Koperasi
        </div>
        <div className="group-72">
          <div className="text-wrapper-31">
            Pendataan
            <br />
            Koperasi
          </div>
          <div className="group-59">
            <div className="group-73">
              <div className="overlap-9">
                <img className="group-74" alt="Group" src="group-771400.png" />
                <div className="group-75">
                  <div className="overlap-group-8">
                    <img className="vector-7" alt="Vector" src="vector-7.svg" />
                    <img className="vector-8" alt="Vector" src="vector-8.svg" />
                    <div className="text-wrapper-32">Koperasi</div>
                    <img className="group-76" alt="Group" src="group-5.png" />
                    <img className="group-77" alt="Group" src="group-6.png" />
                    <img className="vector-9" alt="Vector" src="vector-9.svg" />
                    <img className="vector-10" alt="Vector" src="vector-10.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
