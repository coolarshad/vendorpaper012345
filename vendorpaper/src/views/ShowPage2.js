import React, { useEffect, useState } from 'react';
import "./ShowPage.css";
import { Link } from 'react-router-dom';
import pic from './../assets/vendor-paper-logo.png';
import axios from 'axios';
import NavBar from '../components/NavBar';
import CategoryList from '../components/CategoryList';
import { Button } from 'bootstrap';
import ProductTile from '../components/ProductTile';
import c_logo from "../assets/c_logo.png";
import c_bg from "../assets/c_bg.png";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import tilepic1 from "../assets/tilepic-1.jpg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});


export default function ShowPage() {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const [companyInfo, setCompanyInfo] = useState({
        id: '',
        name: 'Company name',
        address: 'Company address',
        phone: '++977 9809211878',
        email: 'coolarshad96@gmailcom',
        website: 'http://noticevalley.com',
        fax: '+977 40023',
        description: '',
        logo: '',
        location: '',
        tags: '',
        images: [],
        categories: [],
        time: [],
        products: []
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/company/companyproduct/20/');
                const data = response.data;
                setCompanyInfo(data);
                console.log(data)
            } catch (error) {
                // Handle errors if necessary
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getProductImage = (product) => {
        const img = product.product_images?.[0];
        if (img) {
            return `http://localhost:8000${img.image}`
        }
        return pic;
    }

    // const items = [{
    //     "Telecommunications and Computing": ['Computing and Technology',
    //         'Data Storage and Management',
    //         'Internet and E-Commerce',
    //         'Telecommunications and Networks']
    // }, {
    //     "Pharmaceuticals": ['Anesthetic Drugs',
    //         'Animal Pharmaceuticals',
    //         'Antibiotics',
    //         'Biopharmaceuticals',
    //         'Clinical Trials',
    //         'Drug Delivery',
    //         'Drug Discovery',
    //         'Drugs by Therapeutic Area',
    //         'Generic Drugs',
    //         'Oncology Drugs',
    //         'Over the Counter (OTC) Drugs',
    //         'Pharmaceutical Intermediates',
    //         'Pharmaceutical Manufacturing',
    //         'Pharmacoeconomics',
    //         'Vitamins and Dietary Supplements']
    // }]
    const items =  ['Anesthetic Drugs',
            'Animl Pharmaceuticals',
            'Antibiotics',
            'Biopharmaceuticals',
            
            'Drug Delivery',
            'Drug Discovery',
            'Drugs by Therapeutic Area',
            'Generic Drugs',
            'Oncology Drugs',
            'Over the Counter (OTC) Drugs',
            'Pharmaceutical Intermediates',
            'Pharmaceutical Manufacturing',
            'Pharmacoeconomics',
            'Drug Delivery',
            'Drug Discovery',
            'Drugs by Therapeutic Area',
            'Generic Drugs',
            'Oncology Drugs',
            'Vitamins and Dietary Supplements']


    // Get all accordion items
    const accordionItems = document.querySelectorAll('.product-type-container');

    // Add click event listeners to each header
    accordionItems.forEach((item) => {
        const header = item.querySelector('.product-type-header');
        const content = item.querySelector('.product-type-content');

        header.addEventListener('click', () => {
            if (content.style.height === '250px') {
                content.style.height = '500px';
            } else {
                content.style.height = '250px';
            }
        });
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      };
    return (
        <div className="flex flex-col bg-gray-200" >
            <NavBar />
            <React.Fragment class="min-h-full">
            <div class="w-screen h-40 flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${c_bg})`}}>
                    <img class="h-30 w-48 " src={c_logo} alt="Description of the image" />
                    <div class="flex flex-col justify-start items-start mr-5 ml-5">
                        <div class="text-2xl font-bold">Shenzhen Poofect Technology Co., Ltd.</div>
                        <div class="flex">
                            <div class="font-bold  mr-5 text-sky-700">Custom manufacturer</div>
                            <div class="font-bold  mr-5">12 years</div>
                            <div class="font-bold  mr-5">Guangdong, China</div>
                        </div>
                        <div> Main categories: Smart Watch/Earphone/Earbuds</div>
                        <div class="flex">
                            <div class="wi-fit h-fit bg-slate-200 p-2 rounded mr-1"><span class="font-bold">Ranked #1</span> most popular in Smart Watches</div>
                            <div class="wi-fit h-fit bg-slate-200 p-2 rounded mr-1">Design-based customization</div>
                            <div class="wi-fit h-fit bg-slate-200 p-2 rounded mr-1">Competitive OEM factory</div>
                        </div>
                    </div>
                    <div>
                        <div class="w-auto m-1 mb-5 h-fit pt-1 pb-1 pr-4 pl-4 rounded text-white bg-sky-600">Verified by SGS Group</div>
                        <div class="w-auto m-1 h-fit pt-1 pb-1 pr-4 pl-4 bg-orange-500 rounded-full text-white">Contact supplier</div>
                        <div class="w-auto m-1 h-fit pt-1 pb-1 pr-4 pl-4 bg-[hsla(0,0%,100%,.5)] rounded-full text-current border-inherit border-2">Chat now</div>
                    </div>
                </div>
                <div class="w-screen h-10 bg-slate-600 flex justify-center items-center">
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Home</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Products</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Company Overview</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Contact</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Company Rating & Reviews</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">About Us</a></div>
                </div>
                <div class="w-screen h-[70vh]">
                    <Slider {...settings}>
                        <div class="w-auto h-auto">
                            <img class="w-screen h-[67vh]" src={slider1} />
                        </div>
                        <div class="w-auto h-auto">
                            <img class="w-screen h-[67vh]" src={slider2} />
                        </div>
                        
                    </Slider>
                </div>
                <div class="w-screen p-6">
                    <p className='text-2xl font-medium'>Select By Categories</p>
                    <div class="h-48 flex flex-col flex-wrap justify-start items-start ">
                        {items.map((item, index) => (
                            <div key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div class="w-auto h-auto flex flex-col justify-center items-center">
                    <div class="w-auto h-auto mt-5 m-3 ">
                        <p className='font-bold text-3xl'>Company contact information</p>
                        <div className='flex justify-center items-center content-center w-auto justify-end bg-slate-100 rounded m-1'>
                            <img src={c_logo} className='h-20 w-20 rounded-full border-current' />
                            <div className='flex flex-col items-start justify-end p-3 mt-3'>
                                <p className='text-2xl font-bold leading-3 mb-1'>Ms. Sammi Luo</p>
                                <p className='text-base'>Sales Manager</p>
                            </div>
                        </div>
                        <div className='flex justify-center bg-slate-100 rounded m-1'>
                            <div className='p-3 text-left'>
                                <p><span className='font-bold'>Company phone: </span>999999999999</p>
                                <p><span className='font-bold'>Company mobile: </span>999999999999</p>
                            </div>
                            <div className='p-3 text-left'>
                                <p><span className='font-bold'>Company fax: </span> 999999999999</p>
                                <p><span className='font-bold'>Company website: </span>999999999999</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto m-1 p-1 flex justify-center items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14133.976201915886!2d85.34463115!3d27.67112125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1707236668405!5m2!1sen!2snp"
                            width="1000"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
                <div class="w-auto h-auto flex justify-center items-center mt-5">
                    <div className='p-5 flex flex-col items-start bg-slate-100 rounded'>
                        <p className='font-bold text-3xl'>Performance</p>
                        <p><span className='font-bold text-3xl'>4.4/5</span> <span className='font-bold'>Satisfied</span></p>
                        <p>3604 <span className='font-bold'>reviews</span></p>
                        <div className='flex flex-col items-start '>
                            <div className='mt-2'><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Minor customization</span></div>
                            <div className='mt-2'><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Full customization</span></div>
                            <div className='mt-2'><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Raw-material traceability identification</span></div>
                            <div className='mt-2'><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Finished product inspection</span></div>
                            <div className='mt-2'><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">CE</span></div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <iframe className='w-[600px] h-[390px]' src="https://www.youtube.com/embed/RIv9SiI2bSQ?list=RDOPazrdwYAm0" title="Dil Ka Telephone 2.0 - Full Video | Dream Girl 2 | Ayushmann, Ananya | Meet Bros,Jonita,Jubin,Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="w-screen h-auto flex flex-col justify-evenly items-center">
                    <div className='text-3xl font-bold text-left m-3 p-2'>Overall Rating</div>
                    <div className='flex justify-center items-center m-3 p-2'>
                        <div className='text-3xl font-bold text-orange-600'>4.5/5</div>
                        <div className='flex flex-col ml-2 items-start'>
                            <div className='font-bold'>Satisfied</div>
                            <div className='font-medium'>18 Reviews</div>
                        </div>
                    </div>
                    <div className='flex  justify-evenly'>
                        <div className='flex flex-col'>
                            <div className='flex justify-evenly items-start bg-slate-100 rounded m-1'>
                                <div className='flex p-3'>
                                    <div className='font-medium p-2'>Supplier Service</div>
                                    <div className='font-bold p-2'>5 star</div>
                                    <div className='font-medium p-2'>Very Satisfied</div>
                                </div>
                                <div className='flex flex-col p-3'>
                                    <div className='flex justify-center items-center'>
                                        <div className='font-bold p-1'>5 stars</div>
                                        <div className='w-32 h-0 p-1 rounded-full bg-orange-600'></div>
                                        <div className='font-bold p-1'>100% (17)</div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='font-bold p-1'>5 stars</div>
                                        <div className='w-32 h-0 p-1 rounded-full bg-orange-600'></div>
                                        <div className='font-bold p-1'>100% (17)</div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='font-bold p-1'>5 stars</div>
                                        <div className='w-32 h-0 p-1 rounded-full bg-orange-600'></div>
                                        <div className='font-bold p-1'>100% (17)</div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='font-bold p-1'>5 stars</div>
                                        <div className='w-32 h-0 p-1 rounded-full bg-orange-600'></div>
                                        <div className='font-bold p-1'>100% (17)</div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='font-bold p-1'>5 stars</div>
                                        <div className='w-32 h-0 p-1 rounded-full bg-orange-600'></div>
                                        <div className='font-bold p-1'>100% (17)</div>
                                    </div>
                                </div>
                            </div>
                         

                        </div>
                        
                    </div>
                </div>
                <div class="w-fit h-auto p-10">
                    <div className='m-1 mt-5 flex flex-col  items-start justify-center'>
                        <div className='m-1 p-2 w-screen rounded text-start bg-white text-2xl font-bold'>Categories One</div>

                        <div className='flex flex-wrap'>
                            <div className='w-60 pb-2 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                                <button class="bg-cyan-500 hover:bg-green-400 py-1 px-5 rounded-full">
                                    View
                                </button>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-white rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='m-1 mt-5 flex flex-col  items-start justify-center'>
                        <div className='m-1 p-2 w-screen rounded text-start bg-white text-2xl font-bold'>Categories Two</div>

                        <div className='flex flex-wrap'>
                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>

                            <div className='w-60 p-1 m-1 bg-slate-100 rounded flex flex-col items-center'>
                                <img src={tilepic1} alt="watch pic" className='w-56 h-44 text-center' />
                                <div className='text-start'>
                                    <p className='p-1 text-xl font-medium '>NAVIFORCE 9099 Digital Watch Sport Clock Date Quartz Men Fashion Luxury Brand Watches</p>
                                    <p className='text-xl font-bold text-start leading-3'>Rs. 3.00</p>
                                    <p className='font-normal text-start text-base leading-3'>Min. Order: 1 piece</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}